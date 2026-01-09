import { test, expect } from '@playwright/test';

test('should load OrangeHRM homepage', async({ page }) => {
    // Step 1: Navigate to homepage
    await page.goto('/')

    // Step 2: Verify page title contains "OrangeHRM"
    await expect(page).toHaveTitle(/OrangeHRM/)

    // Step 3: Verify logo is visible
    await expect(page.locator('.orangehrm-login-branding')).toBeVisible()
});