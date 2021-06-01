let path = require('path');
let webpack = require('webpack');

module.exports = {
    watch: true,
    entry: {
        'iframe-video-overlay': './src/js/iframe-video-overlay.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: '[name].min.js'
    }
};