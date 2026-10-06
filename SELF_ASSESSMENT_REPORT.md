# Self-assessment - IA#1

Submitted by: **24127493 - Phú Văn Viết Minh**

Total I claim: **97 / 100**

| Rubric criterion | Maximum | Claimed | Evidence |
| --- | ---: | ---: | --- |
| Behaviour | 30 | 30 | `src/cart.js` implements subtotal, VAT, threshold shipping, empty-cart return, validation, and final `Math.round`. `npm test` passes the worked example `467400` and every specified behavior. Implementation commit: `4a042a1`. |
| Tests | 20 | 20 | `test/cart.test.js` has 10 independent `node:test` cases covering the worked example, empty cart, exact threshold, below-threshold shipping, rounding, numeric result, a later negative price, and zero/negative/fractional quantities. The tests first failed against the stub and then passed. Test commit: `e0bc8c6`. |
| Harness | 20 | 20 | `AGENTS.md` defines constraints, `package.json` provides `npm test` and `npm run lint`, and `.github/workflows/ci.yml` defines the same gates on Node.js 24. Local gates pass, and [GitHub Actions run 37479392645](https://github.com/Phu-ITBoy/IA1-cartTotal/actions/runs/37479392645) completed successfully for commit `3c3557e` on the personal repository. Harness commit: `be11f7a`. |
| Brief | 15 | 15 | `BRIEF.md` states the allowed files, complete contract, worked example, test expectations, and no-dependency constraint. Brief commit: `be11f7a`. |
| `AI-LOG.md` | 15 | 12 | `AI-LOG.md` contains separate dated entries with the required Tool, Asked for, Kept, Changed, Rejected, and By hand fields. It discloses Codex's work and does not invent manual student edits. The remaining personal review is explicitly recorded as incomplete. |
| **Total** | **100** | **97** | **97/100**, supported by the evidence above. |

## What I did not manage

- I have not yet personally reviewed every diff or practiced explaining each validation, calculation, and test decision.
- I did not add any handwritten source-code changes after the Codex-assisted implementation.
- I have not submitted the ZIP to Google Classroom.

## What I would do differently

- I would review each small TDD commit immediately, explain the reason for every assertion and branch aloud, and record any personal corrections in `AI-LOG.md` while they are fresh.
- I would leave time to re-run all gates after my own review and make the final score and ZIP filename match any updated evidence.
