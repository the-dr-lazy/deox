# Deox Contributing Guidelines

## Introduction

First off, thank you for considering contributing to Deox! It's people like you that make the open source community such a great community! 😊

Please note we have a [code of conduct](CODE_OF_CONDUCT.md), please follow it in all your interactions with the project.
When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

**Why you should read these guidelines ?**
Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue, assessing changes, and helping you finalize your pull requests.

**What kinds of contributions we are looking for ?**
Deox is an open source project and we love to receive contributions from our community — you! There are many ways to contribute:

- **Q/A**: file bug reports, the more details you can give the better (i.e. REPL-links or repos that demonstrate the specific issue)
- **Marketing**: writing blog posts, howto's, printing stickers, ...
- **Community**: presenting the project at meetups, organizing a dedicated meetup for the local community, ...
- **Code**: take a look at the open issues. Even if you can't write code, commenting on them, showing that you care about a given issue matters. It helps us triage them.

## Your First Contribution

**Working on your first Pull Request?** You can learn how from this _free_ series, [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github).

**Unsure where to begin contributing to Deox?** You can start by looking through these [good first issue][good-first-issue] and [help wanted][help-wanted] issues.

At this point, you're ready to make your changes! Feel free to ask for help; **everyone is a beginner at first**.

### Setup

1. Create your own fork of repository.
2. Git clone the [Deox repository](https://github.com/thebordmann/deox).
3. from the root of repository run following command to install dependencies required for development:

   ```bash
   # YARN
   yarn

   # NPM
   npm install
   ```

4. Do the change in the repository.
5. If you like the change and think the project could use it, make a pull request.

### Building

Run the following command to build Deox project:

```bash
# YARN
yarn run build

# NPM
npm run build
```

The above command will create a directory called `/dist` in the root of repository that contains all types of builds.

### Testing Your Changes

To perform an on-off test using:

```bash
# YARN
yarn run test && yarn run test-dts

# NPM
npm run test && npm run test-dts
```

Or to automatically re-test on every change are made, use:

```bash
# YARN
yarn run test:watch

# NPM
npm run test:watch
```

### Linting

To run linter, use:

```bash
# YARN
yarn run lint

# NPM
npm run lint
```

## Feature Request / Bug Report

To issue a feature request or a bug report just follow the related template.

## License

Deox is [MIT licensed](LICENSE).
