const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const makePlugins = (configs) => {
    const plugins = [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../')
        })
    ];
    Object.keys(configs, entry).forEach(item => {
        plugins.push(new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: `${item}.html`,
            chunks: [item]
        }))
    })
    return plugins
}


const configs = {
    entry: {
        main: './src/main.js',
        list: './src/list.js',
    },
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
    optimization: {
        usedExports: true,
        splitChunks: {
            chunks: 'all'
        }
    },
    performance: false
}

configs.plugins = makePlugins(configs);
module.exports = configs;