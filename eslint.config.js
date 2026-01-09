import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';
import prettierConfig from 'eslint-config-prettier';

export default [
    // 1. Basic ESLint recommended rules (applies to all files: .js, .ts, .mjs)
    //    - Detects unused variables (let x = 5; but never used)
    //    - Prevents common errors (if(x = 5) instead of if(x === 5))
    //    - Warns about console.log, debugger statements
    //    - Enforces best practices (no duplicate imports, no unreachable code)
    eslint.configs.recommended,

    // 2. TypeScript ESLint recommended rules (applies to .ts files only)
    //    - Prevents using 'any' type without good reason (@typescript-eslint/no-explicit-any)
    //    - Warns about unused variables in TypeScript (@typescript-eslint/no-unused-vars)
    //    - Requires proper type definitions for functions
    //    - Detects type-related issues that TypeScript compiler might miss
    //    - Note: "..." (spread) unpacks all recommended TypeScript rules into config
    ...tseslint.configs.recommended,

    // 3. Playwright-specific rules for test files only
    //    - Detects deprecated Playwright APIs (e.g., old .click() syntax)
    //    - Warns about test.only() left in code (blocks other tests from running)
    //    - Enforces Playwright best practices (proper locators, awaits)
    //    - Suggests better alternatives for common patterns
    {
        files: ['tests/**/*.ts', 'tests/**/*.spec.ts'],
        ...playwright.configs['flat/recommended'],
    },

    // 4. Prettier integration - disables ESLint rules that conflict with Prettier
    //    - Turns off formatting rules (spacing, line breaks, quotes) handled by Prettier
    //    - Prevents conflicts between ESLint auto-fix and Prettier formatting
    //    - MUST be last in the array to override previous configs
    prettierConfig,
]