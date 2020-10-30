const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: './src/index.tsx',
  mode: "development",
  target: "web",
    devtool: 'inline-source-map',
    module: {
        rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader'                
        },
        {
          test: /\.s?css$/,
          use: [{ loader: 'style-loader' }, { loader: 'css-loader', options: { sourceMap: true } }, { loader: 'sass-loader', options: { sourceMap: true } }],          
        },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/,
          use: 'url-loader'
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          use: [{ loader: 'file-loader?name=font/[name]__[hash:base64:5].[ext]' }],          
        }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src","index.html"),
    }),
  ]
};