module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-storysource",
      loaderOptions: {
        prettierConfig: { printWidth: 80, singleQuote: false },
      }
    },
    {
      name: '@storybook/addon-docs',
      options: { configureJSX: true },
    },
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          modules: true
        }
      } 
    }
  ]
}