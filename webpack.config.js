const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    entry: [
        './app/src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'app/dist'),
        filename: '[name].js',
    },

    target: 'web',

    devtool: 'eval-source-map',

    devServer: {
        publicPath: '/',
        contentBase: path.join(__dirname, 'app/src/'),
        historyApiFallback: true,
        port: 8085,
        overlay: true,
    },

    resolve: {
        alias: {
            features: path.resolve(__dirname, 'app/src/features'),
            shared: path.resolve(__dirname, 'app/src/shared'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },

    // Module Loaders
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
            {
                test: /\.((c|sa|sc)ss)$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                        },
                    }
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
            // TODO: Add back when image assets are used
            // {
            //     test: /\.(png|jpg)$/,
            //     use: {
            //         loader: 'file-loader?limit=8192',
            //         options: {
            //             name: '[name].[ext]',
            //             outputPath: 'assets/images/'
            //         }
            //     },
            // },
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
    ]
}