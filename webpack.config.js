const path = require('path');

module.exports = {
  entry: {
    "app": path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    port: 9000
	},
	devtool: 'eval-source-map',
  module: {
    rules: [
      {
        // test: que tipo de archivo quiero reconocer,
        // use: que loader se va a encargar del archivo
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties'
            ]
          }
        },
      },
      {
        test: /\.css/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
};