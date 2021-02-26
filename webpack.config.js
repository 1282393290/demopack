const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    }
};
// module.exports = {
//     entry: {
//         app: './src/index.js',
//         app2: './src/main.js'
//     },
//     output: {
//         path: path.resolve(__dirname, './dist'),
//         filename: '[name].js'
//     },
//     mode: 'production'
// };