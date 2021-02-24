const { VueLoaderPlugin } = require('vue-loader')

const path = require('path')

const entry = path.resolve(__dirname, './packages/oy/index.ts')

module.exports = {
  mode: 'production',
  entry,
  output: {
    path: path.resolve(__dirname, './lib'),
    publicPath: '/',
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'Oy',
    umdNamedDefine: true,
    globalObject: 'typeof self !== \'undefined\' ? self : this',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  externals: [
    {
      vue: {
        root: 'Vue',
        commonjs: 'vue',
        commonjs2: 'vue',
      },
    },
  ],
  plugins: [
    new VueLoaderPlugin()
  ]
}