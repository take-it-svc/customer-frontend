const fs = require("fs");

module.exports = {
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/user-service': {
        target: process.env.VUE_APP_CUSTOMER_GATEWAY_URL,
        changeOrigin: true
      },
      '/notification-service': {
        target: process.env.VUE_APP_CUSTOMER_GATEWAY_URL,
        changeOrigin: true
      },
      '/store-service': {
        target: process.env.VUE_APP_CUSTOMER_GATEWAY_URL,
        changeOrigin: true
      },
      '/order-service': {
        target: process.env.VUE_APP_CUSTOMER_GATEWAY_URL,
        changeOrigin: true
      },
    },
    allowedHosts: 'all',
    https: {
      key: fs.readFileSync('key.pem'),
      cert: fs.readFileSync('cert.pem'),
    }
  }
}
