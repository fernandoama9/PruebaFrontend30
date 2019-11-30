var webpack = require("webpack");
var path = require("path");

var sourcePath = path.resolve(__dirname, "src");
var jsSourcePath = path.resolve(__dirname, "src/components");
var buildPath = path.resolve(__dirname, "dist");
var config = {
    mode: 'development',
    entry: sourcePath + "/index.js",
    output: {
        path: buildPath,
        publicPath: "/dist/",
        chunkFilename: '[id].js',
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(jsx|js)$/,
                exclude: [path.join(__dirname, "/node_modules")],
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                loader: 'url-loader'
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"],
        modules: [            
            "node_modules",
            jsSourcePath
        ]
    },
    devServer: {
        port: 8080,
        publicPath: "http://localhost:8080/dist/",
        contentBase: path.join(__dirname, "views/"),
        historyApiFallback: true
    },
    devtool: "eval-source-map"
};

module.exports = config;
