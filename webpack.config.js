let path = require('path');
let webpack = require('webpack');

module.exports = {
    watch: true,
    entry: {
        'iframe-overlay': './src/js/iframe-overlay.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: '[name].min.js'
    }
};