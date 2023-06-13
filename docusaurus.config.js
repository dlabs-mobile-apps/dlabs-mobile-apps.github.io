// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Dlabs Mobile Dev Team",
  tagline: "Welcome to dlabs mobile dev team",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "dlabs-mobile-apps", // Usually your GitHub org/user name.
  projectName: "dlabs-mobile-apps.github.io", // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "gh-pages",

  url: "https://dlabs-mobile-apps.github.io",
  baseUrl: "/",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "docs",
          path: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "design-system-docs",
        path: "design-system-docs",
        routeBasePath: "design-system-docs",
        sidebarPath: require.resolve("./sidebars.js"),
        sidebarCollapsed: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "feedback",
        path: "feedback",
        routeBasePath: "feedback",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Mobi",
        logo: {
          alt: "Mobi Logo",
          src: "img/mobi.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            to: "/design-system-docs/intro",
            position: "left",
            label: "Design System",
            activeBaseRegex: `/design-system-docs/`,
          },
          {
            to: "/feedback/form",
            position: "left",
            label: "Feedback",
            activeBaseRegex: `/feedback/`,
          },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `© ${new Date().getFullYear()} Dlabs Mobile Dev Team`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
