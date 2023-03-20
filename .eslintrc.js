module.exports = {
  setting: {
    "import/resolver": {
      alias: {
        map: [[
          '@', './src'
        ], ['@pages', './src/pages'], [
          '@components', './src/components'
        ], ['@redux', './src/redux'], ['@types', './src/types'], ['@request', './src/request'], ['@utils', './src/utils']],
        extensions: ['.jsx', '.tsx', '.ts', '.js', '.scss']
      }
    },

  }
}
