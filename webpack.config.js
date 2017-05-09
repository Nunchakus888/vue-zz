/**
 * Created by Administrator on 2017/4/28.
 */
const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: './app.js',
    output: {
        filename: 'bundle.js',
        // chunkFilename: '[id].chunk.js',
        path: path.resolve(__dirname, './dist'),
        // publicPath: 'http://127.0.0.1:8888',
    },
    module: {
        // 加载器
        /*loaders: [
            // 解析.vue文件
            { test: /\.vue$/, loader: 'vue'},
            // 转化ES6的语法
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            // 编译css并自动添加css前缀
            {test: /\.css$/, loader: 'style-loader!css-loader', exclude: /^node_modules$/},
            //.scss 文件想要编译，scss就需要这些东西！来编译处理
            //install css-loader style-loader sass-loader node-sass --save-dev
            // { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            // 图片转化，小于8K自动转化为base64的编码
            // { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192', exclude: /^node_modules$/},
            //html模板编译？
            { test: /\.(html|tpl)$/, loader: 'html-loader' },
        ]*/
        rules: [
            {test: /\.js$/,//排除指定的文件目录里的js文件 /^((?!my_legacy_code).)*\.js$/ 剩余的(js文件)则由 Babel 处理.
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015'] }
                }],
            },
            {test: /\.vue$/, use: ['vue-loader']},
            {test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader']},
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }]
            },
        ],
        // devtool: 'eval-source-map',
    },

    plugins: [
        new webpack.BannerPlugin('This file is create by Roidder'),//文件头部出现了我们指定的注释信息
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons.js',
            minChunks: 2,//任何一个模块在 output 文件中被加载 2 次及以上, 该模块就会被打包在 common.js
        }),

        //创建一个htmlWebpackPlugin对象，并传入值
        new htmlWebpackPlugin({
            template: 'index.html', //生成html文件的模板文件
            filename: './index.html', //目标文件的名称
            inject: false,  //插入html文档中的位置，value分别为 true，false，head，body
            title: 'mdzz~runrunrun~~', // 传入的html的title
            // excludeChunks: ['b', 'c'] // 引入的除b.js 与c.js以外的js文件
        }),/*
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'b.html',
            inject: false,
            title: 'this is b.html',
            excludeChunks: ['a', 'c']
        }),
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'c.html',
            inject: false,
            title: 'this is c.html',
            excludeChunks: ['a', 'b']
        })*/
    ],

    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        // extensions: ['', '.js', '.vue'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            vue: path.join(__dirname, './node_modules/vue/dist/vue.js'),
            assets: path.join(__dirname, './src/assets'),
            components: path.join(__dirname, './src/components')
        }
    },

    devServer: {//开发服务器
        contentBase: path.resolve(__dirname, './src'),  // New
        port: 8888,
        // historyApiFallback: true,
        // hot: false,
        // inline: true,
        // grogress: true,
    },
}