const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: [
        './app/src/index.js',
    ],
    output: {
        path: path.resolve(__dirname, 'app/dist/'),
        filename: '[name].js',
    },

    target: 'web',

    // WEBPACK DEV SERVER
    devServer: {
        publicPath: '/',
        contentBase: path.join(__dirname, 'app/src/'),
        port: 8085,
    },

    resolve: {
        alias: {
            components: path.resolve(__dirname, 'app/src/components'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },

    // MODULE LOADERS
    module: {
        rules: [
            // Transpile JS(X)/TS(X) using babel loader
            {
                test: /\.(j|t)sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            // Output .js files will have sourcemaps reprocessed by source-map-loader
            {
                test: /\.js$/,
                loader: 'source-map-loader',
                enforce: 'pre',
            },
            // Compile less to css
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/fonts/'
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg)$/,
                use: {
                    loader: 'file-loader?limit=8192',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/images/'
                    }
                },
            },
        ],
    },

    // PLUGINS
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new HtmlWebpackPlugin({
            template: './app/src/index.html',
            filename: 'index.html',
        }),
        new CopyPlugin([
            { from: './app/src/assets/images', to: 'assets/images' }
        ])
    ],
};
