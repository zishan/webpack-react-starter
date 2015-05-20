var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',

  entry: './index',

  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/'
  },

  resolve: {
    modulesDirectories: ['node_modules', '../src'],
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  },

  plugins: [
    new ExtractTextPlugin('index.css'),
    new webpack.NormalModuleReplacementPlugin(
      /^webpack-react-starter$/,
      '../src/index'
    ),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ]
};