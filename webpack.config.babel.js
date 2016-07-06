import fs from 'fs'
import webpack from 'webpack'
import autoprefixer from 'autoprefixer'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin'

import * as ROUTES from './docs/constants/routes'

const staticSiteGeneratorConfig = {
  paths: [
    ROUTES.HOME,
    ROUTES.BONDS,
    ROUTES.BASE_STYLESHEET,
    ROUTES.COLORS,
    ROUTES.FONTS_AND_SPACING,
    ROUTES.ATOMS,
    ROUTES.TYPOGRAPHY,
    ROUTES.BUTTONS,
    ROUTES.MOLECULES,
    ROUTES.ORGANISMS
  ]
}

const postcss = () => [ autoprefixer({ browsers: [ 'last 20 versions' ] }) ]

const baseConfig = {
  entry: {
    base: './base.scss'
  },

  output: {
    filename: 'base.js',
    path: ''
  },

  module: {
    loaders: [
      {
        test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
      },
      {
        test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css')
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  postcss

}

const config = {
  entry: {
    docs: './docs/index.js'
  },

  output: {
    filename: '[name]_[chunkhash].js',
    path: 'dist',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel'
      },
      {
        test: /base\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!postcss!sass?config=sass')
      },
      {
        test: /\.scss$/,
        exclude: /base\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[local]!postcss!sass?config=sass')
      },
      {
        test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css')
      },
      {
        test: /\.json$/, loader: 'json'
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('[name]_[contenthash].css'),
    new StaticSiteGeneratorPlugin('docs', staticSiteGeneratorConfig.paths, staticSiteGeneratorConfig)
  ],

  postcss,

  sass: {
    data: process.env.BPK_THEME
      ? fs.readFileSync(require.resolve(`backpack-tokens/tokens/${process.env.BPK_THEME}.scss`))
      : ''
  },

  devServer: {
    host: '0.0.0.0'
  }

}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false
      }
    })
  )
}

export default [ baseConfig, config ]
