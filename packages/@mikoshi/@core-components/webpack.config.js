/* eslint-disable no-undef */
const path = require('path')
const tsTransformPaths = require('@zerollup/ts-transform-paths')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'commonjs'
    }
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      utils: path.resolve(__dirname, 'src/utils'),
      constants: path.resolve(__dirname, 'src/constants'),
      types: path.resolve(__dirname, 'src/types'),
      svgs: path.join(__dirname, 'src/svgs')
    },
    symlinks: true
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
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          compact: true
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
