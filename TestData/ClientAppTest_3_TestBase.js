const base_name = require("@playwright/test"); //base_name is just a random variable name that I gave.

exports.customTest = base_name.test.extend({
  //we are exporting as 'customTest'. Thus, it must be imported as {customTest}.
  testDataForOrder: {
    username: "hemraj.shahi90@gmail.com",
    password: "Testing123",
    productName: "zara coat 3",
  },
});
