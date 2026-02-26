class LoginPage {
    /**
   * @param {import('playwright').Page} page
   */
    constructor(page) {
        this.page = page;
        this.userName = page.locator('[data-test="username"]');
        this.password = page.locator('[data-test="password"]');
        this.error = page.locator('[data-test="error"]');
        this.loginButton = page.locator('[data-test="login-button"]');
    }

    async goTo() {
        this.page.goto('/');
    }
}

module.exports = {LoginPage};