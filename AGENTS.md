# Project Rules

## Stack

- Node.js 24
- Plain JavaScript using ES modules
- Tests use only `node:test` and `node:assert/strict`
- No runtime or development dependencies

## Commands

- `npm test` runs the complete behavior suite.
- `npm run lint` checks the JavaScript syntax.

Both commands must pass before a task is complete.

## Scope

- Implement production behavior only in `src/cart.js`.
- Keep contract tests in `test/cart.test.js`.
- Keep each test focused on one observable rule.
- Read every diff before running the final gates.

## Never

- Never add a package or dependency for this assignment.
- Never use `toFixed()` for the result because it returns a string.
- Never change a test merely to make an incorrect implementation pass.
- Never claim hosted CI passed until the GitHub Actions run is green.
