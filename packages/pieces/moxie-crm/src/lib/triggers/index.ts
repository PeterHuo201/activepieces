import { moxieCRMRegisterTrigger } from './register-trigger';
export const enum MoxieCRMEventType {
  CLIENT_CREATED = 'ClientCreate',
  CLIENT_UPDATED = 'ClientUpdate',
  CLIENT_DELETED = 'ClientDelete',
  PROJECT_CREATED = 'ProjectCreate',
  PROJECT_UPDATED = 'ProjectUpdate',
  PROJECT_COMPLETED = 'ProjectComplete',
  TASK_CREATED = 'DeliverableCreate',
  TASK_UPDATED = 'DeliverableUpdate',
  TASK_DELETED = 'DeliverableDelete',
  TASK_APPROVAL = 'DeliverableApproval',
  FORM_SUBMITTED = 'FormCompleted',
  TIME_ENTRY_CREATED = 'TimerCreate',
  TIME_ENTRY_UPDATED = 'TimerUpdate',
  TIME_ENTRY_DELETED = 'TimerDelete',
  MEETING_SCHEDULED = 'MeetingScheduled',
  MEETING_UPDATED = 'MeetingUpdated',
  MEETING_CANCELLED = 'MeetingCancelled',
}

const MoxieCRMWebhookSampleData = {
  PROJECT_EVENT_SAMPLE_DATA: {
    id: '6434749e852ec5116d546759',
    accountId: 10016,
    sampleData: false,
    clientId: '64230b34bd4bbd275c1f1739',
    name: 'Design & Development of Website',
    description: null,
    active: true,
    startDate: '2023-05-16',
    dueDate: '2023-06-06',
    dateCreated: '2023-04-10T20:42:06.572Z',
    client: {
      accountId: 10016,
      sampleData: false,
      id: '64230b34bd4bbd275c1f1739',
      clientType: 'Client',
      name: 'Moxie',
      initials: 'MOX1',
      locality: 'CO',
      country: null,
      color: '#3BDBBE',
      projects: [],
      hourlyAmount: 0,
      archive: false,
      currency: 'AUD',
      logo: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.withmoxie.com&size=64',
      leadSource: 'Google',
      contact: null,
    },
    leadGenArchived: false,
    feeSchedule: {
      feeType: 'Fixed Price',
      amount: 5000,
      retainerSchedule: null,
      estimateMax: null,
      estimateMin: null,
      retainerStart: null,
      retainerTiming: 'Advanced',
      retainerOverageRate: null,
      taxable: false,
      fromProposalId: null,
      fromProposalSignedDate: null,
      updatedDate: '2023-04-10T20:42:16.141Z',
      updatedBy: 'G. Mina',
    },
    proposalId: null,
    proposalName: null,
    hexColor: '#3BDBBEFF',
    portalAccess: 'Overview',
    showTimeWorkedInPortal: true,
    files: [],
    deliverables: [],
  },
  CLIENT_EVENT_SAMPLE_DATA: {
    id: '63c5ea0c840e3207033931b5',
    accountId: 10016,
    name: 'Moxie',
    clientType: 'Client',
    initials: 'MOX',
    address1: '123 Any Street',
    address2: 'Suite 100',
    city: 'Anytown',
    locality: 'NY',
    postal: '12345',
    country: 'US',
    website: 'www.withmoxie.com',
    phone: '+18887231235',
    color: '#CE62E9',
    logo: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.withmoxie.com&size=64',
    s3LogoFile: null,
    taxId: '1212121212',
    leadSource: 'PPC',
    archive: false,
    leadGenArchived: false,
    paymentTerms: {
      paymentDays: 7,
      latePaymentFee: 5,
      depositAmount: 50,
      depositType: 'Percentage',
      whoPaysCardFees: 'Freelancer',
      fromProposalId: '640b60752a524d1c45b6c528',
      fromProposalSignedDate: '2023-03-14T14:41:01.908Z',
      updatedDate: '2023-04-04T16:17:27.315Z',
      updatedBy: 'G. Mina',
    },
    payInstructions: null,
    hourlyAmount: 100,
    roundingIncrement: 1,
    currency: 'USD',
    lastInvoiceRunDate: null,
    nextInvoiceRunDate: null,
    importRecordId: null,
    integrationKeys: {
      quickbooksId: null,
      xeroId: null,
    },
    files: [],
    comments: [],
    created: '2023-01-17T00:21:32.663Z',
    sampleData: false,
    stripeClientId: 'cus_NFTM1mAFkgtfUI',
    notes: null,
    notifyOnCreate: null,
    contacts: [
      {
        id: '63d431ab3813ca3d0789d2cc',
        accountId: 10016,
        clientId: '63c5ea0c840e3207033931b5',
        clientPortalUserId: -66,
        firstName: 'Jeffrey',
        lastName: 'Marna',
        role: null,
        phone: null,
        email: 'geoff.mina@withmoxie.com',
        mobile: null,
        notes: null,
        defaultContact: true,
        invoiceContact: false,
        portalAccess: true,
        importRecordId: null,
        sampleData: null,
      },
    ],
  },
  PROJECT_TASK_EVENT_SAMPLE_DATA: {
    id: '64b3eba1249a076683fe3560',
    clientId: '6490580de30ecf51c2c22ffa',
    projectId: '649c83111c9cbe6ba1d4cabe',
    project: {
      id: '649c83111c9cbe6ba1d4cabe',
      accountId: 10016,
      sampleData: false,
      clientId: '6490580de30ecf51c2c22ffa',
      name: 'Hourly Project',
      description: null,
      active: true,
      startDate: null,
      dueDate: null,
      dateCreated: '2023-06-28T18:59:29.587Z',
      client: null,
      leadGenArchived: false,
      feeSchedule: {
        feeType: 'Hourly',
        amount: 150,
        retainerSchedule: null,
        estimateMax: null,
        estimateMin: null,
        retainerStart: null,
        retainerTiming: 'Advanced',
        retainerOverageRate: null,
        taxable: false,
        fromProposalId: null,
        fromProposalSignedDate: null,
        updatedDate: null,
        updatedBy: null,
      },
      proposalId: null,
      proposalName: null,
      hexColor: '#ffffff00',
      portalAccess: 'Overview',
      showTimeWorkedInPortal: true,
      files: [],
      deliverables: [],
    },
    client: {
      accountId: 10016,
      sampleData: false,
      id: '6490580de30ecf51c2c22ffa',
      clientType: 'Client',
      name: 'Moxie',
      initials: null,
      locality: 'NY',
      country: 'US',
      color: '#8EA3B8',
      projects: [],
      hourlyAmount: 150,
      archive: false,
      currency: 'USD',
      logo: null,
      leadSource: null,
      contact: {
        id: '6490580de30ecf51c2c22ffb',
        accountId: 10016,
        clientId: '6490580de30ecf51c2c22ffa',
        clientPortalUserId: -79,
        firstName: 'Geoffrey',
        lastName: 'Mina',
        role: null,
        phone: '+15555551212',
        email: 'geoff.mina@withmoxie.com',
        mobile: null,
        notes: null,
        defaultContact: true,
        invoiceContact: false,
        portalAccess: true,
        importRecordId: null,
        sampleData: null,
      },
    },
    name: 'Another new task to build website and victory',
    statusId: '05b26dd1-0668-4dcc-b438-87ac93d4eb15',
    status: 'In Progress',
    priority: 2,
    description: 'This is the description of the task',
    assignedTo: null,
    assignedToList: [16, 222],
    approvalRequired: false,
    product: null,
    quantity: 0,
    invoiceId: null,
    invoiceNumber: null,
    customValues: [
      {
        fieldId: '4591275b-1c76-4eae-9257-0438fe1d2354',
        fieldName: 'Text Input',
        value: 'Text input',
      },
      {
        fieldId: 'a7e49f95-e0f4-416e-9bbf-586d98e1a55e',
        fieldName: 'Numeric Input',
        value: 123,
      },
      {
        fieldId: '0a95ed1a-f084-4e13-be02-6065bea93aed',
        fieldName: 'Currency Input',
        value: 2000,
      },
      {
        fieldId: '399ac82b-e56e-4499-b4be-db7d3f81f0fc',
        fieldName: 'Radio Input',
        value: 'Two',
      },
      {
        fieldId: '006ec49b-68e1-4ebd-9bdc-d18776551616',
        fieldName: 'Checkbox Input',
        value: 'Three',
      },
      {
        fieldId: 'd255032b-4f82-4f1b-8b61-4bccc66370c4',
        fieldName: 'Phase',
        value: 'Phase 1',
      },
      {
        fieldId: '4a281477-bed5-4f56-9e89-0bcb3758b3f8',
        fieldName: 'Shoot Date',
        value: '2023-07-07',
      },
      {
        fieldId: '3fb9c4f2-8093-4315-b2cd-748a3526b497',
        fieldName: 'Recurs',
        value: 'Yes',
      },
    ],
    comments: [
      {
        id: '81eec0c6-4b6b-46f5-a412-cdc66c8571c8',
        author: 'Geoffrey Mina',
        authorId: '16',
        comment: 'Comments in the task show up here.',
        clientComment: false,
        edited: false,
        privateComment: false,
        sendEmail: false,
        timestamp: '2023-07-20T10:51:32.086Z',
      },
    ],
    startDate: '2023-07-01',
    dueDate: '2023-07-31',
    tasks: [
      {
        id: 'e105201a27f34a26a37ef54e6b0f522b',
        description: 'One',
        complete: true,
      },
      {
        id: '6c436ea963844783b569639f4c26768e',
        description: 'Two',
        complete: true,
      },
      {
        id: 'bf62b9745301466397d09ab9aaa4bd69',
        description: 'Three',
        complete: false,
      },
      {
        id: 'dd932850c2094d879c7128cecc468d83',
        description: 'Four',
        complete: false,
      },
    ],
    archived: false,
    kanbanSort: 2,
  },
  FORM_EVENT_SAMPLE_DATA: {
    id: '64b8233d6ce6226305f24b47',
    accountId: 10016,
    client: null,
    formName: 'test-new-client',
    businessName: 'Moxie',
    firstName: 'Geoffrey',
    lastName: 'Mina',
    phone: '+444445551212',
    email: 'hello@withmoxie.com',
    role: null,
    address1: null,
    address2: null,
    city: null,
    locality: null,
    postal: null,
    country: null,
    website: null,
    leadSource: null,
    sourceUrl:
      'https://hello.withmoxie.dev/00/hectic-lab/test-new-client?inPortal=true',
    Field6: 'Answer to your first question',
    Field7: 'Another to your other question',
    submittedAt: '2023-07-19T17:54:05.257Z',
  },
  TIME_ENTRY_EVENT_SAMPLE_DATA: {
    id: '64b857b0b17c7c727001331c',
    accountId: 10016,
    sampleData: false,
    userId: 16,
    timerStart: '2023-07-19T21:37:35.684Z',
    timerEnd: '2023-07-19T21:37:52.431Z',
    userFullName: 'Geoffrey Mina',
    notes: 'These are some notes',
    clientId: '6490580de30ecf51c2c22ffa',
    projectId: '649976d658c17d4f29b068ee',
    deliverableId: '649976e158c17d4f29b068ef',
    clientName: 'Moxie',
    projectName: 'Fun project for client',
    deliverableName: 'Task 1',
    timestamp: null,
    timestampUpdated: null,
    invoiceId: null,
    invoiceNumber: null,
    importRecordId: null,
    feeSchedule: null,
    duration: 16,
  },
  MEETING_EVENT_SAMPLE_DATA: {
    id: '64b824df6ce6226305f24b53',
    accountId: 10016,
    ownerUserId: null,
    sampleData: false,
    meetingId: '63076a1320e0d10001e6cb63',
    clientId: '63c5ea0c840e3207033931b5',
    meetingStatus: 'Scheduled',
    meetingName: 'Geoff Mina / 30 minute meeting',
    schedulerName: '30 minute meeting',
    confirmedTime: {
      start: '2023-07-19T22:30:00.000Z',
      end: '2023-07-19T23:00:00.000Z',
    },
    scheduledTimezone: 'America/New_York',
    scheduledLocale: 'en-US',
    formData: {
      firstName: 'Geoff',
      lastName: 'Mina',
      email: 'geoff.mina@withmoxie.com',
      phone: '+445555555555',
      role: null,
      businessName: null,
      website: null,
      address1: null,
      address2: null,
      city: null,
      locality: null,
      postal: null,
      country: null,
      sourceUrl: null,
      opportunityId: null,
      templateId: null,
      cardTokenId: null,
      leadSource: null,
      answers: [],
    },
    location: {
      type: 'Google',
    },
    zoomMeeting: null,
    googleMeeting: {
      googleUserId: 16,
      eventId: '_6oq64e1i6hi6cdj3ckr34chm6co3aphi6hh3acq0d1im6t39cdgn0s1ecdnmq',
      hangoutLink: 'https://meet.google.com/swq-azkw-zkt',
      htmlLink:
        'https://www.google.com/calendar/event?eid=XzZvcTY0ZTFpNmhpNmNkajNja3IzNGNobTZjbzNhcGhpNmhoM2FjcTBkMWltNnQzOWNkZ24wczFlY2RubXEgZ2VvZmYubWluYUBoZWN0aWMudXM',
      googleUser: {
        name: 'Geoff Mina',
        given_name: 'Geoff',
        family_name: 'Mina',
        picture:
          'https://lh3.googleusercontent.com/a/AGNmyxYxJL9h8SnY6z2oXg7fNHAdov1TJ4--RQtiAMn8=s96-c',
        email: 'geoff.mina@hectic.us',
        email_verified: true,
        locale: 'en',
      },
      entryPoints: [
        {
          entryPointType: 'video',
          label: 'meet.google.com/swq-azkw-zkt',
          uri: 'https://meet.google.com/swq-azkw-zkt',
        },
        {
          entryPointType: 'more',
          pin: '4419810087411',
          uri: 'https://tel.meet/swq-azkw-zkt?pin=4419810087411',
        },
        {
          entryPointType: 'phone',
          label: '+1 646-504-7945',
          pin: '978184485',
          regionCode: 'US',
          uri: 'tel:+1-646-504-7945',
        },
      ],
    },
    microsoftEvent: null,
    connectedICalUid: null,
    notes: null,
    cancellationReason: null,
    leadGenArchived: false,
    opportunityId: null,
    files: [],
    meetingWith: 'Moxie',
    incomeRecordId: null,
    icalUid: '64b824df6ce6226305f24b53@hecticapp.com',
  },
};

