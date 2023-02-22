const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../Pages/LoginPage");

test("Client App Login", async ({ page }) => {
  const username = "hemraj.shahi90@gmail.com";
  const password = "Testing123";
  const loginPage = new LoginPage(page);
  loginPage.goTo();
  loginPage.validLogin(username, password);
  await page.waitForLoadState("networkidle");
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Shop/); //regular expression
  console.log(await page.title());
});
