const storehippo = require("storehippo-nodejs-sdk")({
  storename: "creative-space",
  access_key: "3e1e5bb57f3e95c80258faf1c8f9b5f9",
  version: "",
});

const request1 = {
  entity: "ms.products",
  command: "list",
  query: {
    limit: 1,
  },
};

// user don't have privilege to edit the product
const request2 = {
  entity: "ms.products",
  command: "edit",
  query: {
    limit: 1,
  },
};

storehippo.call(request1, function (err, response) {
  if (err) throw err;
  console.log(response);
});

storehippo.call(request2, function (err, response) {
  if (err) throw err;
  console.log(response);
});
