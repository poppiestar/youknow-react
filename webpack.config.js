/* eslint-env node */

const path = require('path');

const SRC_DIR = path.join(__dirname, 'src');
const OUT_DIR = path.join(__dirname, 'js');

module.exports = {
    entry: [SRC_DIR + '/main.jsx'],

    output: {
        path: OUT_DIR,
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        loaders: [
            {
                exclude: /node_modules/,
                test: /\.(js|jsx)$/,
                loader: 'babel-loader'
            }
        ]
    }
};
