const path = require('path');
const extract = require('mini-css-extract-plugin')
// const sass = require('sass')

module.exports = {
    mode: 'development',
    entry: './app/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            },
            {
                test:/\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: extract.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass')
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new extract(
                {
                filename: 'bundle.css',
            }
        )
    ],
    devServer: {
        hot: true,
        open: true,
        port: 8080,
        host: '0.0.0.0',
        openPage: 'http://localhost:8080'
    }
}