class DashboardPage {
  constructor(page) {
    this.page = page;
    this.products = page.locator(".card-body"); //based on class. Gives all products on the dashboard page.
    this.productText = page.locator(".card-body b"); //gives all products name. ".className b" = b is for bold. It is an attribute. Selects element that is bold
    this.cart = page.locator("[routerlink*='cart']");
  }

  /**
   *
   * Search and add the product to the cart
   */
  async searchProductAddToCart(productName) {
    const titles = await this.productText.allTextContents();
    console.log(titles);
    const count = await this.products.count();
    for (let i = 0; i < count; ++i) {
      if (
        (await this.products.nth(i).locator("b").textContent()) === productName
      ) {
        //add to the cart
        await this.products.nth(i).locator("text = Add To Cart").click(); //Locator is added here instead of keeping inside the constructor because we are 'Locator chaining'
        break;
      }
    }
  }

  /**
   * Click on Cart to go to Cart page
   */
  async navigateToCart() {
    await this.cart.click();
  }
}
module.exports = { DashboardPage };
