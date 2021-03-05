let environment = {
  plugins: [
    ["postcss-assets", {}],
    ["postcss-inline-svg", {}],
    ["postcss-preset-env", {}],
    ["cssnano", {}],
    //   [
    //   "@fullhuman/postcss-purgecss",
    //   {
    //     content: [
    //       "./pages/**/*.{js,jsx,ts,tsx}",
    //       "./components/**/*.{js,jsx,ts,tsx}",
    //     ],
    //     defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    //   },
    // ]
  ],
};

// Only run PurgeCSS in production (you can also add staging here)
if (process.env.MODE === "production") {
  environment.plugins.push([
    "@fullhuman/postcss-purgecss",
    {
      content: [
        "./pages/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
      ],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    },
  ]);
}
module.exports = environment;