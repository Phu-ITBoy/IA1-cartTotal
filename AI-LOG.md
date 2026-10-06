# AI-LOG

## 2026-10-06 — Harness and brief

- **Tool:** OpenAI Codex desktop app
- **Asked for:** Read the IA#1 assignment, Week 2 materials, rubric, and Classroom templates; then prepare the permitted local harness and implementation brief for student ID 24127493.
- **Kept:** `AGENTS.md`, `BRIEF.md`, the `npm run lint` gate in `package.json`, and `.github/workflows/ci.yml` using Node.js 24.
- **Changed:** Codex clarified the brief so the example result, validation rules, shipping threshold, empty-cart behavior, and rounding rule are explicit. No student-authored revision has been made yet.
- **Rejected:** Adding dependencies, changing the public function signature, or skipping the required initial failing test.
- **By hand:** The student supplied the assignment links, student ID, and approval to proceed. Codex read the supplied materials, created the files, inspected the diff, and ran the local checks. The student still needs to review and understand these files personally.

## 2026-10-06 — Tests and implementation

- **Tool:** OpenAI Codex desktop app
- **Asked for:** Follow test-driven development to test and implement `cartTotal(items, options)` in plain JavaScript with no dependencies.
- **Kept:** Ten black-box tests in `test/cart.test.js` and the implementation in `src/cart.js`. The recorded sequence is: starter test failed, expanded contract tests failed against the stub, implementation was added, then all tests passed.
- **Changed:** Codex replaced the starter's single example test with focused tests for the worked example, empty cart, shipping boundary, below-threshold shipping, rounding, numeric return type, negative prices, and invalid quantities. Codex then replaced the stub with the minimum calculation and validation logic. No student-authored source-code change has been made yet.
- **Rejected:** Using `toFixed()` because it returns a string, rounding intermediate values, validating only the first item, or weakening tests to make the stub pass.
- **By hand:** Codex ran `npm test`, `npm run lint`, and Git diff checks, and read every generated diff. The student has not yet performed the required personal diff review or practiced explaining the implementation.

## 2026-10-06 — Submission evidence and handoff

- **Tool:** OpenAI Codex desktop app
- **Asked for:** Prepare the required AI log, one-row-per-criterion self-assessment, student-only checklist, and correctly named ZIP without publishing or submitting on the student's behalf.
- **Kept:** `AI-LOG.md`, `SELF_ASSESSMENT_REPORT.md`, and `STUDENT_TODO.md`, plus a conservative provisional score of 93/100.
- **Changed:** Codex used the student's full name shown in Classroom and tied each claimed score to concrete files, tests, commands, and commits. No student-authored revision has been made yet.
- **Rejected:** Claiming hosted CI evidence before a personal repository is pushed, claiming a completed personal review that has not happened, storing secrets, or submitting to Classroom without the student's final review.
- **By hand:** The student logged in to Classroom and authorized access to the supplied course links. Codex prepared the local evidence. The student must complete the review, GitHub publication/CI check, any honest log updates, and the final Classroom upload.
