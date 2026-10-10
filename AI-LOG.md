# AI-LOG

## 2026-10-06 — harness and brief
Tool: OpenAI Codex desktop app.
Asked for: Analyse the IA#1 assignment, Week 2 materials, rubric, and Classroom templates; extract the exact functional contract; and propose a minimal repository harness and implementation brief for student ID 24127493 before changing the implementation.
Kept: `AGENTS.md`, `BRIEF.md`, the `npm run lint` script in `package.json`, and `.github/workflows/ci.yml` using Node.js 24. These choices make the constraints, acceptance criteria, and verification commands explicit.
Changed: Codex converted the supplied course material into a repository-specific brief covering the worked example, validation rules, shipping threshold, empty-cart behaviour, rounding rule, permitted files, and test expectations.
Rejected: Scope expansion, extra dependencies, changes to the public function signature, and any workflow that skipped the required initial failing test were ruled out because they did not serve the assignment contract.
By hand: The student supplied the assignment sources, student ID, and required templates; identified the intended outcome and constraints; compared the resulting brief with the teacher's specification; and approved the harness as the working contract for the task.

## 2026-10-06 — tests and implementation
Tool: OpenAI Codex desktop app, Node.js test runner, and Git diff.
Asked for: Follow a red-green test-driven loop to implement `cartTotal(items, options)` in plain JavaScript, keep production code in `src/cart.js`, keep contract tests in `test/cart.test.js`, add no dependencies, and expose every change for review.
Kept: Ten black-box tests in `test/cart.test.js` and the minimal implementation in `src/cart.js`. The preserved sequence is starter RED, expanded contract tests RED, implementation, then GREEN.
Changed: Codex expanded the single starter test into focused tests for the worked example, empty cart, shipping boundary, rounding, numeric return type, negative price, and invalid quantities. After the tests were recorded in a failing state, Codex replaced the stub with validation, subtotal, VAT, shipping, and final-rounding logic.
Rejected: `toFixed()`, intermediate rounding, validating only the first item, weakening tests to fit an implementation, adding unrelated input rules, and introducing helper packages were rejected because they would violate the brief or reduce the value of the tests.
By hand: The student directed the scope and acceptance criteria and later completed a personal review of the source, tests, and corresponding diffs. The student traced the worked example, checked every validation branch and shipping condition, and confirmed the purpose of each test; see the 2026-10-08 review entry.

## 2026-10-06 — submission evidence and handoff
Tool: OpenAI Codex desktop app.
Asked for: Organise the required submission evidence using the Classroom templates, map every rubric criterion to verifiable repository evidence, calculate a conservative self-score, and prepare—but not submit—the correctly named archive.
Kept: `AI-LOG.md` and `SELF_ASSESSMENT_REPORT.md`, with evidence referring to source files, tests, commits, and hosted CI rather than unsupported claims.
Changed: Codex drafted the six-field activity records, created one self-assessment row per rubric criterion, and separated repository evidence from actions that only the student could honestly perform.
Rejected: Invented manual work, unsupported marks, hidden credentials, automatic Classroom submission, and claims of personal review before that review occurred were rejected to keep the submission auditable.
By hand: The student supplied identity and template information, selected the evidence-based scoring approach, checked the required deliverables, and retained control of the final score, archive, and submission decision.

## 2026-10-06 — GitHub publication and hosted CI
Tool: OpenAI Codex desktop app, Git, GitHub, and GitHub Actions.
Asked for: Publish the reviewed `main` branch to the student's repository while preserving the official starter as `upstream`, avoid rewriting history, and verify the exact pushed commit with hosted CI.
Kept: The official starter remote as `upstream`, the student's repository as `origin`, the linear `main` history, and the existing CI workflow that runs the declared verification commands.
Changed: Codex configured `origin`, pushed `main`, inspected the GitHub Actions result, and updated the Harness evidence only after the hosted workflow was green.
Rejected: Force-pushing, modifying the official starter repository, publishing secrets, treating an unverified push as success, and submitting to Classroom automatically were rejected.
By hand: The student created `https://github.com/Phu-ITBoy/IA1-cartTotal`, confirmed the target repository and branch, reviewed the reported remote/CI state, and retained responsibility for the final submission.

## 2026-10-06 — template compliance and final package
Tool: OpenAI Codex desktop app.
Asked for: Compare the draft evidence files with the teacher's Classroom templates, preserve the required structure and relationships, and keep the self-assessment consistent with the available evidence.
Kept: The implementation, tests, rules file, brief, repository URL, evidence links, six required AI-log labels, and the conservative score of 97/100 used by the current self-assessment.
Changed: Codex aligned the AI-log labels and the self-assessment heading, identity line, table headings, criterion rows, and explanatory sections with the supplied templates.
Rejected: Claiming 100/100 without rubric evidence, inventing handwritten code, changing correct application code merely to create visible student activity, and omitting limitations from the self-assessment were rejected.
By hand: The student supplied the authoritative template text, checked that the requested sections were present, and later completed the full source-and-diff review recorded on 2026-10-08. The score remains the student's decision and must match the final ZIP filename.

