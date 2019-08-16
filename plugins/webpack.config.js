const path = require('path');
const CopyrightWebpackPlugin = require('./plugins/copyright-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new CopyrightWebpackPlugin()
    ]
}