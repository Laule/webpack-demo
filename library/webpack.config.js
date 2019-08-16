const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    externals: ['lodash'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'library.js',
        library: 'root',
        libraryTarget: "umd"
    }
}