const  HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const rulesForJavascript ={
    test: /.(js|jsx)$/,
    exclude: /node_modules/,
    use:{
        loader: 'babel-loader'
    }
}
const rulesForStyles = {
    test: /.(css)$/,
    use: ['style-loader', 'css-loader']
} 

const rulesForImag ={
        type: 'asset',
        test: /\.(png|svg|jpg|jpeg|gif)$/i, 
}

const rules = [rulesForJavascript, rulesForStyles, rulesForImag]
module.exports = (env, argv)=> {
    const {mode} = argv
    const isProduction = mode === 'production'
    return {
        output: {
            filename: isProduction ? '[name].[contenthash].js' : 'main.js',
            path: path.resolve(__dirname, 'dist')
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html',
                filename: './index.html'
            }),
        ],
        module: {rules},
        devServer: {
            port: 3000,
            open: true
        },
        devtool: 'source-map'
    }
}