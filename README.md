# 🎭 Playwright Automation Framework - Portfolio Project

[![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=playwright&logoColor=white)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

> Professional test automation framework showcasing best practices, design patterns, and modern QA tools.

---

## 📋 Table of Contents

- [About](#-about)
- [Technologies](#-technologies)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Requirements](#-requirements)
- [Installation](#-installation)
- [Running Tests](#-running-tests)
- [Design Patterns](#-design-patterns)
- [Best Practices](#-best-practices)
- [Reporting](#-reporting)
- [CI/CD](#-cicd)
- [Roadmap](#-roadmap)
- [Author](#-author)

---

## 🎯 About

This project is a comprehensive example of a professional test automation framework, created as a **portfolio project** for QA Engineers. It demonstrates expertise in:

- ✅ Page Object Model (POM)
- ✅ Design Patterns (Factory, Builder, Singleton, Strategy)
- ✅ UI & API Testing
- ✅ Visual Regression Testing
- ✅ CI/CD with GitHub Actions
- ✅ Advanced Reporting (Allure)
- ✅ TypeScript & ES6+ features
- ✅ Test Data Management
- ✅ Parallel execution

**Application under test:** OrangeHRM Demo (https://opensource-demo.orangehrmlive.com/)

---

## 🛠 Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **Playwright** | ^1.50.0 | E2E testing framework |
| **TypeScript** | ^5.7.0 | Programming language |
| **Node.js** | 18+ | Runtime environment |
| **Allure Report** | Latest | Advanced reporting |
| **Faker.js** | Latest | Test data generation |
| **ESLint** | Latest | Linting and code quality |
| **Prettier** | Latest | Code formatting |

---

## ✨ Features

### 🧩 Architecture
- **Page Object Model** - separation of test logic from UI implementation
- **Component Objects** - reusable components (modals, forms)
- **Base Page** - common methods for all page objects
- **Custom Fixtures** - dependency injection for tests

### 🎨 Design Patterns
- **Factory Pattern** - dynamic creation of page objects
- **Builder Pattern** - building complex test objects
- **Singleton Pattern** - Configuration Manager, Logger
- **Strategy Pattern** - interchangeable strategies for different environments

### 🧪 Testing Features
- **UI Testing** - comprehensive end-to-end tests
- **API Testing** - built-in API testing with Playwright
- **Hybrid Tests** - combination of UI + API for optimal performance
- **Visual Testing** - screenshot comparison & visual regression
- **Accessibility Testing** - a11y checks (optional)

### 📊 Reporting & Observability
- **Allure Report** - rich reports with histories, categories, attachments
- **Screenshots** - automatic on failure
- **Videos** - test recordings (optional)
- **Trace files** - detailed traces for debugging

### 🚀 CI/CD
- **GitHub Actions** - automated test execution
- **Multi-browser testing** - Chromium, Firefox, WebKit
- **Parallel execution** - fast test suite execution
- **Artifact management** - reports available after each run

---

## 📁 Project Structure

```
playwright-automation-framework/
│
├── .github/
│   └── workflows/
│       └── playwright.yml          # CI/CD pipeline
│
├── src/
│   ├── pages/                      # Page Objects
│   │   ├── base/
│   │   │   └── BasePage.ts         # Base class for all pages
│   │   ├── auth/
│   │   │   └── LoginPage.ts
│   │   └── dashboard/
│   │       └── DashboardPage.ts
│   │
│   ├── components/                 # Reusable components
│   │   ├── Modal.ts
│   │   └── TopNavigation.ts
│   │
│   ├── api/                        # API helpers
│   │   ├── clients/
│   │   │   └── AuthApiClient.ts
│   │   └── builders/
│   │       └── RequestBuilder.ts
│   │
│   ├── fixtures/                   # Custom Playwright fixtures
│   │   └── pageFixtures.ts
│   │
│   ├── utils/                      # Utility functions
│   │   ├── helpers/
│   │   ├── config/
│   │   │   └── ConfigManager.ts    # Singleton for configuration
│   │   └── logger/
│   │       └── Logger.ts
│   │
│   └── data/                       # Test data
│       ├── users.json
│       ├── testData.json
│       └── builders/
│           └── UserBuilder.ts      # Builder pattern
│
├── tests/                          # Test files
│   ├── ui/
│   │   ├── auth/
│   │   │   └── login.spec.ts
│   │   └── dashboard/
│   │       └── dashboard.spec.ts
│   ├── api/
│   │   └── auth-api.spec.ts
│   └── visual/
│       └── visual-regression.spec.ts
│
├── test-results/                   # Test results (gitignored)
├── playwright-report/              # HTML report (gitignored)
├── allure-results/                 # Allure raw data (gitignored)
├── allure-report/                  # Allure HTML report (gitignored)
│
├── playwright.config.ts            # Playwright configuration
├── tsconfig.json                   # TypeScript configuration
├── .eslintrc.json                  # ESLint configuration
├── .prettierrc                     # Prettier configuration
├── package.json                    # Dependencies
│
├── README.md                       # This file!
├── roadmap.md                      # Learning and development plan
└── claude.md                       # Learning journal
```

---

## 📦 Requirements

- **Node.js** 18 or newer
- **npm** 9 or newer
- **Git** (for cloning the repo)

### Check your versions:
```bash
node --version   # should be >= 18
npm --version    # should be >= 9
```

---

## 🚀 Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/playwright-automation-framework.git
cd playwright-automation-framework
```

### 2. Install dependencies
```bash
npm install
```

### 3. Install Playwright browsers
```bash
npx playwright install
```

### 4. Verify installation
```bash
npx playwright --version
```

---

## 🎮 Running Tests

### Basic commands

```bash
# Run all tests
npm test

# Run tests in headed mode (visible browser)
npm run test:headed

# Run tests in debug mode
npm run test:debug

# Run specific test file
npx playwright test tests/ui/auth/login.spec.ts

# Run tests with specific tag
npx playwright test --grep @smoke

# Run tests on specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Reports

```bash
# Open HTML report (built-in Playwright)
npm run report

# Generate Allure report
npm run allure:generate

# Open Allure report
npm run allure:open

# Generate and open Allure (one command)
npm run allure:report
```

### CI/CD

```bash
# Run in CI mode
npm run test:ci

# Same as GitHub Actions does:
# - headless mode
# - all browsers
# - generates reports
# - uploads artifacts
```

---

## 🎨 Design Patterns

### 1. Page Object Model (POM)
```typescript
// Separation of test logic from UI implementation
class LoginPage extends BasePage {
  private usernameInput = () => this.page.getByTestId('username');
  private passwordInput = () => this.page.getByTestId('password');

  async login(username: string, password: string) {
    await this.usernameInput().fill(username);
    await this.passwordInput().fill(password);
    await this.clickSubmit();
  }
}
```

### 2. Factory Pattern
```typescript
// Dynamic creation of page objects
class PageFactory {
  static createPage<T>(PageClass: new (page: Page) => T, page: Page): T {
    return new PageClass(page);
  }
}
```

### 3. Builder Pattern
```typescript
// Building complex test objects
const user = new UserBuilder()
  .withUsername('admin')
  .withRole('Admin')
  .withPermissions(['read', 'write'])
  .build();
```

### 4. Singleton Pattern
```typescript
// Single instance across the application
class ConfigManager {
  private static instance: ConfigManager;

  static getInstance(): ConfigManager {
    if (!ConfigManager.instance) {
      ConfigManager.instance = new ConfigManager();
    }
    return ConfigManager.instance;
  }
}
```

---

## ✅ Best Practices

### Locator Hierarchy
```typescript
// ⭐⭐⭐ Best - data-testid
page.getByTestId('submit-button')

// ⭐⭐ Very good - role (accessibility)
page.getByRole('button', { name: 'Submit' })

// ⭐ Good - text
page.getByText('Submit')

// ❌ Last resort - CSS/XPath (brittle!)
page.locator('.btn-primary')
```

### Auto-waiting
```typescript
// ✅ Playwright waits automatically
await page.click('button');
await expect(page.locator('.message')).toBeVisible();

// ❌ Don't do this (unnecessary sleep)
await page.waitForTimeout(5000); // Bad!
```

### Test Independence
```typescript
// ✅ Each test is independent
test.beforeEach(async ({ page }) => {
  // Setup for EACH test
  await loginPage.login('admin', 'pass');
});

// ❌ Tests dependent on each other (Bad!)
test.describe.serial(() => { /* ... */ }); // Avoid!
```

---

## 📊 Reporting

### Allure Report Features
- 📈 **Test histories** - pass/fail trends
- 🏷️ **Categories** - test grouping
- 📎 **Attachments** - screenshots, videos, logs
- ⏱️ **Timeline** - execution visualization
- 📊 **Graphs** - statistics charts

### Screenshots & Videos
```typescript
// Automatic on failure (configured in playwright.config.ts)
screenshot: 'only-on-failure',
video: 'retain-on-failure',
trace: 'on-first-retry',
```

---

## 🔄 CI/CD

### GitHub Actions Workflow
- ✅ Trigger: push, pull_request, schedule (cron)
- ✅ Matrix strategy: multiple browsers
- ✅ Parallel execution
- ✅ Artifact upload: reports, videos, screenshots
- ✅ Allure report generation
- ✅ PR comment with results (optional)

### Run locally "like in CI"
```bash
npm run test:ci
```

---

## 🗺️ Roadmap

Detailed learning and development plan can be found in [roadmap.md](roadmap.md).

**Status:**
- ✅ Phase 1: Foundation - IN PROGRESS
- ⏳ Phase 2: Page Object Model
- ⏳ Phase 3: Design Patterns
- ⏳ Phase 4-10: ...

---

## 📚 Additional Resources

- [Learning Journal (claude.md)](claude.md) - notes from the learning process
- [Playwright Docs](https://playwright.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 👤 Author

**[Your Name]**
- 💼 LinkedIn: [link]
- 🐙 GitHub: [link]
- 📧 Email: [email]

---

## 📄 License

MIT License - free to use in portfolio and commercial projects.

---

## 🙏 Acknowledgments

- Playwright Team for an excellent framework
- OrangeHRM for the free demo application
- Community for best practices and inspiration

---

**⭐ If this project helped you, leave a star on GitHub! ⭐**

---

*Created with ❤️ as a learning project and portfolio piece*
