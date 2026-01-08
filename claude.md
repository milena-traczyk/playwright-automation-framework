# 📝 Learning Journal - Playwright Automation Framework

## 🎯 Cel tego dokumentu
Ten plik śledzi postępy w nauce, ważne koncepcje, notatki i pytania podczas budowania projektu automatyzacji testów.

**Podział odpowiedzialności:**
- 🤖 **Claude**: Dokumentuje fakty, wyjaśnienia techniczne, odpowiedzi na pytania
- 👤 **Ty**: Wypełniasz refleksje, Key Takeaways, wyzwania (swoimi słowami!)

---

## 🎓 Jak Pracujemy - Zasady Nauki

### 🎯 ZŁOTA ZASADA: Kod + Wyjaśnienie = Razem, Zawsze
**Learning by Doing z Kontekstem**
- ✅ **ROBIMY:** Wyjaśnienia INLINE jako komentarze w kodzie
- ❌ **NIE ROBIMY:** Teoria osobno, potem kod
- ❌ **NIE ROBIMY:** Kod najpierw, wyjaśnienie potem
- 🎓 **DLACZEGO:** Uczysz się PISZĄC ze zrozumieniem, nie czytając teorię a potem implementując
- Integrujemy wyjaśnienia, analogie i "dlaczego" bezpośrednio w każdym kroku

### 💬 Styl Komunikacji
**Szczerość > Zgoda**
- **Kwestionuję złe pomysły** - Jeśli Twój approach nie jest optymalny, powiem dlaczego z uzasadnieniem
- **Oferuję alternatywy** - Nawet gdy Twój pomysł jest dobry, pokażę inne równie dobre opcje
- **Nie wzmacniam błędów** - Nie potwierdzam czegoś tylko dlatego że w to wierzysz
- **Szanuję ostateczną decyzję** - Po dyskusji, Twój wybór jest wiążący

### 🗺️ Workflow z Roadmap i Session Notes

#### Na początku każdej sesji:
1. **Czytam ostatnie session notes** z `docs/sessions/`
   - Co zostało zrobione, jakie decyzje, jakie blokery
   - Przeglądam sekcję "Next Session" dla kontynuacji
2. **Sprawdzam roadmap.md**
   - Jaki jest aktualny task/priorytet
   - Czy coś się zmieniło od ostatniej sesji
3. **Zapewniam kontynuację** - Unikam powtarzania ukończonej pracy

#### Podczas pracy:
1. **Read before editing** - Zawsze czytam pliki przed wprowadzeniem zmian
2. **Follow existing patterns** - Dostosowuję się do stylu i konwencji kodu w projekcie
3. **Check the roadmap** - roadmap.md zawiera aktualne priorytety
4. **NIGDY nie pomijam tasków z roadmapy** bez Twojego pozwolenia
5. **Jeśli task niejasny** - PYTAM przed rozpoczęciem (nie zgaduję)
6. **Jeśli task wydaje się błędny** - KWESTIONUJĘ z uzasadnieniem

#### Na końcu sesji:
1. **Tworzę session notes** w `docs/sessions/session-XX-YYYY-MM-DD.md`
2. **Aktualizuję roadmap.md** z completion notes
3. **Aktualizuję claude.md** z Q&A i notatkami

### ✋ Wykonywanie Komend
- **ZAWSZE pytam przed wykonaniem** komendy (chyba że to tylko odczyt plików/sprawdzanie statusu)
- **TY wpisujesz i wykonujesz** komendy - uczysz się w praktyce
- Wyjątek: czysto informacyjne komendy (read files, git status, ls)

---

## 📅 Session Log

### Session 1 - [2026-01-07] - Project Setup & Planning

#### 🎯 Co planujemy osiągnąć dzisiaj:
1. Zrozumienie struktury projektu i roadmapy
2. Utworzenie dokumentacji projektu (roadmap.md, claude.md, README.md)
3. Inicjalizacja projektu Node.js z TypeScript
4. Instalacja i konfiguracja Playwright
5. Utworzenie podstawowej struktury folderów

#### 📚 Nowe koncepty do nauki:
- [ ] **package.json** - co to jest i dlaczego potrzebujemy
- [ ] **TypeScript configuration** - tsconfig.json i jego rola
- [ ] **Playwright configuration** - playwright.config.ts
- [ ] **Node modules** - jak działa npm/node_modules
- [ ] **Struktura projektu** - dlaczego separujemy testy/pages/fixtures

#### 🔍 Pytania i odpowiedzi:

**Q: Co to jest package.json?**
A: To "certyfikat tożsamości" projektu Node.js. Zawiera:
- Nazwę i wersję projektu
- Listę dependencies (pakietów które projekt potrzebuje)
- Scripts (komendy które możemy uruchomić)
- Metadane (autor, licencja, keywords)
Analogia: package.json = przepis na ciasto (lista składników i instrukcje)

