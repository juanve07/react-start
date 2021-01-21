const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

console.log(devMode)

module.exports = {
    entry: [
        '@babel/polyfill',
        './src/app/index.js'
    ],
    output:{
        path: __dirname + '/build',
        filename: 'bundle.js'
    },

    devServer: {
        port: 3000
      },

    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/, /* Expresion regular */
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ]
};