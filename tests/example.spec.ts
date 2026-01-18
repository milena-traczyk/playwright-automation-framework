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

test('should show error message with invalid credentials', async ({ page }) => {
    // Arrange - Create LoginPage instance
    const loginPage = new LoginPage(page);

    // Act - Navigate and try to login with wrong credentials
    await loginPage.navigateTo();
    await loginPage.login('wronguser', 'wrongpass');

    // Assert - Verify error message is visible
    await expect(loginPage.getErrorMessageLocator()).toBeVisible();
    await expect(loginPage.getErrorMessageLocator()).toHaveText('Invalid credentials');
});

test('should show error when login with empty credentials', async ({ page }) => {
    // Arrange - create LoginPage instance
    const loginPage = new LoginPage(page);

    // Act - Navigate and click login without filling fields
    await loginPage.navigateTo();
    await loginPage.clickLoginButton();

    // Assert - Verify error message appears (OrangeHRM shows "Required" for empty fields)
    await expect(loginPage.getFieldErrorMessageLocator()).toHaveCount(2);
});
