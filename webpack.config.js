const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:'./src/index.js',
    output:{
        //path: path.resolve(__dirname, 'public'),
        //filename:'bundle.js',
       // publicPath: '/public/'
       path: __dirname + '/public',
       filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          type : 'javascript/auto',  // this required to use json-loader
          test: /\.json$/,
          exclude: /node_modules/,
          use: {
            loader: 'json-loader',
          },
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    //plugins:[
      //new HtmlWebpackPlugin()
    //]
  };