export const moxieCRMTriggers = [
  {
    name: 'client_created',
    displayName: 'Client Created',
    description: 'Triggerd when a new client is created.',
    eventType: MoxieCRMEventType.CLIENT_CREATED,
    sampleData: MoxieCRMWebhookSampleData.CLIENT_EVENT_SAMPLE_DATA,
  },
  {
    name: 'client_updated',
    displayName: 'Client Updated',
    description: 'Triggerd when an existing client is updated.',
    eventType: MoxieCRMEventType.CLIENT_UPDATED,
    sampleData: MoxieCRMWebhookSampleData.CLIENT_EVENT_SAMPLE_DATA,
  },
  {
    name: 'client_deleted',
    displayName: 'Client Deleted',
    description: 'Triggerd when an existing client is deleted.',
    eventType: MoxieCRMEventType.CLIENT_DELETED,
    sampleData: MoxieCRMWebhookSampleData.CLIENT_EVENT_SAMPLE_DATA,
  },
  {
    name: 'project_created',
    displayName: 'Project Created',
    description: 'Triggerd when a new project is created.',
    eventType: MoxieCRMEventType.PROJECT_CREATED,
    sampleData: MoxieCRMWebhookSampleData.PROJECT_EVENT_SAMPLE_DATA,
  },
  {
    name: 'project_updated',
    displayName: 'Project Updated',
    description: 'Triggerd when an existing project is updated.',
    eventType: MoxieCRMEventType.PROJECT_UPDATED,
    sampleData: MoxieCRMWebhookSampleData.PROJECT_EVENT_SAMPLE_DATA,
  },
  {
    name: 'project_completed',
    displayName: 'Project Completed',
    description: 'Triggerd when an existing project is completed.',
    eventType: MoxieCRMEventType.PROJECT_COMPLETED,
    sampleData: MoxieCRMWebhookSampleData.PROJECT_EVENT_SAMPLE_DATA,
  },
  {
    name: 'task_created',
    displayName: 'Task Created',
    description: 'Triggerd when a new task is created.',
    eventType: MoxieCRMEventType.TASK_CREATED,
    sampleData: MoxieCRMWebhookSampleData.PROJECT_TASK_EVENT_SAMPLE_DATA,
  },
  {
    name: 'task_updated',
    displayName: 'Task Updated',
    description: 'Triggerd when an existing task is updated.',
    eventType: MoxieCRMEventType.TASK_UPDATED,
    sampleData: MoxieCRMWebhookSampleData.PROJECT_TASK_EVENT_SAMPLE_DATA,
  },
  {
    name: 'task_deleted',
    displayName: 'Task Deleted',
    description: 'Triggerd when an existing task is deleted.',
    eventType: MoxieCRMEventType.TASK_DELETED,
    sampleData: MoxieCRMWebhookSampleData.PROJECT_TASK_EVENT_SAMPLE_DATA,
  },
  {
    name: 'task_approval',
    displayName: 'Task Approval',
    description: 'Triggerd when a task is moved to.',
    eventType: MoxieCRMEventType.TASK_APPROVAL,
    sampleData: MoxieCRMWebhookSampleData.PROJECT_TASK_EVENT_SAMPLE_DATA,
  },
  {
    name: 'form_submitted',
    displayName: 'Form Submitted',
    description: 'Triggerd when a new form is submitted.',
    eventType: MoxieCRMEventType.FORM_SUBMITTED,
    sampleData: MoxieCRMWebhookSampleData.FORM_EVENT_SAMPLE_DATA,
  },
  {
    name: 'time_entry_created',
    displayName: 'Time Entry Created',
    description: 'Triggerd when a new time entry is created.',
    eventType: MoxieCRMEventType.TIME_ENTRY_CREATED,
    sampleData: MoxieCRMWebhookSampleData.TIME_ENTRY_EVENT_SAMPLE_DATA,
  },
  {
    name: 'time_entry_updated',
    displayName: 'Time Entry Updated',
    description: 'Triggerd when an existing time entry is updated.',
    eventType: MoxieCRMEventType.TIME_ENTRY_UPDATED,
    sampleData: MoxieCRMWebhookSampleData.TIME_ENTRY_EVENT_SAMPLE_DATA,
  },
  {
    name: 'time_entry_deleted',
    displayName: 'Time Entry Deleted',
    description: 'Triggerd when an existing time entry is deleted.',
    eventType: MoxieCRMEventType.TIME_ENTRY_DELETED,
    sampleData: MoxieCRMWebhookSampleData.TIME_ENTRY_EVENT_SAMPLE_DATA,
  },
  {
    name: 'meeting_scheduled',
    displayName: 'Meeting Scheduled',
    description: 'Triggerd when a new meeting is scheduled.',
    eventType: MoxieCRMEventType.MEETING_SCHEDULED,
    sampleData: MoxieCRMWebhookSampleData.MEETING_EVENT_SAMPLE_DATA,
  },
  {
    name: 'meeting_updated',
    displayName: 'Meeting Updated',
    description: 'Triggerd when an existing meeting is updated.',
    eventType: MoxieCRMEventType.MEETING_UPDATED,
    sampleData: MoxieCRMWebhookSampleData.MEETING_EVENT_SAMPLE_DATA,
  },
  {
    name: 'meeting_cancelled',
    displayName: 'Meeting Cancelled',
    description: 'Triggerd when a meeting is cancelled.',
    eventType: MoxieCRMEventType.MEETING_CANCELLED,
    sampleData: MoxieCRMWebhookSampleData.MEETING_EVENT_SAMPLE_DATA,
  },
].map((props) => moxieCRMRegisterTrigger(props));
