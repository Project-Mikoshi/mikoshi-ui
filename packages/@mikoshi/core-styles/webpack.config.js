const path = require("path")

module.exports = {
    entry: "./src/index.scss",
    output: {
        filename: "main.css",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["css-loader"],
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
            }
        ],
    },
    stats: "errors-only"
}
