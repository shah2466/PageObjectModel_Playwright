class PlaceOrderPage {
  constructor(page) {
    this.page = page;
    this.PlaceOrderBtn = page.locator("//a[contains(.,'Place Order')]");
  }

  async clickOnPlaceOrderBtn() {
    await this.PlaceOrderBtn.click();
  }
}
module.exports = { PlaceOrderPage };
