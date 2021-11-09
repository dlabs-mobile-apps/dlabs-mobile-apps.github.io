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
  
  organizationName: "dlabs-mobile-apps", // Usually your GitHub org/user name.
  projectName: "dlabs-mobile-apps.github.io", // Usually your repo name.
  url: "https://dlabs-mobile-apps.github.io",
  baseUrl: "/",
  trailingSlash: false,
  deploymentBranch: "main",

  presets: [
    [
      "@docusaurus/preset-classic",
      {
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
      },
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
      },
    ],
  ],

  themeConfig: {
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
      ],
    },
    footer: {
      style: "dark",
      copyright: `© ${new Date().getFullYear()} Dlabs Mobile Dev Team`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
