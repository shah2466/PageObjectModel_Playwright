/**
 * This test is reading the login info (test data) from a JSON file called 'ClientAppTest_1_TestData.json' from inside the 'TestData' folder
 */

const { test, expect } = require("@playwright/test");
const { POManager } = require("../Pages/POManager");
const dataSet = JSON.parse(
  JSON.stringify(require("../TestData/ClientAppTest_1_TestData.json"))
);

/**
 * Above, dataSet does not have curly braces around it because it is not a named import. Meaning, the exporting file has not explicitly named the export
 */

test("Client App Login", async ({ page }) => {
  //await page.pause();
  const poManager = new POManager(page);
  const loginPage = poManager.getLoginPage();
  await loginPage.goTo();
  await loginPage.validLogin(dataSet.username, dataSet.password);
  await page.waitForLoadState("networkidle");

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Shop/); //regular expression
  //console.log(await page.title());

  /**start of Dashboard page */
  const dashboard_page = poManager.getDashboardPage();
  await dashboard_page.searchProductAddToCart(dataSet.productName);
  await dashboard_page.navigateToCart();
  /**start of cart page */
  console.log(await page.title());
  const cart_page = poManager.getCartPage();
  cart_page.VerifyProductIsDisplayed(dataSet.productName);
  await cart_page.clickOnCheckOutBtn();
  /**start of Place Order page */
  const placeOrder_page = poManager.getPlaceOrderPage();
  await placeOrder_page.clickOnPlaceOrderBtn();
});
