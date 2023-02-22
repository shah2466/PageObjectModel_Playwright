class CartPage {
  constructor(page) {
    this.page = page;
    this.checkOutBtn = page.locator("//button[contains(text(),'Checkout')]");
  }
  async clickOnCheckOutBtn() {
    await this.checkOutBtn.click();
  }
}
module.exports = { CartPage };
