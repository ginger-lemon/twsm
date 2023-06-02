const path = require('path');

module.exports = {
  // 綑綁時的模式： development/production
  mode: "development", 
  entry: './src/index.js', 
  output: { 
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js', 
  },
  // 客製化 server 
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8080,
  },
  // 檔案讀取
  module: {
    rules: [
      // Js 檔案 （babel）
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
      //  CSS (css-loader)
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // 讀取不同類型的檔案
      {
        test: /\.png/,
        type: 'asset/resource'
      },
    ]
  },

  // 外掛工具

  // plugins: [new HtmlWebpackPlugin({
  //   template: './base.html'
  // })],
};

