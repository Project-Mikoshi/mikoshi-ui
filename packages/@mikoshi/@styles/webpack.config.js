import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))


export default {
  entry: "./src/index.scss",
  output: {
    filename: "main.css",
    path: path.resolve(__dirname, "dist"),
    library: {
      type: 'module'
    }
  },
  experiments: {
    outputModule: true
  },
  devtool: false,
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
