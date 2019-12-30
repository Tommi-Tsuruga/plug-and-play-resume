/**
 * webpack.config.js
 * @author [Aisha Khoja, Keisuke Suzuki, Tommi Ann Tsuruga ](https://github.com/aishak7, https://github.com/Ks5810, https://github.com/tommi-tsuruga)
 */

const path = require('path');
const webpack = require('webpack');
const { GenerateSW } = require('workbox-webpack-plugin');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = (env) => {
    const IsProduction = env === 'production';
    return {
        entry: [
            './src/app.js',
            'webpack/hot/only-dev-server'
        ],
        output: {
            path: path.join(__dirname, 'static/bundles'),
            filename: "main.js"
        },
        module: {
            rules: [ {
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
            }, {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: "url-loader"
            }, {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                use: 'file-loader'
            } ]
        },
        devtool: IsProduction ? 'source-map' : 'cheap-module-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'static'),
            publicPath: 'http://localhost:3000/',
            hot: true,
            inline: true,
            historyApiFallback: true,
            headers: { 'Access-Control-Allow-Origin': '*' },
            port: 3000
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin({ multiStep: true }),
            new webpack.NoEmitOnErrorsPlugin(), // don't reload if there is an error
            new GenerateSW(),
            new BundleTracker({
                                  path: __dirname,
                                  filename: 'webpack-stats.json',
                              })
        ]
    };
};