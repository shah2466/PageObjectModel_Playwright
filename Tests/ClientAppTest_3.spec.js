/**
 * This test is reading the login info (test data) from a TEST FIXTURE.
 * Playwright provides some fixtures by default, eg: page, browser.
 * Each test script can have its own test fixture file. The custom test fixture is passed into
 * the test along with the 'page' fixture.
 */

const { test, expect } = require("@playwright/test");
const { POManager } = require("../Pages/POManager");
const { customTest } = require("../TestData/ClientAppTest_3_TestBase");

customTest.only(`Client App Login`, async ({ page, testDataForOrder }) => {
  //await page.pause();
  const poManager = new POManager(page);
  const loginPage = poManager.getLoginPage();
  await loginPage.goTo();
  await loginPage.validLogin(
    testDataForOrder.username,
    testDataForOrder.password
  );
  await page.waitForLoadState("networkidle");

  /**start of Dashboard page */
  const dashboard_page = poManager.getDashboardPage();
  await dashboard_page.searchProductAddToCart(testDataForOrder.productName);
  await dashboard_page.navigateToCart();
  /**start of cart page */
  console.log(await page.title());
  const cart_page = poManager.getCartPage();
  cart_page.VerifyProductIsDisplayed(testDataForOrder.productName);
  await cart_page.clickOnCheckOutBtn();
  /**start of Place Order page */
  const placeOrder_page = poManager.getPlaceOrderPage();
  await placeOrder_page.clickOnPlaceOrderBtn();
});
