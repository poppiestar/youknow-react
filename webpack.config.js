const path = require('path');

const SRC_DIR = path.join(__dirname, 'src');
const OUT_DIR = path.join(__dirname, 'js');

module.exports = {
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    entry: SRC_DIR + '/main.jsx',
    output: {
        path: OUT_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                include: SRC_DIR,
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};

