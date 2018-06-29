const path = require('path');
const webpack = require('webpack');

const SRC_DIR = path.resolve(__dirname, '../src');
const DIST_DIR = path.resolve(__dirname, '../dist');

module.exports = {

    context: SRC_DIR,
    entry: [ './index.js' ],

    output: {
        filename: 'index.js',
        path: DIST_DIR,
        publicPath: '/',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },

    devServer: {
        contentBase: DIST_DIR,
        hot: true,
        port: 3000,
        historyApiFallback: true,
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
                    'style-loader',
                    'css-loader',
                    'sass-loader',
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

    resolve: {
        alias: {
            'nice-react': SRC_DIR
        },
        modules: [
            path.resolve(__dirname, '../node_modules')
        ],
        extensions: ['.js', '.jsx'],
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('dev'),
            },
        }),
    ]
};