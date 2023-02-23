/**
 * This test is reading the login info (test data) from a JSON file called 'ClientAppTest_2_TestData.json' from inside the 'TestData' folder.
 * This test implements parameterization of test data by storing test data json objects in an array. The test is run for each set of test data using
 * a for loop. The test function will be inside the for loop.
 * The name of the test will differ each time a new test data set is used. For that '${}' is used to evaluate a new test name based on each test data
 */

const { test, expect } = require("@playwright/test");
const { POManager } = require("../Pages/POManager");
const dataSet = JSON.parse(
  JSON.stringify(require("../TestData/ClientAppTest_2_TestData.json"))
);

for (const data of dataSet) {
  test(`Client App Login for ${data.productName}`, async ({ page }) => {
    //await page.pause();
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(data.username, data.password);
    await page.waitForLoadState("networkidle");

    /**start of Dashboard page */
    const dashboard_page = poManager.getDashboardPage();
    await dashboard_page.searchProductAddToCart(data.productName);
    await dashboard_page.navigateToCart();
    /**start of cart page */
    console.log(await page.title());
    const cart_page = poManager.getCartPage();
    cart_page.VerifyProductIsDisplayed(data.productName);
    await cart_page.clickOnCheckOutBtn();
    /**start of Place Order page */
    const placeOrder_page = poManager.getPlaceOrderPage();
    await placeOrder_page.clickOnPlaceOrderBtn();
  });
}
