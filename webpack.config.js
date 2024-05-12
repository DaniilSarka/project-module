const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [{
            test: /\.txt$/,
            loader: "raw-loader",
            
        },
        {
            test: /\.css$/,
            use: [
                miniCssExtractPlugin.loader,
                "css-loader"
            ]
            
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        }),
        new miniCssExtractPlugin()
    ]
}