import { databaseConnection } from '../../../../src/app/database/database-connection'
import { setupApp } from '../../../../src/app/app'
import { generateMockToken } from '../../../helpers/auth'
import { createMockPlatformWithOwner, createMockUser, setupMockApiKeyServiceAccount } from '../../../helpers/mocks'
import { StatusCodes } from 'http-status-codes'
import { FastifyInstance } from 'fastify'
import { PlatformRole, PrincipalType, UserStatus, apId } from '@activepieces/shared'

let app: FastifyInstance | null = null

beforeAll(async () => {
    await databaseConnection.initialize()
    app = await setupApp()
})

afterAll(async () => {
    await databaseConnection.destroy()
    await app?.close()
})

describe('Enterprise User API', () => {
    describe('List users endpoint', () => {
        it('Returns a list of users', async () => {
            // arrange
            const { mockOwner: mockOwnerOne, mockPlatform: mockPlatformOne } = createMockPlatformWithOwner()
            const { mockOwner: mockOwnerTwo, mockPlatform: mockPlatformTwo } = createMockPlatformWithOwner()

            await databaseConnection.getRepository('user').save([mockOwnerOne, mockOwnerTwo])
            await databaseConnection.getRepository('platform').save([mockPlatformOne, mockPlatformTwo])

            const testToken = await generateMockToken({
                id: mockOwnerOne.id,
                type: PrincipalType.USER,
                platform: {
                    id: mockPlatformOne.id,
                    role: PlatformRole.OWNER,
                },
            })

            // act
            const response = await app?.inject({
                method: 'GET',
                url: '/v1/users',
                query: {
                    platformId: mockPlatformOne.id,
                },
                headers: {
                    authorization: `Bearer ${testToken}`,
                },
            })

            // assert
            expect(response?.statusCode).toBe(StatusCodes.OK)
            const responseBody = response?.json()

            expect(Object.keys(responseBody)).toHaveLength(3)
            expect(responseBody.data).toHaveLength(1)
            expect(responseBody.data[0].id).toBe(mockOwnerOne.id)
        })

        it('Allows service accounts', async () => {
            // arrange
            const { mockOwner, mockPlatform, mockApiKey } = setupMockApiKeyServiceAccount()

            await databaseConnection.getRepository('user').save([mockOwner])
            await databaseConnection.getRepository('platform').save([mockPlatform])
            await databaseConnection.getRepository('api_key').save([mockApiKey])

            // act
            const response = await app?.inject({
                method: 'GET',
                url: '/v1/users',
                query: {
                    platformId: mockPlatform.id,
                },
                headers: {
                    authorization: `Bearer ${mockApiKey.value}`,
                },
            })

            // assert
            expect(response?.statusCode).toBe(StatusCodes.OK)
            const responseBody = response?.json()

            expect(Object.keys(responseBody)).toHaveLength(3)
            expect(responseBody.data).toHaveLength(1)
            expect(responseBody.data[0].id).toBe(mockOwner.id)
        })

        it('Requires principal to be platform owner', async () => {
            // arrange
            const mockPlatformId = apId()

            const testToken = await generateMockToken({
                type: PrincipalType.USER,
            })

            // act
            const response = await app?.inject({
                method: 'GET',
                url: '/v1/users',
                query: {
                    platformId: mockPlatformId,
                },
                headers: {
                    authorization: `Bearer ${testToken}`,
                },
            })

            // assert
            expect(response?.statusCode).toBe(StatusCodes.FORBIDDEN)
            const responseBody = response?.json()

            expect(responseBody?.code).toBe('AUTHORIZATION')
        })

        it('Fails if platformId is not present in query', async () => {
            // arrange
            const testToken = await generateMockToken({ type: PrincipalType.USER })

            // act
            const response = await app?.inject({
                method: 'GET',
                url: '/v1/users',
                headers: {
                    authorization: `Bearer ${testToken}`,
                },
            })

            // assert
            expect(response?.statusCode).toBe(StatusCodes.BAD_REQUEST)
            const responseBody = response?.json()

            expect(responseBody.message).toBe('querystring must have required property \'platformId\'')
        })
    })

    describe('Suspend user endpoint', () => {
        it('Updates user status to be SUSPENDED', async () => {
            // arrange
            const { mockOwner, mockPlatform } = createMockPlatformWithOwner()

            const mockUser = createMockUser({
                platformId: mockPlatform.id,
                status: UserStatus.VERIFIED,
            })

            await databaseConnection.getRepository('user').save([mockOwner, mockUser])
            await databaseConnection.getRepository('platform').save([mockPlatform])

            const testToken = await generateMockToken({
                id: mockOwner.id,
                type: PrincipalType.USER,
                platform: {
                    id: mockPlatform.id,
                    role: PlatformRole.OWNER,
                },
            })

            // act
            const response = await app?.inject({
                method: 'PATCH',
                url: `/v1/users/${mockUser.id}/suspend`,
                headers: {
                    authorization: `Bearer ${testToken}`,
                },
            })

            // assert
            expect(response?.statusCode).toBe(StatusCodes.NO_CONTENT)

            const user = await databaseConnection.getRepository('user').findOneBy({ id: mockUser.id })
            expect(user?.status).toBe(UserStatus.SUSPENDED)
        })

        it('Fails if user doesn\'t exist', async () => {
            // arrange
            const nonExistentUserId = apId()

            const testToken = await generateMockToken({
                type: PrincipalType.USER,
                platform: {
                    id: apId(),
                    role: PlatformRole.OWNER,
                },
            })

            // act
            const response = await app?.inject({
                method: 'PATCH',
                url: `/v1/users/${nonExistentUserId}/suspend`,
                headers: {
                    authorization: `Bearer ${testToken}`,
                },
            })

            // assert
            expect(response?.statusCode).toBe(StatusCodes.NOT_FOUND)
        })

        it('Allows service accounts', async () => {
            // arrange
            const { mockOwner, mockPlatform, mockApiKey } = setupMockApiKeyServiceAccount()

            const mockUser = createMockUser({
                platformId: mockPlatform.id,
                status: UserStatus.VERIFIED,
            })

            await databaseConnection.getRepository('user').save([mockOwner, mockUser])
            await databaseConnection.getRepository('platform').save([mockPlatform])
            await databaseConnection.getRepository('api_key').save([mockApiKey])

            // act
            const response = await app?.inject({
                method: 'PATCH',
                url: `/v1/users/${mockUser.id}/suspend`,
                headers: {
                    authorization: `Bearer ${mockApiKey.value}`,
                },
            })

            // assert
            expect(response?.statusCode).toBe(StatusCodes.NO_CONTENT)

            const user = await databaseConnection.getRepository('user').findOneBy({ id: mockUser.id })
            expect(user?.status).toBe(UserStatus.SUSPENDED)
        })

        it('Requires principal to be platform owner', async () => {
            // arrange
            const mockUserId = apId()

            const testToken = await generateMockToken({
                type: PrincipalType.USER,
            })

            // act
            const response = await app?.inject({
                method: 'PATCH',
                url: `/v1/users/${mockUserId}/suspend`,
                headers: {
                    authorization: `Bearer ${testToken}`,
                },
            })

            // assert
            expect(response?.statusCode).toBe(StatusCodes.FORBIDDEN)
            const responseBody = response?.json()

            expect(responseBody?.code).toBe('AUTHORIZATION')
        })
    })
})
