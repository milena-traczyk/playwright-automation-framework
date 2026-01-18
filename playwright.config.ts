import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    // Where Playwright looks for test files
    testDir: './tests',

    // Maximum time one test can run (30 seconds)
    timeout: 30 * 1000,

    // How long to wait for assertions like expect().toBeVisible()
    expect: {
        timeout: 10000,
    },

    // Run tests in parallel (faster)
    fullyParallel: true,

    //Retry failed tests oc CI only
    retries: process.env.CI ? 2 : 0,

    // Number of parallel worksers
    // CI 1 worker (limited resources), Local: half of CPU cores (playwright decides)
    workers: process.env.CI ? 1 : undefined,

    // Reporter configuration - how test results are displayed
    reporter: [
        ['html'], // interactive HTML report
        ['list'], // Console output
    ],

    // Shared settings for all browsers/projects
    use: {
        // Base URL - use relative paths in tests
        baseURL: 'https://opensource-demo.orangehrmlive.com',

        // Collect trace on first retry (helps debug failures)
        trace: 'on-first-retry',

        // Screenshot only when test fails
        screenshot: 'only-on-failure',

        // Video only when test fails
        video: 'retain-on-failure',

        // Default browser window size
        viewport: { width: 1280, height: 720 },

        // Timeout for actions (click, fill, etc.)
        actionTimeout: 10 * 1000,
    },

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        },
    ],
});
