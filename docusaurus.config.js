const {themes} = require('prism-react-renderer');

const config = {
  title: 'Daily Gadget Finds',
  tagline: 'Smarter Mobile Accessories. Better Daily Experience.',
  favicon: 'img/favicon.ico',
  url: 'https://dailygadgetfinds.com',
  baseUrl: '/',
  organizationName: 'dailygadgetfinds',
  projectName: 'dailygadgetfinds',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {defaultLocale: 'en', locales: ['en']},
  presets: [
    ['classic', {
      docs: {sidebarPath: './sidebars.js', editUrl: 'https://github.com/dailygadgetfinds/site/tree/main/', showLastUpdateTime: true},
      blog: {showReadingTime: true, editUrl: 'https://github.com/dailygadgetfinds/site/tree/main/', authorsMapPath: 'authors.yml', tagsBasePath: 'tags', postsPerPage: 9, blogSidebarTitle: 'Recent Posts', blogSidebarCount: 5},
      theme: {customCss: './src/css/custom.css'}
    }]
  ],
  themeConfig: {
    image: 'img/og-image.jpg',
    navbar: {
      title: 'Daily Gadget Finds',
      logo: {alt: 'Daily Gadget Finds Logo', src: 'img/logo.svg'},
      items: [
        {to: '/blog', label: 'Reviews', position: 'left'},
        {type: 'docSidebar', sidebarId: 'defaultSidebar', position: 'left', label: 'Categories'},
        {to: '/blog/tags', label: 'Tags', position: 'left'},
        {to: '/blog/tags/buying-guide', label: 'Buying Guides', position: 'left'},
        {type: 'search', position: 'right'},
        {type: 'html', position: 'right', value: '<span class="navbar__cta"><a href="/blog">Explore Reviews</a></span>'},
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {title: 'Categories', items: [
          {label: 'Chargers', to: '/docs/categories/chargers'},
          {label: 'Power Banks', to: '/docs/categories/power-banks'},
          {label: 'Earbuds', to: '/docs/categories/earbuds'},
          {label: 'Cases', to: '/docs/categories/cases'},
          {label: 'Buying Guides', to: '/docs/categories/buying-guides'},
        ]},
        {title: 'Top Picks', items: [
          {label: 'Best Power Banks', to: '/blog/best-power-banks-under-1500'},
          {label: 'Fast Chargers', to: '/blog/top-fast-chargers'},
          {label: 'Daily Earbuds', to: '/blog/best-earbuds-for-daily-use'},
          {label: 'Budget Finds', to: '/blog/budget-mobile-gadgets'},
        ]},
        {title: 'About', items: [
          {label: 'About Us', to: '/about'},
          {label: 'Contact', to: '/contact'},
          {label: 'Privacy Policy', to: '/privacy'},
          {label: 'Affiliate Disclosure', to: '/affiliate-disclosure'},
        ]},
      ],
      copyright: `© ${new Date().getFullYear()} Daily Gadget Finds. All rights reserved. This site contains affiliate links.`,
    },
    prism: {theme: themes.github, darkTheme: themes.dracula},
    metadata: [
      {name: 'keywords', content: 'mobile accessories, chargers, power banks, earbuds, phone cases, buying guides, reviews, affiliate'},
      {name: 'description', content: 'Discover tested mobile accessories, practical buying guides, comparisons, and smart recommendations for everyday smartphone users.'},
    ],
    algolia: {appId: 'YOUR_APP_ID', apiKey: 'YOUR_SEARCH_API_KEY', indexName: 'dailygadgetfinds', contextualSearch: true},
    announcementBar: {
      id: 'newsletter_signup',
      content: '💡 Get the latest accessory reviews delivered to your inbox. <a href="#newsletter">Subscribe now</a>',
      backgroundColor: '#2563EB',
      textColor: '#FFFFFF',
      isCloseable: true,
    },
  },
  plugins: [],
};
module.exports = config;