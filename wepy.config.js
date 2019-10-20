const
  path = require('path'),
  prod = process.env.NODE_ENV === 'production'

module.exports = {
  wpyExt: '.wpy',
  cliLogs: !prod,
  build: {
  },
  resolve: {
    alias: {
      '@': path.resolve('.')
    },
    aliasFields: ['wepy', 'weapp'],
    modules: ['node_modules']
  },
  static: 'static',
  compilers: {
    less: {
      compress: prod
    },
    babel: {
      sourceMap: true,
      presets: [
        '@babel/preset-env'
      ],
      plugins: [
        '@wepy/babel-plugin-import-regenerator'
      ]
    }
  },
  plugins: [],
  appConfig: {
    noPromiseAPI: ['createSelectorQuery']
  }
}
