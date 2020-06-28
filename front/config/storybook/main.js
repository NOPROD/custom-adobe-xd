module.exports = {
  stories: ["../../src/**/*.stories.(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-actions",
    {
      name: "@storybook/addon-docs",
      options: {
        babelOptions: {
          presets: [
            [
              "@vue/cli-plugin-babel/preset",
              {
                jsx: false,
              },
            ],
          ],
        },
      },
    },
    "@storybook/addon-knobs",
    "@storybook/addon-links",
    "@storybook/addon-notes",
  ],
};

// todo
//"@storybook/addon-viewport/register",
//@storybook/addon-a11y/register
// https://github.com/storybookjs/storybook/tree/master/addons/storyshots/storyshots-puppeteer
// @storybook/addon-storyshots
