const { expect } = require("@playwright/test");

class CartPage {
  constructor(page) {
    this.page = page;
    this.checkOutBtn = page.locator("//button[contains(text(),'Checkout')]");
    this.cartProducts = page.locator("div li").first();
    /*to capture the first element in the list. It could be any element from the list becuase we are making sure the items are visible before we use isVIsible() */
  }
  async clickOnCheckOutBtn() {
    await this.checkOutBtn.click();
  }

  /**Dynamically create a locator based on the productName that will be passed inside test function */

  async getProductLocator(productName) {
    return this.page.locator("h3:has-text('" + productName + "')");
  }

  /**is the product above visible based on the locator */
  async VerifyProductIsDisplayed(productName) {
    await this.cartProducts.waitFor(); //to make sure products are visible before we verify isVisible
    const bool = await (await this.getProductLocator(productName)).isVisible();
    expect(bool).toBeTruthy();
  }
}
module.exports = { CartPage };
