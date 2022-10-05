const fs = require("fs");
module.exports = {
  transpileDependencies: true,
  devServer:{
    allowedHosts: 'all',
    https: {
      key: fs.readFileSync('key.pem'),
      cert: fs.readFileSync('cert.pem'),
    } 
    
  }
}
