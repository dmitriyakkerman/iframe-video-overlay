let path = require('path');
let webpack = require('webpack');

module.exports = {
    watch: true,
    entry: {
        'simple-iframe-overlay': './src/js/simple-iframe-overlay.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: '[name].min.js'
    }
};