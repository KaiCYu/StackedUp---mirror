const path = require('path');

const SRC_DIR = path.join(__dirname, '/app/src');

const DIST_DIR = path.join(__dirname, '/app/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  resolve: {
    extensions: ['.js', '.json', '.css', '.jsx'],
    alias: {
        'jquery-ui': 'jquery-ui-dist/jquery-ui.js'
    }
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
};
