const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV == 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd,
  },
  images: {
    domains: ['media.graphcms.com'],
  },
})

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
      loader: 'url-loader?limit=100000',
    })
    return config
  },
}
