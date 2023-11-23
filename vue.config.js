const fs = require('fs')
const path = require('path')

module.exports={

    devServer: {
        proxy: {
            '/api': {
                target: "http://127.0.0.1:9527",
                changeOrigin: true,
                ws: false,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        // open: true,
        historyApiFallback: true,
        allowedHosts: "all",
        //Error: error:05800074:x509 certificate routines::key values mismatch
        https: //false
            {
                cert: fs.readFileSync(path.join(__dirname, 'src/ssl/cert.crt')),
                key: fs.readFileSync(path.join(__dirname, 'src/ssl/cert.key'))
            }


}
}
