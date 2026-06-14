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
            'categories/chargers/intro',
            'categories/chargers/usb-c',
            'categories/chargers/wireless',
          ],
        },
        {
          type: 'category',
          label: 'Power Banks',
          items: [
            'categories/power-banks/intro',
            'categories/power-banks/portable',
            'categories/power-banks/high-capacity',
          ],
        },
        {
          type: 'category',
          label: 'Earbuds',
          items: [
            'categories/earbuds/intro',
            'categories/earbuds/true-wireless',
            'categories/earbuds/budget',
          ],
        },
        {
          type: 'category',
          label: 'Cases',
          items: [
            'categories/cases/intro',
            'categories/cases/protective',
            'categories/cases/slim',
          ],
        },
        {
          type: 'category',
          label: 'Buying Guides',
          items: [
            'categories/buying-guides/how-to-choose',
            'categories/buying-guides/what-to-look-for',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;