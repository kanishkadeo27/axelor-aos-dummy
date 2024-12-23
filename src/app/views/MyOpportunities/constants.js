// index.js request body

const newDataReqBody = {
  offset: 0,
  sortBy: ["orderByState"],
  fields: [
    "partner.name",
    "amount",
    "opportunityRating",
    "probability",
    "currency.symbol",
    "description",
    "opportunityStatus",
    "expectedCloseDate",
    "partner.mobilePhone",
    "partner.fixedPhone",
    "opportunitySeq",
    "name",
    "orderByState",
    "user",
  ],
  limit: 100,
  data: {
    _domain: "self.user.id = :_internalUserId",
    _domainContext: {
      _model: "com.axelor.apps.crm.db.Opportunity",
      _internalUserId: 1,
      _id: null,
      todayDate: "2024-03-06",
      _myActiveTeam: {
        code: "GRL",
        name: "General",
        id: 4,
      },
    },
    criteria: [
      {
        fieldName: "opportunityStatus",
        operator: "=",
        value: {
          id: "1",
        },
      },
    ],
    operator: "and",
  },
};
const qualificationDataReqBody = {
  offset: 0,
  sortBy: ["orderByState"],
  fields: [
    "partner.name",
    "amount",
    "opportunityRating",
    "probability",
    "currency.symbol",
    "description",
    "opportunityStatus",
    "expectedCloseDate",
    "partner.mobilePhone",
    "partner.fixedPhone",
    "opportunitySeq",
    "name",
    "orderByState",
    "user",
  ],
  limit: 10,
  data: {
    _domain: "self.user.id = :_internalUserId",
    _domainContext: {
      _model: "com.axelor.apps.crm.db.Opportunity",
      _internalUserId: 1,
      _id: null,
      todayDate: "2024-03-06",
      _myActiveTeam: {
        code: "GRL",
        name: "General",
        id: 4,
      },
    },
    criteria: [
      {
        fieldName: "opportunityStatus",
        operator: "=",
        value: {
          id: "2",
        },
      },
    ],
    operator: "and",
  },
};
const propositionDataReqBody = {
  offset: 0,
  sortBy: ["orderByState"],
  fields: [
    "partner.name",
    "amount",
    "opportunityRating",
    "probability",
    "currency.symbol",
    "description",
    "opportunityStatus",
    "expectedCloseDate",
    "partner.mobilePhone",
    "partner.fixedPhone",
    "opportunitySeq",
    "name",
    "orderByState",
    "user",
  ],
  limit: 10,
  data: {
    _domain: "self.user.id = :_internalUserId",
    _domainContext: {
      _model: "com.axelor.apps.crm.db.Opportunity",
      _internalUserId: 1,
      _id: null,
      todayDate: "2024-03-06",
      _myActiveTeam: { code: "GRL", name: "General", id: 4 },
    },
    criteria: [
      { fieldName: "opportunityStatus", operator: "=", value: { id: "3" } },
    ],
    operator: "and",
  },
};
const negotiationDataReqBody = {
  offset: 0,
  sortBy: ["orderByState"],
  fields: [
    "partner.name",
    "amount",
    "opportunityRating",
    "probability",
    "currency.symbol",
    "description",
    "opportunityStatus",
    "expectedCloseDate",
    "partner.mobilePhone",
    "partner.fixedPhone",
    "opportunitySeq",
    "name",
    "orderByState",
    "user",
  ],
  limit: 10,
  data: {
    _domain: "self.user.id = :_internalUserId",
    _domainContext: {
      _model: "com.axelor.apps.crm.db.Opportunity",
      _internalUserId: 1,
      _id: null,
      todayDate: "2024-03-06",
      _myActiveTeam: { code: "GRL", name: "General", id: 4 },
    },
    criteria: [
      { fieldName: "opportunityStatus", operator: "=", value: { id: "4" } },
    ],
    operator: "and",
  },
};
const ClosedWonDataReqBody = {
  offset: 0,
  sortBy: ["orderByState"],
  fields: [
    "partner.name",
    "amount",
    "opportunityRating",
    "probability",
    "currency.symbol",
    "description",
    "opportunityStatus",
    "expectedCloseDate",
    "partner.mobilePhone",
    "partner.fixedPhone",
    "opportunitySeq",
    "name",
    "orderByState",
    "user",
  ],
  limit: 10,
  data: {
    _domain: "self.user.id = :_internalUserId",
    _domainContext: {
      _model: "com.axelor.apps.crm.db.Opportunity",
      _internalUserId: 1,
      _id: null,
      todayDate: "2024-03-06",
      _myActiveTeam: { code: "GRL", name: "General", id: 4 },
    },
    criteria: [
      { fieldName: "opportunityStatus", operator: "=", value: { id: "5" } },
    ],
    operator: "and",
  },
};
const closedLostDataReqBody = {
  offset: 0,
  sortBy: ["orderByState"],
  fields: [
    "partner.name",
    "amount",
    "opportunityRating",
    "probability",
    "currency.symbol",
    "description",
    "opportunityStatus",
    "expectedCloseDate",
    "partner.mobilePhone",
    "partner.fixedPhone",
    "opportunitySeq",
    "name",
    "orderByState",
    "user",
  ],
  limit: 10,
  data: {
    _domain: "self.user.id = :_internalUserId",
    _domainContext: {
      _model: "com.axelor.apps.crm.db.Opportunity",
      _internalUserId: 1,
      _id: null,
      todayDate: "2024-03-06",
      _myActiveTeam: { code: "GRL", name: "General", id: 4 },
    },
    criteria: [
      { fieldName: "opportunityStatus", operator: "=", value: { id: "6" } },
    ],
    operator: "and",
  },
};

