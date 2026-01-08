# 🎭 Playwright Automation Framework - Portfolio Project

[![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=playwright&logoColor=white)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

> Wzorowy projekt testów automatycznych wykorzystujący najlepsze praktyki, wzorce projektowe i nowoczesne narzędzia QA.

---

## 📋 Spis treści

- [O projekcie](#-o-projekcie)
- [Technologie](#-technologie)
- [Funkcjonalności](#-funkcjonalności)
- [Struktura projektu](#-struktura-projektu)
- [Wymagania](#-wymagania)
- [Instalacja](#-instalacja)
- [Uruchamianie testów](#-uruchamianie-testów)
- [Wzorce projektowe](#-wzorce-projektowe)
- [Best Practices](#-best-practices)
- [Reporting](#-reporting)
- [CI/CD](#-cicd)
- [Roadmap](#-roadmap)
- [Autor](#-autor)

---

## 🎯 O projekcie

Ten projekt jest kompleksowym przykładem profesjonalnego frameworka do automatyzacji testów, stworzonym jako **portfolio project** dla QA Engineers. Demonstruje znajomość:

- ✅ Page Object Model (POM)
- ✅ Design Patterns (Factory, Builder, Singleton, Strategy)
- ✅ UI & API Testing
- ✅ Visual Regression Testing
- ✅ CI/CD z GitHub Actions
- ✅ Advanced Reporting (Allure)
- ✅ TypeScript & ES6+ features
- ✅ Test Data Management
- ✅ Parallel execution

**Aplikacja testowa:** OrangeHRM Demo (https://opensource-demo.orangehrmlive.com/)

---

## 🛠 Technologie

| Technologia | Wersja | Zastosowanie |
|------------|--------|--------------|
| **Playwright** | ^1.50.0 | Framework do testowania E2E |
| **TypeScript** | ^5.7.0 | Język programowania |
| **Node.js** | 18+ | Runtime environment |
| **Allure Report** | Latest | Zaawansowany reporting |
| **Faker.js** | Latest | Generowanie danych testowych |
| **ESLint** | Latest | Linting i code quality |
| **Prettier** | Latest | Code formatting |

---

## ✨ Funkcjonalności

### 🧩 Architektura
- **Page Object Model** - separacja logiki testowej od implementacji UI
- **Component Objects** - reużywalne komponenty (modals, forms)
- **Base Page** - wspólne metody dla wszystkich page objects
- **Custom Fixtures** - dependency injection dla testów

### 🎨 Design Patterns
- **Factory Pattern** - dynamiczne tworzenie page objects
- **Builder Pattern** - budowanie złożonych obiektów testowych
- **Singleton Pattern** - Configuration Manager, Logger
- **Strategy Pattern** - wymienne strategie dla różnych środowisk

### 🧪 Testing Features
- **UI Testing** - kompleksowe testy end-to-end
- **API Testing** - wbudowane API testing w Playwright
- **Hybrid Tests** - kombinacja UI + API dla optymalnej wydajności
- **Visual Testing** - screenshot comparison & visual regression
- **Accessibility Testing** - a11y checks (opcjonalne)

### 📊 Reporting & Observability
- **Allure Report** - bogate raporty z historiami, kategoriami, attachments
- **Screenshots** - automatyczne przy fail
- **Videos** - nagrania testów (opcjonalne)
- **Trace files** - szczegółowe traces dla debugging

### 🚀 CI/CD
- **GitHub Actions** - automatyczne uruchamianie testów
- **Multi-browser testing** - Chromium, Firefox, WebKit
- **Parallel execution** - szybkie wykonanie test suite
- **Artifact management** - raporty dostępne po każdym run

---

## 📁 Struktura projektu

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
│   │   │   └── BasePage.ts         # Base class dla wszystkich pages
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
│   │   │   └── ConfigManager.ts    # Singleton dla konfiguracji
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
├── README.md                       # Ten plik!
├── roadmap.md                      # Plan nauki i rozwoju
└── claude.md                       # Learning journal
```

---

## 📦 Wymagania

- **Node.js** 18 lub nowszy
- **npm** 9 lub nowszy
- **Git** (do klonowania repo)

### Sprawdź swoje wersje:
```bash
node --version   # powinno być >= 18
npm --version    # powinno być >= 9
```

---

## 🚀 Instalacja

### 1. Sklonuj repozytorium
```bash
git clone https://github.com/twoj-username/playwright-automation-framework.git
cd playwright-automation-framework
```

### 2. Zainstaluj dependencies
```bash
npm install
```

### 3. Zainstaluj Playwright browsers
```bash
npx playwright install
```

### 4. Sprawdź instalację
```bash
npx playwright --version
```

---

## 🎮 Uruchamianie testów

### Podstawowe komendy

```bash
# Uruchom wszystkie testy
npm test

# Uruchom testy w headed mode (z widoczną przeglądarką)
npm run test:headed

# Uruchom testy w debug mode
npm run test:debug

# Uruchom konkretny plik testowy
npx playwright test tests/ui/auth/login.spec.ts

# Uruchom testy z konkretnym tagiem
npx playwright test --grep @smoke

# Uruchom testy na konkretnej przeglądarce
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Raporty

```bash
# Otwórz HTML report (wbudowany Playwright)
npm run report

# Generuj Allure report
npm run allure:generate

# Otwórz Allure report
npm run allure:open

# Generuj i otwórz Allure (jedno polecenie)
npm run allure:report
```

### CI/CD

```bash
# Uruchom w trybie CI
npm run test:ci

# To samo co robi GitHub Actions:
# - headless mode
# - wszystkie przeglądarki
# - generuje raporty
# - uploaduje artifacts
```

---

## 🎨 Wzorce projektowe

### 1. Page Object Model (POM)
```typescript
// Separacja logiki testowej od implementacji UI
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
// Dynamiczne tworzenie page objects
class PageFactory {
  static createPage<T>(PageClass: new (page: Page) => T, page: Page): T {
    return new PageClass(page);
  }
}
```

### 3. Builder Pattern
```typescript
// Budowanie złożonych obiektów testowych
const user = new UserBuilder()
  .withUsername('admin')
  .withRole('Admin')
  .withPermissions(['read', 'write'])
  .build();
```

### 4. Singleton Pattern
```typescript
// Jedna instancja w całej aplikacji
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

### Lokatory - Hierarchia
```typescript
// ⭐⭐⭐ Najlepsze - data-testid
page.getByTestId('submit-button')

// ⭐⭐ Bardzo dobre - role (accessibility)
page.getByRole('button', { name: 'Submit' })

// ⭐ Dobre - text
page.getByText('Submit')

// ❌ Ostateczność - CSS/XPath (kruche!)
page.locator('.btn-primary')
```

### Auto-waiting
```typescript
// ✅ Playwright czeka automatycznie
await page.click('button');
await expect(page.locator('.message')).toBeVisible();

// ❌ Nie rób tego (niepotrzebne sleep)
await page.waitForTimeout(5000); // Bad!
```

### Test Independence
```typescript
// ✅ Każdy test jest niezależny
test.beforeEach(async ({ page }) => {
  // Setup dla KAŻDEGO testu
  await loginPage.login('admin', 'pass');
});

// ❌ Testy zależne od siebie (Bad!)
test.describe.serial(() => { /* ... */ }); // Unikaj!
```

---

## 📊 Reporting

### Allure Report Features
- 📈 **Historie testów** - trendy pass/fail
- 🏷️ **Kategorie** - grupowanie testów
- 📎 **Attachments** - screenshots, videos, logs
- ⏱️ **Timeline** - wizualizacja wykonania
- 📊 **Graphs** - wykresy statystyk

### Screenshots & Videos
```typescript
// Automatyczne przy fail (skonfigurowane w playwright.config.ts)
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
- ✅ Comment na PR z wynikami (opcjonalne)

### Lokalne uruchomienie "jak w CI"
```bash
npm run test:ci
```

---

## 🗺️ Roadmap

Szczegółowy plan nauki i rozwoju projektu znajduje się w [roadmap.md](roadmap.md).

**Status:**
- ✅ Faza 1: Fundament - W TRAKCIE
- ⏳ Faza 2: Page Object Model
- ⏳ Faza 3: Design Patterns
- ⏳ Faza 4-10: ...

---

## 📚 Dodatkowe zasoby

- [Learning Journal (claude.md)](claude.md) - notatki z procesu nauki
- [Playwright Docs](https://playwright.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 👤 Autor

**[Twoje Imię]**
- 💼 LinkedIn: [link]
- 🐙 GitHub: [link]
- 📧 Email: [email]

---

## 📄 Licencja

MIT License - wolne do użytku w portfolio i projektach komercyjnych.

---

## 🙏 Acknowledgments

- Playwright Team za świetny framework
- OrangeHRM za darmową aplikację demo
- Community za best practices i inspirację

---

**⭐ Jeśli ten projekt Ci pomógł, zostaw gwiazdkę na GitHub! ⭐**

---

*Stworzono z ❤️ jako learning project i portfolio piece*
