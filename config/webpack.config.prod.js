const path = require('path');
const webpack = require('webpack');

const LIBRARY_NAME = 'nice-react';

module.exports = {

    entry: [path.resolve(__dirname, '../src/index.js')],

    output: {
        path: path.resolve(__dirname, '../dist'),
        library: LIBRARY_NAME,
        libraryTarget: 'umd',
        umdNamedDefine: true,
        filename: `index.js`,
    },

    resolve: {
        modules: [path.resolve(__dirname, '../node_modules')],
        extensions: ['.js', '.jsx'],
    },

    module: {
        rules: [
            {
                test: /(\.js|\.jsx)$/,
                enforce: 'pre',
                exclude: /node_modules/,
                use: ['eslint-loader'],
            },
            {
                test: /(\.js|\.jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS
                ]
            },
            {
                test: /\.(png|jpg)$/,
                use: ['url-loader?limit=200000'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                keep_fnames: true,
            },
            compress: {
                warnings: false,
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true,
                keep_fnames: true,
            },
            output: {
                comments: false,
            },
        }),
    ]
};