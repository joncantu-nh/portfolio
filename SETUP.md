# First-time setup

This archive now contains the complete Angular project scaffold: `package.json`,
`package-lock.json`, `angular.json`, TypeScript configs, Karma configuration,
`.nvmrc`, `.gitignore`, source, tests, styles, and public assets.

## Important note about the lockfile

The included `package-lock.json` records the exact direct dependency contract but
cannot contain a trustworthy resolved transitive dependency graph until npm has
access to the registry. On the first run, use `npm install` (not `npm ci`) so npm
resolves the dependency tree and rewrites `package-lock.json` completely. Commit
that regenerated lockfile. After that, use `npm ci` on fresh clones.

## First run

```bash
cd portfolio-angular-complete
nvm use
npm install
npm run build
npm run test:ci
npm start
```

Or run:

```bash
./scripts/bootstrap.sh
```

After `npm install` succeeds, commit the resulting complete `package-lock.json`.
