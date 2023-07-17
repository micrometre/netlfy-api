var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// data/db.json
var require_db = __commonJS({
  "data/db.json"(exports2, module2) {
    module2.exports = {
      customerList: [{
        id: 1,
        name: "John Smith",
        email: "jsmith@test.com",
        phone: "0208092029"
      }, {
        id: 2,
        name: "Jeff Bridges",
        email: "abcd@test.com",
        phone: "0161 225 7632"
      }, {
        id: 3,
        name: "Steve Jones",
        email: "steven.jones@test.com",
        phone: "01403 215100"
      }],
      customers: [
        {
          id: 1,
          name: "John Smith",
          email: "jsmith@test.com",
          phone: "0208092029",
          city: "London",
          state: "Greater London",
          country: "England",
          organization: "Company 1",
          jobProfile: "Software Developer",
          additionalInfo: "Has Bought a lot of products before and a high Value Customer"
        },
        {
          id: 2,
          name: "Jeff Bridges",
          email: "abcd@test.com",
          phone: "0161 225 7632",
          city: "Manchester",
          state: "Greater Manchester",
          country: "England",
          organization: "Company 2",
          jobProfile: "Software Developer",
          additionalInfo: "Buys Products Rarely"
        },
        {
          id: 3,
          name: "Steve Jones",
          email: "steven.jones@test.com",
          phone: "01403 215100",
          city: "Horsham",
          state: "West Sussex",
          country: "England",
          organization: "Company 3",
          jobProfile: "Software Developer",
          additionalInfo: "Buys Lots of Products in general"
        }
      ]
    };
  }
});

// netlify/functions/api-db.js
var data = require_db();
var headers = {
  "content-type": "application/json",
  "Access-Control-Allow-Origin": "*"
};
exports.handler = async () => {
  return {
    body: JSON.stringify(data),
    statusCode: 200,
    headers
  };
};
//# sourceMappingURL=api-db.js.map
