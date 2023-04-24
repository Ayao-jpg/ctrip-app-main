// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-px-to-viewport': {
      unitToConvert: 'px',
      viewportWidth: 375,
      unitPrecision: 5,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      include: undefined,
      landscape: false,
      landscapeUnit: 'vw',
      landscapeWidth: 568,
      exclude: [/^(?!.*node_modules\/react-vant)/]
    }
  }
};