**Q: Czym różnią się dependencies od devDependencies?**
A:
- dependencies = pakiety potrzebne żeby aplikacja DZIAŁAŁA w produkcji
- devDependencies = pakiety potrzebne tylko do DEVELOPMENTU (testowanie, kompilacja)
Instalacja: npm install pakiet (dependencies) vs npm install -D pakiet (devDependencies)
W naszym projekcie wszystko to dev tools, więc używamy -D

**Q: Co to jest npx?**
A:
- npm = instaluje pakiety
- npx = uruchamia komendy z pakietów (bez globalnej instalacji)
Przykład: npx tsc --version (uruchamia TypeScript Compiler z node_modules)

**Q: Dlaczego TypeScript zamiast JavaScript?**
A: (Do wypełnienia podczas konfiguracji - następna sesja)

**Q: Jak działa Page Object Model?**
A: (Do wypełnienia w Fazie 2)

#### ✅ Co udało się zrobić:
- [x] Utworzenie roadmap.md z planem nauki (10 faz)
- [x] Utworzenie claude.md (learning journal)
- [x] Utworzenie README.md (portfolio-ready documentation)
- [x] Instalacja Node.js (v24.12.0) i npm (v11.6.2)
- [x] Inicjalizacja package.json (npm init -y)
- [x] Konfiguracja package.json (scripts, keywords, license)
- [x] Instalacja Playwright (v1.57.0) + TypeScript (v5.9.3)
- [x] Instalacja pakietów: @playwright/test, typescript, @types/node
- [x] Instalacja przeglądarek (Chromium, Firefox, WebKit) - 443MB
- [ ] Konfiguracja TypeScript (tsconfig.json) - NASTĘPNA SESJA
- [ ] Konfiguracja Playwright (playwright.config.ts)
- [ ] Struktura folderów

#### 🤔 Wyzwania i jak je rozwiązaliśmy:
**Problem 1: npm/node not recognized**
- Error: `npm : The term 'npm' is not recognized...`
- Przyczyna: Node.js nie był zainstalowany
- Rozwiązanie: Instalacja Node.js LTS z nodejs.org, restart VSCode
- Lekcja: Node.js musi być w PATH, żeby terminal go rozpoznał

(TY możesz dodać więcej na końcu sesji)

#### 💡 Key Takeaways (Najważniejsze wnioski):
(TY wypełnisz na końcu sesji - swoimi słowami! 3-5 punktów)
- wiem,czym jest plik package.json, jakie informacje mogą się tam znaęźć (nazwa projketu, autor, licencka projektu, skrypty, dependecies)
-
-

---

## 📖 Koncepty - Szczegółowe notatki

### 🔷 Fundamentals

#### Node.js & NPM
```
Co to jest:
- Node.js: środowisko uruchomieniowe JavaScript poza przeglądarką
- NPM: Node Package Manager - menedżer pakietów (jak Maven dla Javy, pip dla Pythona)

Dlaczego to ważne:
- Pozwala uruchamiać JavaScript/TypeScript lokalnie (nie tylko w przeglądarce)
- NPM zarządza dependencies (zależnościami) projektu
- Standardowy ekosystem dla narzędzi JS/TS

Kluczowe pliki:
- package.json: "lista zakupów" projektu - wszystkie zależności
- package-lock.json: dokładne wersje zainstalowanych pakietów (dla konsystencji)
- node_modules/: folder z zainstalowanymi pakietami (CIĘŻKI! ~100-500MB)

Kluczowe komendy:
npm init                  # Tworzy nowy projekt (generuje package.json)
npm install <pakiet>      # Instaluje pakiet
npm install               # Instaluje wszystkie pakiety z package.json
npm run <script>          # Uruchamia skrypt z package.json
npm test                  # Uruchamia testy

Analogia:
package.json = przepis na ciasto (lista składników)
npm install = idź do sklepu i kup składniki
node_modules = lodówka ze składnikami
```

#### TypeScript
```
Co to jest:
- JavaScript + typy statyczne
- Kompiluje się do czystego JavaScript
- .ts files → TypeScript Compiler → .js files

Dlaczego w testach automatycznych?
✅ Wykrywa błędy podczas pisania (nie runtime!)
✅ Inteligentne auto-complete w IDE
✅ Lepsze refactoring (IDE wie co gdzie używane)
✅ Samodokumentujący się kod (typy jako dokumentacja)
✅ Łatwiejsze maintenance

Przykład dlaczego to ważne:

// JavaScript - bug ukryty do runtime
function login(username, password) {
  await page.fill('#user', username);
  await page.fill('#pass', password);
}
login('admin', 123); // 123 to liczba, nie string! Runtime error!

// TypeScript - błąd wychwycony natychmiast
function login(username: string, password: string): Promise<void> {
  await page.fill('#user', username);
  await page.fill('#pass', password);
}
login('admin', 123); // ❌ ERROR: Argument of type 'number' is not assignable
login('admin', '123'); // ✅ OK

Kluczowe pliki:
- tsconfig.json: konfiguracja TypeScript compilera
- .ts files: pliki TypeScript
```

