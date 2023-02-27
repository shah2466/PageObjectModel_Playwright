/**
 *this.signInButton is a class variable
 *constructor(page): 'page' value will come from the test file itself.
 */
class LoginPage {
  constructor(page) {
    this.page = page; //do this so we can use the 'this.page.goTo' in the 'goTo' function below.
    this.signInButton = page.locator("[name = 'login']"); //based on attribute
    this.username = page.locator("input#userEmail");
    this.password = page.locator("input#userPassword"); //based on ID
  }

  async goTo() {
    await this.page.goto("https://rahulshettyacademy.com/client");
  }

  async validLogin(username, password) {
    await this.username.type(username);
    await this.password.type(password);
    await this.signInButton.click();
  }
}
module.exports = { LoginPage }; //export the class
