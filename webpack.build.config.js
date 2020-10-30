const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: { app: './src/components/index.tsx'},
  mode: "production",
  target: "web",   
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader'                
            },
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
    new webpack.DefinePlugin({
      'process.env': {
        // This has effect on the react lib size
        'NODE_ENV': JSON.stringify('production'),
      }
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'production',
      template: path.resolve(__dirname, "src","components", "index.html"),
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),      
  ],
  optimization: {
    minimize: true,
    runtimeChunk: true,
    splitChunks: {
      chunks: "async",
      minSize: 1000,
      minChunks: 2,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,
      cacheGroups: {
        default: {
          minChunks: 1,
          priority: -20,
          reuseExistingChunk: true,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        }
      }
    }
  }

  
};
