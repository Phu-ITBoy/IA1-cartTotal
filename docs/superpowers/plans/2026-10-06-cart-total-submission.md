# IA#1 cartTotal Submission Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce a locally verified, honestly documented IA#1 submission package for student `24127493`.

**Architecture:** Keep the starter's single exported calculation function and exercise it through black-box `node:test` cases. Use only Node.js built-ins for implementation, tests, syntax checking, and packaging; keep grading evidence in focused Markdown files and run the same gates locally and in GitHub Actions.

**Tech Stack:** JavaScript ES modules, Node.js 24, `node:test`, `node:assert/strict`, npm scripts, GitHub Actions.

**Spec:** `docs/superpowers/specs/2026-10-06-cart-total-submission-design.md`

## Global Constraints

- Do not add runtime or development dependencies.
- Keep `cartTotal(items, options)` exported from `src/cart.js`.
- Return a JavaScript number rounded to the whole dong.
- Throw `RangeError` for a negative price or any quantity that is not a positive integer.
- Do not invent validation for names, option types, or positive non-integer prices.
- Preserve the starter commit and use small, auditable commits.
- Do not claim hosted CI or personal student review until those actions actually occur.

## Review Focus

- An empty cart with nonzero VAT and shipping options must still return exactly `0`.
- A subtotal exactly equal to `freeShipFrom` must receive free shipping.
- A subtotal one dong below `freeShipFrom` must still pay `shipFee`.
- A fractional pre-round total must return the nearest integer as a number.
- An invalid item after valid items must still throw the required `RangeError`.

---

### Task 1: Establish the project harness and implementation brief

**Files:**
- Create: `AGENTS.md`
- Create: `BRIEF.md`
- Create: `.github/workflows/ci.yml`
- Modify: `package.json`

**Interfaces:**
- Consumes: starter `npm test`, `src/cart.js`, and `test/cart.test.js`.
- Produces: `npm run lint`, repository rules, a grader-readable brief, and CI gates used by all later tasks.

- [ ] **Step 1: Record the starter's failing test**

Run: `npm test`

Expected: FAIL in `the example from the slides` because `src/cart.js` throws `Error: not implemented`.

- [ ] **Step 2: Write `AGENTS.md`**

Name Node.js 24 and ES modules, list `npm test` and `npm run lint`, restrict implementation to `src/cart.js` and tests to `test/cart.test.js`, require reading diffs before gates, and include explicit rules to never add dependencies and never use `toFixed()` for the result.

- [ ] **Step 3: Add the lint gate to `package.json`**

Add script `"lint": "node --check src/cart.js && node --check test/cart.test.js"` without changing the existing test command.

- [ ] **Step 4: Add `.github/workflows/ci.yml`**

On pushes and pull requests, use `actions/checkout@v4`, `actions/setup-node@v4` with Node `24`, then run `npm run lint` and `npm test`. Do not run `npm install` because the project has no dependencies.

- [ ] **Step 5: Verify the harness syntax gate**

Run: `npm run lint`

Expected: PASS with exit code `0`.

- [ ] **Step 6: Write `BRIEF.md` after the harness is established**

State the allowed files, exact `cartTotal(items, options)` contract, worked value `467400`, empty-cart behavior, shipping threshold, both `RangeError` categories, numeric whole-dong result, required independent tests, and no-dependencies constraint.

- [ ] **Step 7: Commit**

```bash
git add AGENTS.md BRIEF.md package.json .github/workflows/ci.yml
git commit -m "chore: add IA1 harness and implementation brief"
```

### Task 2: Encode the complete observable contract as failing tests

**Files:**
- Modify: `test/cart.test.js`
- Test: `test/cart.test.js`

**Interfaces:**
- Consumes: exported `cartTotal(items, options)` from `src/cart.js`.
- Produces: independent specification tests that Task 3 must satisfy.

- [ ] **Step 1: Add focused behavior tests**

Use separate `test(...)` blocks with these assertions:

```js
assert.equal(cartTotal(exampleItems, exampleOptions), 467400)
assert.equal(cartTotal([], exampleOptions), 0)
assert.equal(cartTotal([{ price: 500000, qty: 1 }], exampleOptions), 540000)
assert.equal(cartTotal([{ price: 499999, qty: 1 }], { vatRate: 0, freeShipFrom: 500000, shipFee: 30000 }), 529999)
assert.equal(cartTotal([{ price: 10, qty: 1 }], { vatRate: 0.055, freeShipFrom: 100, shipFee: 0 }), 11)
assert.equal(typeof cartTotal([{ price: 10, qty: 1 }], { vatRate: 0.055, freeShipFrom: 100, shipFee: 0 }), 'number')
assert.throws(() => cartTotal([{ price: 10, qty: 1 }, { price: -1, qty: 1 }], exampleOptions), RangeError)
assert.throws(() => cartTotal([{ price: 10, qty: 0 }], exampleOptions), RangeError)
assert.throws(() => cartTotal([{ price: 10, qty: -1 }], exampleOptions), RangeError)
assert.throws(() => cartTotal([{ price: 10, qty: 1.5 }], exampleOptions), RangeError)
```

Give every block a name describing exactly one expected behavior. Item `name` is optional in tests because the calculation does not consume it.

- [ ] **Step 2: Run tests to verify the specification is red**

Run: `npm test`

Expected: FAIL because `cartTotal` still throws `Error: not implemented`; the failure is caused by missing implementation rather than syntax or import errors.

- [ ] **Step 3: Run the syntax gate**

Run: `npm run lint`

Expected: PASS with exit code `0`.

- [ ] **Step 4: Commit**

