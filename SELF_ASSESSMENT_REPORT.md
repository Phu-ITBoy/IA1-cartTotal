# Self-assessment — IA#1

Submitted by: 24127493 — Phú Văn Viết Minh

Total I claim: 97 / 100

| Criterion | Max | I claim | Evidence |
|---|---:|---:|---|
| Behaviour | 30 | 30 | `src/cart.js` implements subtotal, VAT, threshold shipping, empty-cart return, validation, and final `Math.round`. `npm test` passes the worked example `467400` and all specified behavior. Implementation commit: `4a042a1`. |
| Tests | 20 | 20 | `test/cart.test.js` contains 10 independent `node:test` cases: worked example, empty cart, exact threshold, below-threshold shipping, rounding, numeric result, later negative price, and zero/negative/fractional quantities. Test commit: `e0bc8c6`. |
| Harness | 20 | 20 | `AGENTS.md` states the stack, commands, project scope, and four "never" rules. `package.json` provides `npm test` and `npm run lint`; `.github/workflows/ci.yml` runs both on push. [GitHub Actions run 37480830740](https://github.com/Phu-ITBoy/IA1-cartTotal/actions/runs/37480830740) passed for commit `a54fd1a`. Harness commit: `be11f7a`. |
| Brief | 15 | 15 | `BRIEF.md` names the only implementation files, full contract, error cases, example, test expectations, and "no dependencies" constraint. Brief commit: `be11f7a`. |
| AI-LOG.md | 15 | 12 | `AI-LOG.md` has a dated entry per assistant-aided task and uses the exact `Tool`, `Asked for`, `Kept`, `Changed`, `Rejected`, and `By hand` fields. It is specific and honest, but the student's personal diff review is still incomplete. |

## What I did not manage

I have not yet completed the required personal review of every diff or practiced explaining each validation, calculation, and test decision. I did not add handwritten source-code changes after the Codex-assisted implementation, and I have not submitted the ZIP to Google Classroom.

## What I would do differently

I would review each small TDD commit immediately, explain every assertion and branch aloud, and write the AI-LOG entry while that review is fresh. I would also reserve time to re-run all gates after my own review and make sure the final score and ZIP filename still match.
