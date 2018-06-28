const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, '../docs/index.js')
    ],

    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/'
    },

    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
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
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader']
            //
            // },
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

    resolve: {
        alias: {
            'nice-react': path.resolve(__dirname, '../lib')
        },
        modules: [path.resolve(__dirname, '../node_modules')],
        extensions: ['.js', '.jsx'],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../docs/index.html'),
            inject: true,
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('dev'),
            },
        }),
    ]
};