#### TypeScript - tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2022",        // Do jakiej wersji JS kompilować
    "module": "commonjs",      // System modułów (commonjs = Node.js standard)
    "strict": true,            // Włącz wszystkie strict checks
    "esModuleInterop": true,   // Lepsze imoprtowanie modułów
    "skipLibCheck": true,      // Szybsza kompilacja
    "outDir": "./dist",        // Gdzie zapisać skompilowane .js
    "rootDir": "./src"         // Gdzie są źródła .ts
  }
}

Najważniejsze opcje:
- strict: true = maksymalne sprawdzanie typów (ZAWSZE używaj!)
- outDir: gdzie trafią pliki .js po kompilacji
```

---

### 🔷 Playwright Basics

#### Co to jest Playwright?
```
Definicja:
Framework od Microsoft do testowania end-to-end aplikacji webowych

Rok powstania: 2020 (młodszy od Selenium!)

Główne features:
✅ Auto-waiting: czeka automatycznie na elementy (no more sleep()!)
✅ Multi-browser: Chromium, Firefox, WebKit (Safari)
✅ Multi-platform: Windows, Linux, macOS
✅ Multi-language: JavaScript, TypeScript, Python, Java, .NET
✅ Built-in API testing (nie trzeba osobnego narzędzia!)
✅ Network interception (mock API responses)
✅ Auto-screenshots/videos przy fail
✅ Parallel execution out-of-the-box
✅ Headless & headed modes

Playwright vs Selenium:
┌─────────────────┬──────────────┬──────────────┐
│ Feature         │ Playwright   │ Selenium     │
├─────────────────┼──────────────┼──────────────┤
│ Auto-waiting    │ ✅ Tak       │ ❌ Nie       │
│ API testing     │ ✅ Built-in  │ ❌ Nie       │
│ Speed           │ ⚡ Szybki    │ 🐢 Wolniejszy│
│ Flakiness      │ ✅ Mniej     │ ⚠️ Więcej    │
│ Community       │ 📈 Rośnie    │ 📊 Dojrzała  │
│ Job market      │ 🔥 Trending  │ 💼 Więcej    │
└─────────────────┴──────────────┴──────────────┘

Kiedy używać:
- Nowe projekty: Playwright ✅
- Legacy projekty z Selenium: można migrować stopniowo
- Portfolio: Playwright pokazuje że znasz nowoczesne narzędzia!
```

#### Podstawowe API Playwright
```typescript
// To wypełnimy podczas pisania pierwszych testów!
// Będziemy dodawać przykłady w miarę nauki
```

---

### 🔷 Page Object Model (POM)

#### Teoria
```
Co to jest:
(Do wypełnienia w Fazie 2)

Dlaczego używamy:
(Do wypełnienia w Fazie 2)

Przykład struktury:
(Do wypełnienia z przykładami w Fazie 2)
```

---

### 🔷 Design Patterns w testach

#### Factory Pattern
```
(Do wypełnienia podczas implementacji w Fazie 3)
```

#### Builder Pattern
```
(Do wypełnienia podczas implementacji w Fazie 3)
```

#### Singleton Pattern
```
(Do wypełnienia podczas implementacji w Fazie 3)
```

---

### 🔷 Best Practices

#### Lokatory - Hierarchia (The Golden Rule)
```
Hierarchia od najlepszego do najgorszego:

1. ⭐⭐⭐ data-testid / data-test
   Przykład: page.getByTestId('submit-button')
   ✅ Nie zmienia się
   ✅ Jasna intencja "to jest do testowania"
   ❌ Wymaga współpracy z devami

2. ⭐⭐ Role (accessibility)
   Przykład: page.getByRole('button', { name: 'Submit' })
   ✅ Wymusza accessibility
   ✅ Stabilne
   ❌ Czasem niejednoznaczne (wiele buttonów)

3. ⭐ Text
   Przykład: page.getByText('Submit')
   ✅ Czytelne
   ❌ Zmienia się przy tłumaczeniach
   ❌ Może być niejednoznaczne

4. ❌ CSS / XPath (last resort!)
   Przykład: page.locator('.btn-primary > span:nth-child(2)')
   ❌ Kruche (każda zmiana CSS = broken test)
   ❌ Nieczytelne
   ✅ Czasem jedyna opcja