//create form request body
const initialDataReqBody = {
  action:
    "action-opportunity-group-new,com.axelor.meta.web.MetaController:moreAttrs",
  model: "com.axelor.apps.crm.db.Opportunity",
  data: {
    context: {
      _internalUserId: 1,
      _id: null,
      todayDate: "2024-03-07",
      _myActiveTeam: { code: "GRL", name: "General", id: 4 },
      _viewType: "form",
      _viewName: "opportunity-form",
      _views: [
        { name: "opportunity-kanban", type: "kanban" },
        { name: "opportunity-grid", type: "grid" },
        { name: "opportunity-form", type: "form" },
      ],
      attrs: "{}",
      recurrentAmount: "0",
      amount: "0",
      opportunityRating: 0,
      probability: "0",
      worstCase: "0",
      expectedDurationOfRecurringRevenue: 0,
      bestCase: "0",
      _model: "com.axelor.apps.crm.db.Opportunity",
    },
  },
};

//edit request body
const editDataReqBody = {
  fields: [
    "lostReason",
    "description",
    "memo",
    "source",
    "customerDescription",
    "opportunityStatus",
    "expectedCloseDate",
    "recurrentAmount",
    "bankDetails",
    "lostReasonStr",
    "nextScheduledEventDateT",
    "contact",
    "currency",
    "company",
    "tradingName",
    "amount",
    "opportunityRating",
    "recurringStartDate",
    "probability",
    "recurringEndDate",
    "team",
    "attrs",
    "opportunityType",
    "worstCase",
    "partner",
    "expectedDurationOfRecurringRevenue",
    "opportunitySeq",
    "name",
    "bestCase",
    "saleOrderList",
    "user",
    "lastEventDateT",
  ],
  related: {},
};

