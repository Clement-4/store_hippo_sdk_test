// const storehippo = require("storehippo-nodejs-sdk")({
//   storename: "mystore5",
//   access_key: "b522c336ef197faefbc7d4be6da5dcdf",
//   version: "",
// });

//INFO: for new entity that contains all the categories from taxjar
// const Taxjar = require("taxjar");

// const client = new Taxjar({
//   apiKey: "6efbfb214a416b322c24b84b9c9dd08e",
// });

// (async () => {
//   try {
//     const data = await client.categories();

//     const addNewTaxRecords = {
//       entity: "product_tax_codes",
//       data: {
//         tax_codes: data.categories,
//       },
//       command: "add",
//     };

//     storehippo.call(addNewTaxRecords, function (err, response) {
//       if (err) throw err;
//       console.log(response);
//     });
//   } catch (err) {
//     console.log("[Error Occurred]:", err);
//   }
// })();

// Authorization check
// const request1 = {
//   entity: "ms.products",
//   command: "list",
//   query: {
//     limit: 1,
//   },
// };

// storehippo.call(request1, function (err, response) {
//   if (err) throw err;
//   console.log(response);
// });

// user with Role IT don't have privilege to edit the product
// const request2 = {
//   entity: "ms.products",
//   command: "edit",
//   query: {
//     limit: 1,
//   },
// };

// storehippo.call(request2, function (err, response) {
//   if (err) throw err;
//   console.log(response);
// });

// Mutating the products
// const addNewProduct = {
//   entity: "ms.products",
//   data: {
//     _metadata: {
//       i18n: {
//         EN: {},
//       },
//     },
//     publish: "1",
//     seller: "6863aa0dede1b01c395e8173",
//     approve: "approved",
//     alias: "basic-sun-kissed",
//     images: [
//       {
//         image:
//           "s/686380d7717c6eb271c7fbe1/68661b3fcfefb316fef31328/c5997472-8c3a-4a38-8d64-4da1275c56d1.jpeg",
//         _id: "68661b79cfefb316fef32738",
//       },
//     ],
//     name: "Basic Sun kissed",
//     price: 1000,
//     sku: "SKU-U9WPPQNZFasdf",
//     sort_order: 10,
//     _resolvedData: {},
//   },

//   command: "add",
// };

// storehippo.call(addNewProduct, function (err, response) {
//   if (err) throw err;
//   console.log(response);
// });

// const editProduct = {
//   entity: "ms.products",
//   recordId: "68661c97a1dafeb0478eb1fe",
//   data: { name: "Basics Sun Kissed edited" },
//   command: "edit",
// };

// storehippo.call(editProduct, function (err, response) {
//   if (err) throw err;
//   console.log(response);
// });
// const deleteProduct = {
//   entity: "ms.products",
//   recordId: "68661c97a1dafeb0478eb1fe",
//   command: "delete",
// };

// storehippo.call(deleteProduct, function (err, response) {
//   if (err) throw err;
//   console.log(response);
// });

// const getDeletedUsers = {
//   entity: "ms.audit_logs",
//   fields: {
//     entity: 1,
//     resolvedEntity: 1,
//     resourceId: 1,
//     subStore: 1,
//     action: 1,
//     type: 1,
//     user: 1,
//     ip: 1,
//     primary__key: 1,
//     primary__value: 1,
//     created_on: 1,
//     _metadata: 1,
//   },
//   filters: [
//     {
//       field: "entity",
//       operator: "eq",
//       value: "ms.users",
//       field_data_type: "datetime",
//       flabel: "Entity",
//     },
//     {
//       field: "action",
//       operator: "eq",
//       value: "delete",
//       label: "DELETE",
//       flabel: "Action",
//     },
//   ],
//   command: "list",
// };

storehippo.call(getDeletedUsers, function (err, response) {
  if (err) throw err;
  console.log(response);
});

const storehippo = require("storehippo-nodejs-sdk")({
  storename: "creative-space",
  access_key: "7c86214f8413b27d7863b608e8bd3bea",
  version: "",
});

//INFO: fetching seller from specific zip code for the user with lms role
const request = {
  entity: "ms.sellers",
  fields: {
    title: 1,
    email: 1,
    phone: 1,
    city: 1,
    state: 1,
    country: 1,
    zip_code: 1,
  },
  query: {
    filters: [
      { field: "status", value: "approved", operator: "equal" },
      { field: "zip_code", value: "560008", operator: "equal" },
    ],
  },
  limit: 10,
  command: "list",
};

storehippo.call(request, function (err, response) {
  if (err) {
    console.log(err);
  }

  console.log(response);

  if (response && response.data) {
    console.log(response.data);
  }
});
