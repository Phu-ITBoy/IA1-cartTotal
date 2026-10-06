# AI-LOG

## 2026-10-06 — harness and brief
Tool: OpenAI Codex desktop app.
Asked for: Read the IA#1 assignment, Week 2 materials, rubric, and Classroom templates, then prepare the permitted local harness and implementation brief for student ID 24127493.
Kept: `AGENTS.md`, `BRIEF.md`, the `npm run lint` gate in `package.json`, and `.github/workflows/ci.yml` using Node.js 24.
Changed: No student-authored revision was made. Codex tightened the brief so the example result, validation rules, shipping threshold, empty-cart behavior, and rounding rule are explicit.
Rejected: No assistant output was rejected by the student in this task. The agreed constraints ruled out adding dependencies, changing the public function signature, and skipping the required initial failing test.
By hand: No project file was written by the student in this task. The student supplied the assignment links, student ID, and approval to proceed.

## 2026-10-06 — tests and implementation
Tool: OpenAI Codex desktop app.
Asked for: Follow test-driven development to test and implement `cartTotal(items, options)` in plain JavaScript with no dependencies.
Kept: Ten black-box tests in `test/cart.test.js` and the implementation in `src/cart.js`; the recorded sequence is starter RED, expanded contract tests RED, implementation, then GREEN.
Changed: No student-authored source-code revision was made. Codex replaced the starter test with focused contract tests and replaced the stub with the minimum validation and calculation logic.
Rejected: No assistant output was rejected by the student. Codex excluded `toFixed()`, intermediate rounding, first-item-only validation, and weakening tests because each would violate the brief or rubric.
By hand: No source or test code was written by the student in this task. The student has not yet completed the required personal diff review or practiced explaining the implementation.

## 2026-10-06 — submission evidence and handoff
Tool: OpenAI Codex desktop app.
Asked for: Prepare the required AI log, one-row-per-criterion self-assessment, student-only checklist, and correctly named ZIP without submitting on the student's behalf.
Kept: `AI-LOG.md`, `SELF_ASSESSMENT_REPORT.md`, and `STUDENT_TODO.md`, with evidence pointing to files, tests, commits, and CI.
Changed: No student-authored revision was made. Codex used the student's full name shown in Classroom and kept the self-score conservative where personal review was incomplete.
Rejected: Claiming personal review that did not happen, storing secrets, or submitting to Classroom without the student's final check.
By hand: No submission document was written by the student in this task. The student logged in to Classroom and authorized access to the supplied course links.

## 2026-10-06 — GitHub publication and hosted CI
Tool: OpenAI Codex desktop app and GitHub Actions.
Asked for: Continue after the student created `https://github.com/Phu-ITBoy/IA1-cartTotal`, then publish the checked `main` branch.
Kept: The official starter remote as `upstream`, the student's repository as `origin`, the `main` branch, and the existing CI workflow.
Changed: No student-authored code revision was made. Codex added `origin`, pushed `main`, verified hosted CI, and updated the evidence-based Harness claim from 16/20 to 20/20.
Rejected: Force-pushing, pushing to the official starter repository, claiming student review, or submitting to Classroom automatically.
By hand: The student created the empty personal GitHub repository and asked Codex to continue. No code change was written by the student in this task.

## 2026-10-06 — template compliance and final package
Tool: OpenAI Codex desktop app.
Asked for: Complete IA#1 and format the submission files exactly like the teacher's Classroom templates.
Kept: The implementation, tests, rules file, brief, evidence, repository URL, and conservative score of 97/100.
Changed: No student-authored revision was made. Codex changed each AI log entry to the exact six-label format and changed the self-assessment heading, identity line, table headings, and prose sections to match the template.
Rejected: Claiming 100/100 before the student performs a personal review, inventing handwritten work, or changing already-correct application code only to create activity.
By hand: The student supplied the template text and requested exact formatting. No file edit was made by the student; the student must still read every diff and be able to explain every submitted line.
