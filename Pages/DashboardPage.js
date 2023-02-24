class DashboardPage {
  constructor(page) {
    this.page = page;
    this.products = page.locator(".card-body"); //based on class. Gives all products on the dashboard page.
    this.productText = page.locator(".card-body b"); //gives all products name. ".className b" = b is for bold. It is an attribute. Selects element that is bold
    this.cart = page.locator("[routerlink*='cart']");
  }

  /**
   *Search and add the product to the cart.
   *note: If you have a list of identical elements, and the only way to distinguish between them is the order, you can choose a specific element from a list with locator.first(), locator.last() or locator.nth().
   *  locator.nth() returns locator to the n-th matching element. It's zero based, nth(0) selects the first element.
   */
  async searchProductAddToCart(productName) {
    //await this.page.waitForLoadState("networkidle"); //wait until all network calls are made for all products to be loaded on the page.
    const titles = await this.productText.allTextContents(); //allTextContents() does not have auto wait implemented for it by playwright. WE need custom wait like above step.
    console.log(titles);
    const count = await this.products.count();
    for (let i = 0; i < count; ++i) {
      if (
        (await this.products.nth(i).locator("b").textContent()) === productName
      ) {
        console.log(
          `Adding this item to the cart: ${await this.products
            .nth(i)
            .locator("b")
            .textContent()}`
        ); // just for debugging purpose
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
