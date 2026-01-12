import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { DashboardPage } from '../src/pages/DashboardPage';

test('should login to OrangeHRM successfully', async ({ page }) => {
    // Arrange - Create page instances
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    // Act - Navigate and login
    await loginPage.navigateTo();
    await loginPage.login('Admin', 'admin123');

    // Assert - Verify we're on dashboard (successful login)
    await expect(dashboardPage.getUserDropdownLocator()).toBeVisible();
});
