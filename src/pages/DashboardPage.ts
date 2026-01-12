import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
    private readonly welcomeText = '.oxd-topbar-header-breadcrumb h6';
    private readonly userDropdown = '.oxd-userdropdown-tab';
    private readonly logoutButton = "//a[text()='Logout']";

    private readonly url = '/web/index.php/dashboard/index';

    constructor(page: Page) {
        super(page);
    }

    async navigateTo(): Promise<void> {
        await this.goto(this.url);
    }

    async getWelcomeText(): Promise<string> {
        return await this.getText(this.welcomeText);
    }

    async logout(): Promise<void> {
        await this.click(this.userDropdown);
        await this.click(this.logoutButton);
    }

    public getUserDropdownLocator(): Locator {
        return this.page.locator(this.userDropdown);
    }
}
