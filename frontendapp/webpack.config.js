/**
 * webpack.config.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

const publicPath = 'http://localhost:3000/';
const publicUrl = 'http://localhost:3000/';

const path = require('path');
const {GenerateSW} = require('workbox-webpack-plugin');
const BundleTracker  = require('webpack-bundle-tracker');

module.exports = (env) => {
    const IsProduction = env === 'production';
    return {
        entry: [ './src/app.js',
            require.resolve('webpack-dev-server/client') + '?http://localhost:3000',
        ],
        output: {
            path: path.join(__dirname, '../public/bundles'),
            filename: "bundle.js"
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
        devtool: IsProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, '../public/bundles'),
            historyApiFallback: true,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            port: 3000
        },
        plugins: [
            new GenerateSW(),
            new BundleTracker({
                path: __dirname,
                filename: 'webpack-stats.json',
            })
        ]
    };
};