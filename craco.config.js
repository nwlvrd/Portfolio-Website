module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    }
  },
  webpack: {
    configure: (webpackConfig) => {
      // Target the Babel loader rule
      const babelRule = webpackConfig.module.rules.find(rule =>
        rule.oneOf?.some(r => r.loader?.includes('babel-loader'))
      );
      
      if (babelRule) {
        // Include react-icons in Babel transpilation
        babelRule.exclude = /node_modules\/(?!(react-icons)\/).*/;
      }
      
      return webpackConfig;
    },
  },
};