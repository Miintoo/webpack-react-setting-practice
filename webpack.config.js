const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname + '/build')
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules',
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html', // public/index.html 파일을 읽는다.
      filename: 'index.html' // output으로 출력할 파일은 index.html 이다.
    })
  ]
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: 'node_modules',
  //       use: {
  //         loader: 'babel-loader',
  //         options: {
  //           presets: ['env']
  //         }
  //       }
  //     },
  //     {
  //       test: /\.css$/,
  //       use: ['style-loader', 'css-loader']
  //     }
  //   ]
  // }
};
