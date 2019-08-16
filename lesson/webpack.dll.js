const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry:{
        vendors:['react','react-dom','lodash']
    },
    output: {
        filename: "[name].dll.js",
        path: path.resolve(__dirname,'../dll')
    },
    plugins: [
        new webpack.DllPlugin({
            name:'[name]',
            path: path.resolve(__dirname,'../dll/[name].manifest,json')
        })
    ]
}