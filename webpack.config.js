const path = require('path');

const merge = require('webpack-merge');
const webpack = require('webpack');

const NpmInstallPlugin = require('npm-install-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, './public/client'),
  build: path.join(__dirname, './build'),
  style: path.join(__dirname, './public/client/styles')
};

//to configure babel-preset-react hmre
//To activate HOT Loading for development:
/*
Everytime you perform a modification, browser updates with a flash.
This means our application loses state.
It will become annoying to manipulate UI back to the sate to test seomthing.
To let the client side catch the changes and patch the code, need to use
babel-plugin-react-transform to enable hot-loading.
react-transform-hmr will swap React components one by one as they change without forcing a full refresh.
babel-preset-react-hmre is used to allow HMR for React Components 
*/
process.env.BABEL_ENV = TARGET;

const common = {
  // Entry accepts a path or an object of entries. We'll be using the
  // latter form given it's convenient with more complex configurations.
  entry: {
    app: PATHS.app
  },
  watch: true,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
    // publicPath: '/'
  },
  module: {
    preloaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: PATHS.app
      }
    ],
    loaders: [
      // { 
      //   test: /\.css$/, 
      //   loaders: ["style", "css"]
      // },
      {
        // Test expects a RegExp! Note the slashes!
        test: /\.css$/,
        //css?modules enables module spec for css-loader
        loaders: ['style','css?modules'],
        // Include accepts either a path or an array of paths.
        include: PATHS.styles
      },
       // Set up jsx. This accepts js too thanks to RegExp
      {
        test: /\.jsx?$/,
        // Enable caching for improved performance during development
        // It uses default OS directory by default. If you need something
        // more custom, pass a path to it. I.e., babel?cacheDirectory=<path>
        loaders: ['babel?cacheDirectory'],
        //load babel-loader for ES6 module definition based code to turn into ES5 bundles
        // Parse only app files! Without this it will go through entire project.
        // In addition to being slow, that will most likely result in an error.
        include: PATHS.app
      }
    ]
  }
};


// Default configuration. We will return this if
// Webpack is called outside of npm.
if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devServer: {
      contentBase: PATHS.build,

      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env so this is easy to customize.
      //
      // If you use Vagrant or Cloud9, set
      // host: process.env.HOST || '0.0.0.0';
      //
      // 0.0.0.0 is available to all network devices unlike default
      // localhost
      host: process.env.HOST,
      port: process.env.PORT || 3450
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new NpmInstallPlugin({
        save: true// --save
      })
    ],
    devtool: 'eval-source-map'
  });
}

if(TARGET === 'build') {
  module.exports = merge(common, {});
}




