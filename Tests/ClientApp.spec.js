const { test, expect } = require("@playwright/test");
const { POManager } = require("../Pages/POManager");

test("Client App Login", async ({ page }) => {
  //await page.pause();
  const username = "hemraj.shahi90@gmail.com";
  const password = "Testing123";
  const poManager = new POManager(page);
  const loginPage = poManager.getLoginPage();
  await loginPage.goTo();
  await loginPage.validLogin(username, password);
  await page.waitForLoadState("networkidle");

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Shop/); //regular expression
  //console.log(await page.title());

  /**start of Dashboard page */
  const dashboard_page = poManager.getDashboardPage();
  const product_name = "zara coat 3";
  await dashboard_page.searchProductAddToCart(product_name);
  await dashboard_page.navigateToCart();
  /**start of cart page */
  console.log(await page.title());
  const cart_page = poManager.getCartPage();
  cart_page.VerifyProductIsDisplayed(product_name);
  await cart_page.clickOnCheckOutBtn();
  /**start of Place Order page */
  const placeOrder_page = poManager.getPlaceOrderPage();
  await placeOrder_page.clickOnPlaceOrderBtn();
});
