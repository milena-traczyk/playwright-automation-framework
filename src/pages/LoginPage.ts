import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    private readonly usernameInput = '[name="username"]';
    private readonly passwordInput = '[name="password"]';
    private readonly loginButton = '[type="submit"]';
    private readonly logoLocator = '.orangehrm-login-slot-wrapper';

    private readonly url = '/';

    constructor(page: Page) {
        super(page);
    }

    async navigateTo(): Promise<void> {
        await this.goto(this.url);
    }

    async login(username: string, password: string): Promise<void> {
        await this.fill(this.usernameInput, username);
        await this.fill(this.passwordInput, password);
        await this.click(this.loginButton);
    }

    async isLogoVisible(): Promise<boolean> {
        return await this.page.locator(this.logoLocator).isVisible();
    }
}