Przykłady:
(Będziemy dodawać podczas pisania testów)
```

#### Test Organization
```
(Do wypełnienia podczas pisania pierwszych testów)
```

---

## 🐛 Troubleshooting - Problemy i rozwiązania

### Problem 1: [Tytuł]
**Opis:**
(Co się stało)

**Rozwiązanie:**
(Jak naprawiliśmy)

**Czego się nauczyłem:**
(Lekcje)

---

## 📚 Resources - Przydatne zasoby

### Dokumentacja
- [Playwright Docs](https://playwright.dev/) - główna dokumentacja
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - nauka TypeScript
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)

### Tutorials & Articles
(Będziemy dodawać użyteczne linki podczas nauki)

### Tools & Extensions
**VSCode Extensions (zalecane):**
- Playwright Test for VSCode - uruchamianie testów z IDE
- ESLint - wykrywanie błędów
- Prettier - formatowanie kodu
- TypeScript Hero - auto-import

---

## ✨ Code Snippets - Przydatne fragmenty kodu

### Snippet 1: Basic test structure (template)
```typescript
import { test, expect } from '@playwright/test';

test.describe('Feature name', () => {
  test.beforeEach(async ({ page }) => {
    // Setup - przygotowanie
  });

  test('should do something', async ({ page }) => {
    // Arrange - przygotowanie danych
    // Act - wykonanie akcji
    // Assert - weryfikacja
  });

  test.afterEach(async ({ page }) => {
    // Cleanup - sprzątanie
  });
});
```
(Więcej snippetów będziemy dodawać w trakcie!)

---

## 🎯 Daily Goals Tracker

### Week 1 - Fundamenty & POM
- [ ] **Day 1**: Project setup, dokumentacja, inicjalizacja
- [ ] **Day 2**: Struktura folderów, pierwszy Page Object
- [ ] **Day 3**: Pierwszy kompletny test z POM
- [ ] **Day 4**: Base Page class, więcej Page Objects
- [ ] **Day 5**: Design Patterns - Factory intro
- [ ] **Day 6-7**: Review, refactor, praktyka

### Week 2 - Patterns & API Testing
- [ ] **Day 8**: Builder Pattern, test data
- [ ] **Day 9**: Fixtures w Playwright
- [ ] **Day 10**: API testing basics
- [ ] **Day 11**: Hybrid tests (UI + API)
- [ ] **Day 12-14**: Praktyka i refactor

### Week 3 - Visual & CI/CD
(Do wypełnienia później)

### Week 4 - Polish & Portfolio
(Do wypełnienia później)

---

## 💭 Reflection - Refleksje (TY wypełniasz!)

### Co poszło dobrze?
(Twoje sukcesy)

### Co było trudne?
(Wyzwania)

### Co zrobić inaczej następnym razem?
(Improvements)

---

## 🚀 Next Steps

### Najbliższe kroki na następną sesję (Session 2):
1. **Utworzenie tsconfig.json** (TypeScript configuration)
   - Komenda: `npx tsc --init`
   - Modyfikacja dla Playwright (strict mode, module system)

2. **Utworzenie playwright.config.ts** (Playwright configuration)
   - Konfiguracja browserów (Chromium, Firefox, WebKit)
   - Ustawienia testów (timeout, retry, screenshots)
   - Reporter configuration

3. **Struktura folderów projektu**
   - Utworzenie: src/pages/, src/tests/, src/fixtures/, src/utils/
   - .gitignore (żeby nie commitować node_modules)

4. **Pierwszy prosty test** (hello world test)
   - Sprawdzenie czy wszystko działa
   - Uruchomienie: npm test

### Pytania do zbadania w przyszłości:
- **Node.js i transpilacja** - jak działa proces .ts → .js? Kiedy to się dzieje?
- Jak dokładnie działa TypeScript compilation?
- Co to jest "strict mode" w TypeScript i dlaczego go używamy?
- Jak Playwright znajduje testy automatycznie?
- Różnica między compile time vs runtime errors

---

## 📝 Session Template (kopiuj dla nowych sesji)

```markdown
### Session X - [Data] - [Tytuł]

#### 🎯 Cele sesji:
1.
2.

#### 📚 Nowe koncepty:
- [ ] Koncept 1
- [ ] Koncept 2

#### 🔍 Pytania i odpowiedzi:
Q:
A:

#### ✅ Osiągnięcia:
- [ ]
- [ ]

#### 🤔 Wyzwania:
(TY wypełniasz)

#### 💡 Key Takeaways:
(TY wypełniasz - 3-5 punktów swoimi słowami!)
-
-
-

---
```

---

*Ten dokument jest living document - aktualizuj go regularnie podczas nauki! 🌱*
*Pamiętaj: Wypełnianie refleksji to część procesu nauki, nie obowiązek! 😊*
