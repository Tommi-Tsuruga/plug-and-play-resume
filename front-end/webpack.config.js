/**
 * webpack.config.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

const path=require('path');
const {GenerateSW} = require('workbox-webpack-plugin');

module.exports=(env)=> {
    const IsProduction = env==='production';
    return{
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }]
        },
        devtool: IsProduction?'source-map':'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        },
        plugins: [
            new GenerateSW()
        ]
    };
};