# Student handoff checklist

The implementation and local evidence are prepared. Complete these steps yourself before submission so every claim remains honest.

## 1. Read and understand every change

From this repository, run:

```powershell
git log --oneline --reverse 56048c0..HEAD
git diff 56048c0..HEAD
npm test
npm run lint
```

Be ready to explain:

- why an empty cart returns before VAT and shipping;
- why every item is validated;
- why quantity uses `Number.isInteger(item.qty)` and must be positive;
- why shipping compares the completed subtotal with `freeShipFrom`;
- why only the final numeric result uses `Math.round()`;
- what each of the 10 tests proves.

If you make any correction yourself, test it and record it accurately in `AI-LOG.md`.

## 2. Create and connect your personal GitHub repository

The official starter is preserved as `upstream`. Confirm it:

```powershell
git remote -v
```

On GitHub, create a new empty repository under your own account. Do not initialize it with a README, license, or `.gitignore`. Then run, replacing the placeholder with your repository URL:

```powershell
git remote add origin <YOUR_REPOSITORY_URL>
git remote -v
git push -u origin main
```

Do not push changes back to `upstream`.

## 3. Verify hosted CI

Open the **Actions** tab of your personal repository and confirm the latest `CI` workflow is green. If it fails, inspect the log, fix the cause, run `npm test` and `npm run lint` locally, commit, and push again.

Only after a green hosted run may you increase the Harness claim from 16/20 to 20/20.

## 4. Update the honest evidence

After your personal review, update `AI-LOG.md` with what you actually reviewed, changed, rejected, or completed by hand. Update `SELF_ASSESSMENT_REPORT.md` only when new evidence supports a different score.

Then commit the reviewed documents:

```powershell
git add AI-LOG.md SELF_ASSESSMENT_REPORT.md STUDENT_TODO.md
git commit -m "docs: record student review and final evidence"
git push
```

If no document changed, do not create an empty commit.

## 5. Re-run checks and regenerate the ZIP if anything changed

```powershell
npm test
npm run lint
git status --short
git archive --format=zip --output ../24127493_<FINAL_SCORE>.zip HEAD
tar -tf ../24127493_<FINAL_SCORE>.zip
```

Replace `<FINAL_SCORE>` with the total shown in `SELF_ASSESSMENT_REPORT.md`. The report total and filename must match exactly. Check that the archive contains the repository files, `BRIEF.md`, `AI-LOG.md`, and `SELF_ASSESSMENT_REPORT.md`, but not `.git`, `node_modules`, secrets, or unrelated Week 2 files.

## 6. Submit personally

Upload only the final `24127493_<FINAL_SCORE>.zip` to the IA#1 assignment in Google Classroom. Re-open the attachment before pressing **Turn in**, verify the filename and contents, and keep a copy of the submission confirmation.
