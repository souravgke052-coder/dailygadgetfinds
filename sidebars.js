/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  defaultSidebar: [
    {
      type: 'category',
      label: 'Categories',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Chargers',
          items: [
            'categories/chargers',
          ],
        },
        {
          type: 'category',
          label: 'Power Banks',
          items: [
            'categories/power-banks',
          ],
        },
        {
          type: 'category',
          label: 'Earbuds',
          items: [
            'categories/earbuds',
          ],
        },
        {
          type: 'category',
          label: 'Cases',
          items: [
            'categories/cases',
          ],
        },
        {
          type: 'category',
          label: 'Buying Guides',
          items: [
            'categories/buying-guides',
          ],
        },
        'intro',
      ],
    },
  ],
};

module.exports = sidebars;