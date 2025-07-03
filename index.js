const storehippo = require("storehippo-nodejs-sdk")({
  storename: "creative-space",
  access_key: "c3fba59ef4b2bc37417d434809b7eaad",
  version: "",
});

// newly created user ( role : IT ) access key : 3e1e5bb57f3e95c80258faf1c8f9b5f9
// ( role : super admin ) access keys : c3fba59ef4b2bc37417d434809b7eaad

// small change to check multiple accounts in git via ssh

// Authorization check
const request1 = {
  entity: "ms.products",
  command: "list",
  query: {
    limit: 1,
  },
};

// user with Role IT don't have privilege to edit the product
const request2 = {
  entity: "ms.products",
  command: "edit",
  query: {
    limit: 1,
  },
};

// Mutating the products
const addNewProduct = {
  entity: "ms.products",
  data: {
    _metadata: {
      i18n: {
        EN: {},
      },
    },
    publish: "1",
    seller: "6863aa0dede1b01c395e8173",
    approve: "approved",
    alias: "basic-sun-kissed",
    images: [
      {
        image:
          "s/686380d7717c6eb271c7fbe1/68661b3fcfefb316fef31328/c5997472-8c3a-4a38-8d64-4da1275c56d1.jpeg",
        _id: "68661b79cfefb316fef32738",
      },
    ],
    name: "Basic Sun kissed",
    price: 1000,
    sku: "SKU-U9WPPQNZFasdf",
    sort_order: 10,
    _resolvedData: {},
  },

  command: "add",
};

const editProduct = {
  entity: "ms.products",
  recordId: "68661c97a1dafeb0478eb1fe",
  data: { name: "Basics Sun Kissed edited" },
  command: "edit",
};

const deleteProduct = {
  entity: "ms.products",
  recordId: "68661c97a1dafeb0478eb1fe",
  command: "delete",
};

const getDeletedUsers = {
  entity: "ms.audit_logs",
  fields: {
    entity: 1,
    resolvedEntity: 1,
    resourceId: 1,
    subStore: 1,
    action: 1,
    type: 1,
    user: 1,
    ip: 1,
    primary__key: 1,
    primary__value: 1,
    created_on: 1,
    _metadata: 1,
  },
  filters: [
    {
      field: "entity",
      operator: "eq",
      value: "ms.users",
      field_data_type: "datetime",
      flabel: "Entity",
    },
    {
      field: "action",
      operator: "eq",
      value: "delete",
      label: "DELETE",
      flabel: "Action",
    },
  ],
  command: "list",
};

storehippo.call(getDeletedUsers, function (err, response) {
  if (err) throw err;
  console.log(response);
});