const contactReqBody = {
  translate: true,
  fields: ["id", "fullName"],
  limit: 10,
  data: {
    _domain: "self.isContact = true AND :company member of self.companySet",
    _domainContext: {
      _internalUserId: 1,
      _id: null,
      todayDate: "2024-03-08",
      _myActiveTeam: { code: "GRL", name: "General", id: 4 },
      _viewType: "grid",
      _viewName: "partner-contact-grid",
      _views: [
        { type: "grid", name: "partner-contact-grid" },
        { type: "form", name: "partner-contact-form" },
      ],
      _source: "contact",
      attrs: "{}",
      recurrentAmount: "0",
      amount: "0",
      opportunityRating: 0,
      probability: "0",
      worstCase: "0",
      expectedDurationOfRecurringRevenue: 0,
      bestCase: "0",
      company: { code: "AXE", name: "Axelor", id: 1 },
      team: { code: "GRL", name: "General", id: 4 },
      user: { code: "admin", fullName: "Admin", id: 1 },
      opportunityStatus: { name: "New", id: 1 },
      currency: { code: "EUR", name: "Euro", id: 46 },
      partner: null,
      _model: "com.axelor.apps.crm.db.Opportunity",
    },
  },
};
const customerReqBody = {
  translate: true,
  fields: ["id", "fullName"],
  limit: 10,
  data: {
    _domain: "self.isContact = false AND :company member of self.companySet",
    _domainContext: {
      _internalUserId: 1,
      _id: null,
      todayDate: "2024-03-08",
      _myActiveTeam: { code: "GRL", name: "General", id: 4 },
      _viewType: "grid",
      _viewName: "partner-grid",
      _views: [
        { type: "grid", name: "partner-grid" },
        { type: "form", name: "partner-form" },
      ],
      _source: "partner",
      attrs: "{}",
      recurrentAmount: "0",
      amount: "0",
      opportunityRating: 0,
      probability: "0",
      worstCase: "0",
      expectedDurationOfRecurringRevenue: 0,
      bestCase: "0",
      company: { code: "AXE", name: "Axelor", id: 1 },
      team: { code: "GRL", name: "General", id: 4 },
      user: { code: "admin", fullName: "Admin", id: 1 },
      opportunityStatus: { name: "New", id: 1 },
      currency: { code: "EUR", name: "Euro", id: 46 },
      partner: null,
      _model: "com.axelor.apps.crm.db.Opportunity",
    },
  },
};

const dropdownReqBody = {
  translate: true,
  fields: ["id", "name", "code"],
  limit: 10,
  data: { _domainContext: {} },
};
const userReqBody = {
  translate: true,
  fields: ["id", "fullName", "partner", "name", "code"],
  limit: 10,
  data: { _domainContext: {} },
};

// view request body
const viewDataReqBody = {
  fields: [
    "lostReason",
    "description",
    "memo",
    "source",
    "customerDescription",
    "opportunityStatus",
    "expectedCloseDate",
    "recurrentAmount",
    "bankDetails",
    "lostReasonStr",
    "nextScheduledEventDateT",
    "contact",
    "currency",
    "company",
    "tradingName",
    "amount",
    "opportunityRating",
    "recurringStartDate",
    "probability",
    "recurringEndDate",
    "team",
    "attrs",
    "opportunityType",
    "worstCase",
    "partner",
    "expectedDurationOfRecurringRevenue",
    "opportunitySeq",
    "name",
    "bestCase",
    "saleOrderList",
    "user",
    "lastEventDateT",
  ],
  related: {},
};

//grid view request body
const gridViewReqBody = {
  offset: 0,
  sortBy: ["opportunityStatus.sequence", "expectedCloseDate"],
  fields: [
    "opportunitySeq",
    "name",
    "createdOn",
    "company",
    "partner",
    "opportunityStatus",
    "amount",
    "probability",
    "expectedCloseDate",
    "user",
  ],
  limit: 100,
  data: {
    _domain: "self.user.id = :_internalUserId",
    _domainContext: {
      _model: "com.axelor.apps.crm.db.Opportunity",
      _internalUserId: 1,
      _id: null,
      todayDate: "2024-03-06",
      _myActiveTeam: { code: "GRL", name: "General", id: 4 },
    },
    _domains: [],
    operator: "and",
    criteria: [],
  },
};

export {
  viewDataReqBody,
  gridViewReqBody,
  newDataReqBody,
  qualificationDataReqBody,
  propositionDataReqBody,
  negotiationDataReqBody,
  ClosedWonDataReqBody,
  closedLostDataReqBody,
  editDataReqBody,
  contactReqBody,
  customerReqBody,
  dropdownReqBody,
  userReqBody,
  initialDataReqBody
};
