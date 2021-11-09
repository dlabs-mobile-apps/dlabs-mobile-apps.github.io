# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

Docusaurus is essentially a set of npm packages.

Requirements​
- Node.js version >= 14 or above (which can be checked by running node -v). You can use nvm for managing multiple Node versions on a single machine installed
- Yarn version >= 1.5 (which can be checked by running yarn --version). Yarn is a performant package manager for JavaScript and replaces the npm client. It is not strictly necessary but highly encouraged.

### Installation

```bash
$ yarn
```

### Local Development

```bash
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```bash
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
