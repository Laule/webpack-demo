const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    devServer: {
        contentBase: './dist',
        port: 8080, // 端口
        open: true, // 自动打开一个浏览器
        hot: true, //HOR
        hotOnly: true //即便html不生效，浏览器也不刷新
    },
    mode: 'development',
    devtool: "none", //none
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            // modules: true   模块之间的样式不会耦合
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require("autoprefixer")
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [["@babel/preset-env", {
                        corejs: 2,
                        useBuiltIns: "usage" // 按需加载（用到什么加载什么）
                    }]]
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]

}