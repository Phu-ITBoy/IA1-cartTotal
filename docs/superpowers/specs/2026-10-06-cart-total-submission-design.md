# IA#1 cartTotal Submission Design

## Purpose

Prepare the strongest locally verifiable submission package for student
`24127493` from the official `wad-cart-starter` repository. The finished work
must implement the specified cart calculation, include focused tests and a
project-specific harness, document the assistant-assisted workflow honestly,
and make every remaining student-only action explicit.

## Sources of truth

The implementation is governed by the starter `README.md`, session 2 slides,
and the four-page `IA#1 - cartTotal with a harness` rubric stored next to this
repository. If prose added during the work conflicts with those sources, the
starter contract and rubric take precedence.

## Functional contract

`src/cart.js` exports `cartTotal(items, options)` as plain JavaScript with no
runtime or development dependencies.

- `items` contains objects with `name`, `price`, and `qty`.
- `options` contains `vatRate`, `freeShipFrom`, and `shipFee`.
- The subtotal is the sum of `price * qty` for every item.
- VAT is `subtotal * vatRate`.
- Shipping is zero when `subtotal >= freeShipFrom`; otherwise it is `shipFee`.
- The final value is `Math.round(subtotal + VAT + shipping)` and remains a
  JavaScript number.
- An empty cart returns `0` without VAT or shipping.
- A negative `price` throws `RangeError`.
- A `qty` that is zero, negative, fractional, or otherwise not a positive
  integer throws `RangeError`.
- The worked example returns `467400`.

Validation is limited to cases required by the assignment. The implementation
will not invent unrelated validation behavior for item names, option types, or
positive non-integer prices.

## Tests and development sequence

Work follows a red-green-review sequence:

1. Run the starter test unchanged and retain the failing result in the work
   record.
2. Add independent `node:test` cases for the worked example, empty cart,
   exact free-shipping threshold, negative price, zero quantity, negative
   quantity, and fractional quantity. Each test should fail for one contract
   violation.
3. Confirm the expanded tests fail before implementation.
4. Implement the smallest clear `cartTotal` that satisfies the contract.
5. Run the complete test and lint gates and inspect the final diff.

The tests assert observable results and error types, not internal algorithms.

## Harness and continuous integration

The repository will contain:

- `AGENTS.md` as the project-specific rules file, including the stack,
  permitted commands, required gates, scope restrictions, and at least one
  explicit `never` rule.
- `npm test` as the behavior gate.
- `npm run lint` using Node's built-in `--check`, so the lint gate adds no
  dependency.
- `.github/workflows/ci.yml` to run lint and tests on pushes and pull requests
  with a maintained Node.js release.

The workflow file can be validated locally for content, but a green hosted CI
run cannot be claimed until the student pushes the repository to GitHub.

## Submission documents

- `BRIEF.md` records the implementation brief before product code is changed.
  It names the allowed files, contract, error cases, test expectations, and
  the no-dependencies constraint.
- `AI-LOG.md` truthfully identifies Codex, the student's request, generated
  files, review findings, rejected alternatives, and any work performed by
  hand. It must not claim that the student reviewed or edited something unless
  the student actually did so.
- `SELF_ASSESSMENT_REPORT.md` contains one evidence-backed row per rubric
  criterion and a short section describing what was not completed.
- `STUDENT_TODO.md` lists the actions that require the student's own account,
  judgment, or submission authority.

## Git history

The starter commit remains intact. Subsequent commits separate the auditable
stages: design/brief/harness, failing specification tests, implementation, and
submission documentation. The existing starter remote will be renamed
`upstream`; the student will later add a personal repository as `origin`.

## Packaging and self-assessment

A zip will be produced only after local verification. Its name is
`24127493_<total>.zip`, where `<total>` exactly matches the report. The score
will be conservative:

- Full locally verified behavior, tests, brief, and rules/gates may receive
  their demonstrated rubric points.
- Hosted CI points are not claimed as verified until GitHub Actions runs.
- AI-log points that depend on personal review or handwritten changes are not
  fabricated.

The final zip excludes transient render output and generated dependencies. It
includes the working repository files and submission documents. GitHub push,
hosted CI verification, personal review, final AI-log confirmation, and the
Classroom upload remain student actions.

## Completion criteria

Local work is complete when all planned files exist, `npm test` and
`npm run lint` pass from a clean checkout, the working tree contains only
intentional changes, the self-assessment total matches the zip name, and every
unverifiable external action is present in `STUDENT_TODO.md`.
