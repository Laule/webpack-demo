const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "bundle.js",
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            root: path.resolve(__dirname, '../dist')
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    // optimization: {
        // 哪些导出模块导出，就打包哪些模块（按需打包）
        // usedExports: true,
        // 代码分割
        // splitChunks: {
            // chunks: 'all'
        // }
    // },
    performance: false
}