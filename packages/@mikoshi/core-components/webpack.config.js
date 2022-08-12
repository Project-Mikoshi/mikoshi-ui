import path from 'path'
import { fileURLToPath } from 'url'
import tsTransformPaths from '@zerollup/ts-transform-paths'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default {
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'module'
    }
  },
  experiments: {
    outputModule: true
  },
  devtool: false,
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    plugins: [
      new TsconfigPathsPlugin()
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ],
  externals: {
    'react': 'react',
    'react-dom': 'react-dom'
  },
  module: {
    rules: [
      {
        test: /\.tsx$|\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          getCustomTransformers: (program) => {
            const transformer = tsTransformPaths(program)

            return {
              before: [transformer.before],
              afterDeclarations: [transformer.afterDeclarations]
            }
          }
        }
      },
      {
        test: /\.jsx$|\.js$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'jsx',
          target: 'es2016'
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  stats: 'errors-only'
}
