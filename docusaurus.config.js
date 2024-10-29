// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Formsflow Installation',
  tagline: 'Formsflow inatsllation',
  favicon: 'img/favicon.png',

  url: 'https://sethu-aot.github.io',
  baseUrl: '/formsflow-documentation/', // Base URL for your project

  organizationName: 'sethu-aot', // GitHub org/user name
  projectName: 'formsflow-documentation', // repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve docs at the root URL
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.png',
      navbar: {
        logo: {
          alt: 'formsflow Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/AOT-Technologies/forms-flow-ai-deployment',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Installation',
                href: 'https://aot-technologies.github.io/forms-flow-installation-eks/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/formsflow.ai',
              },
              {
                label: 'Camunda Community Hub',
                href: 'https://github.com/camunda-community-hub',
              },
              {
                label: 'Keycloak Group',
                href: 'https://keycloak.discourse.group/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/AOT-Technologies/forms-flow-ai-deployment',
              },
            ],
          },
        ],
        copyright: `Copyright © formsflow.ai ${new Date().getFullYear()} All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
