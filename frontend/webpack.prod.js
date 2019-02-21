const merge = require('webpack-merge');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require ('html-webpack-plugin');
const CopyWebpackPlugin = require ('copy-webpack-plugin');
const path = require('path');
const common = require('./webpack.common.js'); // Carries forward settings from this location.


const paths = {
  PUBLIC: path.resolve(__dirname, 'public'),
  DIST: path.resolve(__dirname, 'dist'),
  ADD: path.resolve(__dirname, 'public/webpack-add'),
};

module.exports = merge(common, {
  // devtool: source-map is good for benchmarking the websites. It adds considerable size to the build. Turn off for full prod.
  // Leave as '' for max speed. See for more details/options: https://webpack.js.org/configuration/devtool/
  devtool: '',
  plugins: [
    // Shrinks down the spaces and file size
    new UglifyJSPlugin({
    }),
    // Removes dist folder
    new CleanWebpackPlugin(['dist']),
    // This will turn off the additional logging and testing of the included libraries. Very good at reducing bundle size
    // especially using react.
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'API_URL' : JSON.stringify('https://api.rapidtask.com/')
      }
    }),
    new WorkboxPlugin({
     // these options encourage the ServiceWorkers to get in there fast
     // and not allow any straggling "old" SWs to hang around
    clientsClaim: true,
    skipWaiting: true,
    }),
    new HtmlWebpackPlugin({
      // Tell what folder we are templating for injection of code on build.
      template: path.join(paths.PUBLIC, 'index.html'),

      // Injects the following into the index.html
      favicon: path.join(paths.PUBLIC, 'favicon.ico'),
      // Fullstory analytics was recording data even on local environment. SO this was placed to only show on production build
      fullStoryAnalytics:
            `window['_fs_debug'] = false;
            window['_fs_host'] = 'fullstory.com';
            window['_fs_org'] = 'B8FYV';
            window['_fs_namespace'] = 'FS';
            (function(m,n,e,t,l,o,g,y){
                if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
                g=m[e]=function(a,b){g.q?g.q.push([a,b]):g._api(a,b);};g.q=[];
                o=n.createElement(t);o.async=1;o.src='https://'+_fs_host+'/s/fs.js';
                y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
                g.identify=function(i,v){g(l,{uid:i});if(v)g(l,v)};g.setUserVars=function(v){g(l,v)};
                y="rec";g.shutdown=function(i,v){g(y,!1)};g.restart=function(i,v){g(y,!0)};
                g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
                g.clearUserCookie=function(){};
            })(window,document,window['_fs_namespace'],'script','user');`,
    }),
    // Copies the items in the folder into the dist for production.
    new CopyWebpackPlugin([
      {
        from: path.join(paths.ADD),
        to: path.join(paths.DIST),
      },
    ]),
  ]
});