const HtmlWebpackPlugin = require('html-webpack-plugin')
const { relative } = require('path')
const path = require('path')
const webpack = require('webpack')

const resolvePath = (relativePath) => {
    return path.resolve(process.cwd(), relativePath)
}

module.exports = {
    mode: 'development',
    target: 'web',
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.scss'],
        alias: {
            '@': resolvePath('./src'),
            "@pages": resolvePath('./src/pages'),
            '@components': resolvePath('./src/components'),
            "@types": resolvePath('./src/types'),
            "@request": resolvePath('./src/request'),
            "@strings": resolvePath('./src/strings'),
            "@redux": resolvePath('./src/redux'),
            "@utils": resolvePath('./src/utils'),
            "@config": resolvePath('./src/config')
        }
    },
    devtool: 'inline-source-map',
    entry: path.resolve(__dirname, './main.tsx'),  //工程资源入口
    output: {
        filename: 'main.js', // 打包过后的文件名
        path: path.join(__dirname, './dist') //打包后的目录
    },

    devServer: {
        hot: true,
        port: 3333,
        open: true,
        // liveReload: false,
        // watch: true,
        static: {
            directory: path.join(__dirname, 'dist')
        },
        // inline: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                        // loader: 'ts-loader',
                        // options:{
                        //     transpileOnly: true  
                        // }
                    },
                    {
                        loader: 'babel-loader'
                    }
                ],
            },
            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }]
            },
            {
                test: /\.scss?$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack demo',
            template: path.resolve(__dirname, 'index.html'),
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]

}