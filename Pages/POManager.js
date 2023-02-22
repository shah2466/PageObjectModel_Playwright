/**
 * This file is used to create an object of all pages. This way we can just create an object of this page and use it in our test scripts.
 * We will not have to create an instance of every class on the test file when the test file may have to create instances of many many classes.
 */
const { LoginPage } = require("./LoginPage");
const { DashboardPage } = require("./DashboardPage");
const { CartPage } = require("./CartPage");
const { PlaceOrderPage } = require("./PlaceOrderPage");

class POManager {
  constructor(page) {
    this.page = page;
    this.LoginPage = new LoginPage(this.page);
    this.DashboardPage = new DashboardPage(this.page);
    this.CartPage = new CartPage(this.page);
    this.PlaceOrderPage = new PlaceOrderPage(this.page);
  }

  getLoginPage() {
    return this.LoginPage;
  }

  getDashboardPage() {
    return this.DashboardPage;
  }
  getCartPage() {
    return this.CartPage;
  }
  getPlaceOrderPage() {
    return this.PlaceOrderPage;
  }
}

module.exports = { POManager };