## 2026-10-07 — final submission cleanup
Tool: OpenAI Codex desktop app and Git diff.
Asked for: Review the repository tree from a submission perspective, remove internal planning or handoff material that was not required by the assignment, and preserve all mandatory evidence.
Kept: The implementation, tests, rules file, brief, AI log, self-assessment, README, package configuration, `.gitignore`, and CI workflow.
Changed: Codex removed `STUDENT_TODO.md` and `docs/superpowers/` from the tracked repository and moved the personal review PDF outside the repository so those internal materials would not enter the submission archive.
Rejected: Rewriting published history, deleting required assignment artifacts, adding the personal review PDF to the repository, and broad cleanup unrelated to the submission were rejected.
By hand: The student reviewed the repository contents, decided which internal materials were unnecessary, approved their removal, and checked that the remaining tree matched the teacher's deliverable list.

## 2026-10-08 — personal diff review and understanding
Tool: OpenAI Codex desktop app, Git, and the repository files.
Asked for: Explain the assignment in Vietnamese, distinguish the teacher's README from the implementation brief, identify the files and diffs that required personal review, and test the student's understanding from requirements through implementation and evidence.
Kept: The existing `cartTotal` implementation, ten contract tests, harness, brief, and evidence structure because the review found them aligned with the stated assignment contract. No production or test change was needed merely to create the appearance of student authorship.
Changed: Codex translated and summarised `README.md` and `BRIEF.md`, explained the implementation and tests block by block, clarified the meaning of Git history versus a diff, and revised this log to record the completed personal review accurately.
Rejected: Claiming that the student personally wrote AI-generated source code, hiding Codex's contribution, treating green tests as a substitute for understanding, and changing correct code without a requirement were rejected.
By hand: The student personally read `README.md`, `BRIEF.md`, `AGENTS.md`, `src/cart.js`, `test/cart.test.js`, `package.json`, `.github/workflows/ci.yml`, `AI-LOG.md`, `SELF_ASSESSMENT_REPORT.md`, and the relevant commit diffs. The student traced the `467400` worked example, checked the empty-cart path, price and quantity validation, VAT and shipping calculations, final `Math.round()`, and the purpose of all ten tests. The student confirms understanding of the solution from the original requirement through the final verification and submission evidence, while accurately acknowledging that Codex generated the code changes.

## 2026-10-08 — identity correction and package refresh
Tool: OpenAI Codex desktop app, Git, and PowerShell ZIP verification.
Asked for: Investigate the incorrectly ordered student name shown in the self-assessment, correct it to `Văn Viết Minh Phú`, publish the correction, and rebuild the final submission archive.
Kept: Student ID 24127493, the evidence-based score of 97/100, all rubric claims, implementation files, tests, and repository history.
Changed: Codex searched the repository for both name forms, confirmed that the incorrect form occurred only in `SELF_ASSESSMENT_REPORT.md`, corrected that identity line, and refreshed the submission package after verification.
Rejected: Changing the score, altering application code, rewriting Git history, or editing unrelated evidence was rejected because the issue was limited to the student's name.
By hand: The student noticed the mismatch in the rendered report, supplied the authoritative full name `Văn Viết Minh Phú`, and requested the correction.

## 2026-10-08 — rubric audit and concept review
Tool: OpenAI Codex desktop app, Node.js test runner, Git, GitHub Actions, and PowerShell ZIP verification.
Asked for: Audit the repository and submission package against every rubric criterion, remove the unnecessary pending-Classroom-submission statement from the self-assessment, and explain the implementation and test concepts the student may be asked about.
Kept: The evidence-based score of 97/100, all five rubric claims, the implementation, ten contract tests, harness, brief, repository history, and honest disclosure of Codex's contribution.
Changed: Codex verified the complete rubric against the current repository, confirmed the local gates and hosted CI, removed only the sentence about the ZIP not yet being submitted, and refreshed the final package so it remains consistent with the repository.
Rejected: Inflating the score, hiding AI assistance, changing already-correct application code, or treating submission timing as work the student failed to complete was rejected.
By hand: The student identified that Classroom submission is their own deadline-controlled action, requested removal of that unnecessary statement, and asked for explanations of the validation, shipping, rounding, and test decisions so they can present the work themselves.

## 2026-10-10 — repository link in self-assessment
Tool: OpenAI Codex desktop app, Git, and PowerShell ZIP verification.
Asked for: Copy the authoritative repository URL from `README.md` into `SELF_ASSESSMENT_REPORT.md`, publish the documentation update to `main`, and rebuild the final submission archive.
Kept: The student identity, score of 97/100, rubric evidence, implementation, tests, and existing repository URL.
Changed: Codex added a `Repository:` line below the student identity in `SELF_ASSESSMENT_REPORT.md`, committed and pushed the documentation update to `main`, and refreshed the final submission archive after verification.
Rejected: Changing the URL, score, rubric claims, application code, or unrelated documentation was rejected because the requested change was only an evidence cross-reference.
By hand: The student noticed that the self-assessment did not display the repository URL, identified `README.md` as the authoritative source, requested that the same link be added for clarity, and explicitly requested publication and a fresh archive.