```bash
git add test/cart.test.js
git commit -m "test: cover cart total contract and edge cases"
```

### Task 3: Implement `cartTotal`

**Files:**
- Modify: `src/cart.js`
- Test: `test/cart.test.js`

**Interfaces:**
- Consumes: `items: Array<{name?: string, price: number, qty: number}>` and `options: {vatRate: number, freeShipFrom: number, shipFee: number}`.
- Produces: `cartTotal(items, options): number`, throwing `RangeError` for specified invalid item values.

- [ ] **Step 1: Implement the validation and calculation**

Iterate through every item, throw `RangeError` when `price < 0` or `!Number.isInteger(qty) || qty <= 0`, and accumulate `price * qty`. Return `0` immediately for an empty array. Compute VAT and threshold-based shipping from the completed subtotal, then return `Math.round(subtotal + vat + shipping)`.

- [ ] **Step 2: Run the behavior gate**

Run: `npm test`

Expected: all named tests PASS with zero failures.

- [ ] **Step 3: Run the syntax gate**

Run: `npm run lint`

Expected: PASS with exit code `0`.

- [ ] **Step 4: Check the implementation diff for whitespace errors**

Run: `git diff --check`

Expected: no output and exit code `0`.

- [ ] **Step 5: Inspect the implementation diff**

Run: `git diff -- src/cart.js test/cart.test.js`

Expected: no dependency changes, no `toFixed()`, and only the contract's behavior.

- [ ] **Step 6: Commit**

```bash
git add src/cart.js
git commit -m "feat: implement cart total calculation"
```

### Task 4: Create honest submission evidence and student handoff

**Files:**
- Create: `AI-LOG.md`
- Create: `SELF_ASSESSMENT_REPORT.md`
- Create: `STUDENT_TODO.md`

**Interfaces:**
- Consumes: actual commands, commits, diffs, and gate results from Tasks 1-3.
- Produces: rubric evidence, a conservative total of `93`, and an explicit list of student-only actions.

- [ ] **Step 1: Preserve the starter remote as `upstream`**

Run: `git remote rename origin upstream`

Expected: `git remote -v` lists `upstream` for the official starter URL and no personal `origin` yet.

- [ ] **Step 2: Write `AI-LOG.md` from the recorded work**

Write separate dated entries for the harness/brief, tests/implementation, and submission documentation. Each entry uses the exact Classroom fields `Tool`, `Asked for`, `Kept`, `Changed`, `Rejected`, and `By hand`. Identify Codex, the user's supplied artifact/rubric/student ID, generated code and files, the rejected dependency and `toFixed()` approaches, automated checks performed, and the fact that student review or handwritten edits have not yet occurred. Do not fabricate personal work.

- [ ] **Step 3: Write `SELF_ASSESSMENT_REPORT.md`**

Use the heading `Self-assessment - IA#1`, identify `24127493 - Phú Văn Viết Minh`, state the claimed total, and create one row per rubric criterion with file/test/commit evidence. Claim: behavior `30/30`, tests `20/20`, harness `16/20` until hosted CI is green, brief `15/15`, and AI log `12/15` until personal review is added. State total `93/100`, then add `What I did not manage` and `What I would do differently` sections covering hosted CI, personal review, repository publication, and submission.

- [ ] **Step 4: Write `STUDENT_TODO.md`**

Give exact commands for confirming `upstream`, creating/adding the student's personal `origin`, pushing `main`, checking the Actions run, reviewing every diff, updating the honest AI log and self-assessment, regenerating the correctly named zip if the score changes, and uploading it to Classroom.

- [ ] **Step 5: Verify evidence references**

Run: `git log --oneline --decorate -6`

Expected: every commit referenced by the documents exists.

- [ ] **Step 6: Re-run the behavior gate**

Run: `npm test`

Expected: all tests PASS with zero failures.

- [ ] **Step 7: Re-run the syntax gate**

Run: `npm run lint`

Expected: PASS with exit code `0`.

- [ ] **Step 8: Commit**

```bash
git add AI-LOG.md SELF_ASSESSMENT_REPORT.md STUDENT_TODO.md
git commit -m "docs: add IA1 submission evidence and handoff"
```

### Task 5: Final verification and reproducible package

**Files:**
- Create outside repository: `../24127493_93.zip`

**Interfaces:**
- Consumes: clean committed repository at `HEAD` and report total `93`.
- Produces: `24127493_93.zip` containing exactly the tracked submission files.

- [ ] **Step 1: Run the final behavior gate**

Run: `npm test`

Expected: all tests PASS with zero failures.

- [ ] **Step 2: Run the final syntax gate**

Run: `npm run lint`

Expected: PASS with exit code `0`.

- [ ] **Step 3: Confirm the repository is clean**

Run: `git status --short`

Expected: no output.

- [ ] **Step 4: Confirm the commit history is auditable**

Run: `git log -5 --oneline`

Expected: separate design, plan, harness, test, implementation, and submission-document stages are visible.

- [ ] **Step 5: Confirm the report total**

Run: `Select-String -Path SELF_ASSESSMENT_REPORT.md -Pattern '93/100'`

Expected: the report states total `93/100`.

- [ ] **Step 6: Create the zip from committed files**

Run: `git archive --format=zip --output ../24127493_93.zip HEAD`

Expected: the archive is created beside the repository and excludes `.git`, temporary PDF renders, and untracked files.

- [ ] **Step 7: Inspect the archive**

Run: `tar -tf ../24127493_93.zip`

Expected: source, tests, harness, workflow, brief, AI log, self-assessment, student TODO, README, and design/plan documents are present; no `node_modules` or secrets are present.
