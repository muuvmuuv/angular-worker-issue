const webpack = require('webpack')

module.exports = async (config, argv) => {
  // force setting the correct node env
  process.env.NODE_ENV = process.env.NODE_ENV || config.mode || argv.mode || 'development'


  //
  // Define global vars
  //

  config.plugins.push(
    new webpack.DefinePlugin({
      BUILD_ENV: JSON.stringify(process.env.NODE_ENV),
    })
  )

  return config
}
