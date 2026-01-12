import { Page } from '@playwright/test';

export class BasePage {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async click(selector: string): Promise<void> {
        await this.page.locator(selector).click();
    }

    async fill(selector: string, text: string): Promise<void> {
        await this.page.locator(selector).fill(text);
    }

    async getText(selector: string): Promise<string> {
        return (await this.page.locator(selector).textContent()) || '';
    }
}
