// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Base Documentation Site',
  tagline: 'Welcome to the documentation site! Follow the Introduction page below to understand how to navigate the documentation and manage content effectively.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'QuangLiem59', // Usually your GitHub org/user name.
  projectName: 'base-documentation-site', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: ({ docPath }) => {
            const firstSlashIndex = docPath.indexOf('/');
            if (firstSlashIndex === -1) {
              return 'https://docs.example.com/admin';
            }

            const collection = docPath.substring(0, firstSlashIndex);
            const entry = docPath.substring(firstSlashIndex);

            return `https://docs.example.com/admin/#/collections/${collection}/entries${entry.replace('.md', '')}`;
          }
        },
        blog: {
          path: 'blog',
          routeBasePath: 'blog',
          showReadingTime: true,
          authorsMapPath: 'authors.json',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: ({ blogPath }) => {
            return `https://docs.example.com/admin/#/collections/blog/entries/${blogPath.replace('.md', '')}`;
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
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
      // Replace with your project's social card
      image: 'img/avatarStatic.png',
      navbar: {
        title: 'Documentation site',
        logo: {
          alt: 'Logo',
          src: 'img/avatarStatic.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'documentSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'docSidebar',
            sidebarId: 'ruleSidebar',
            position: 'left',
            label: 'Rule',
          },
          {
            type: 'docSidebar',
            sidebarId: 'beSidebar',
            position: 'left',
            label: 'Back End',
          },
          {
            type: 'docSidebar',
            sidebarId: 'feSidebar',
            position: 'left',
            label: 'Front End',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          // { to: '/installations', label: 'Installations', position: 'left' },
          // {
          //   type: "dropdown",
          //   label: "Dropdown",
          //   position: "left",
          //   items: [
          //     {
          //       type: 'docSidebar',
          //       sidebarId: 'documentSidebar',
          //       label: 'Tutorial',
          //     },
          //   ],
          // },
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
          {
            href: 'https://github.com/QuangLiem59',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'custom-AuthButtons',
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
                label: 'Introduction',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Facebook',
                href: 'https://facebook.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/QuangLiem59',
              },
            ],
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  plugins: [
    [
      'docusaurus-plugin-dotenv',
      {
        path: "./.env",
        systemvars: true,
      }
    ],
    // [
    //   '@docusaurus/plugin-content-blog',
    //   {
    //     id: 'installations',
    //     routeBasePath: 'installations',
    //     path: './installations',
    //     blogTitle: 'Installations',
    //     blogDescription: 'Latest installations and updates',
    //     postsPerPage: 5,
    //     blogSidebarTitle: 'Recent posts',
    //     blogSidebarCount: 'ALL',
    //   },
    // ],
  ],
};

export default config;
