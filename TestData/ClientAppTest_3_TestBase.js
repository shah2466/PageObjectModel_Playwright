const base_name = require("@playwright/test");

exports.customTest = base_name.test.extend({
  testDataForOrder: {
    username: "hemraj.shahi90@gmail.com",
    password: "Testing123",
    productName: "zara coat 3",
  },
});
