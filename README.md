# NPM Template

This project isn't meant to help quickly start an npm project with some default structure and tools

## How To

## Ideas

- [x] Directory Structure?
  - src
  - bin
  - spec (so they appear before src in PRs)
- [ ] Unit Testing?
  - Mocha? (seems like other repos chose this over jasmine)
    - custom reporter
      - show filepath in output? Force this with linting test description
      - show speed statistics
      - coverage?
  - Require Format:

```
it(
  'should be formatted like this',
  () => {
    // testing code here
  }
);
```

- [..] Linting?
  - Prettier First then ESLint
  - Advanced Ideas:
    - Require Spec File for each js file (unless includes header)
    - Require test description format
      - starts with should
      - top level describe that matches file name
    - Error on require() (unless comment provided) -- ONLY FOR TYPESCRIPT?
    - Error/Warning on moment use without tz() (unless comment provided) -- ONLY IF MOMENT INCLUDED
- [ ] Copy/Paste detection
  - Basta?
  - Simeon?
- [ ] Documentation? EsDoc?
- [ ] benchmark.js
- [ ] Packages?
- [ ] Doctor Script?
  - check dependencies installed
- [ ] Build Script?
  - run Doctor script
- [ ] Install Script
  - check if auto-loader installed, error + give instructions if not
  - Install dependencies
  - Install dev dependencies if prompted
- [ ] Wireit? https://github.com/google/wireit

## Questions

> Can we use YAML for package.json (so we can have comments)?

It seems like we would need to use another npm package to do this: https://www.npmjs.com/package/package-yaml

> Can we error if the current node version doesn't match the package.json "engines"?

I think we can if we use [npm-autoloader](https://www.npmjs.com/package/npm-autoloader) (this is a dependency of package-yaml)

> What else can we add to package.json

From: https://docs.npmjs.com/cli/v7/configuring-npm/package-json

- "browser" vs "main" for web vs node
- "files" array of file patterns describing entries when installed as dependency
- "funding"?
