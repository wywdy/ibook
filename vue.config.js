module.exports = {
    publicPath: '/',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://47.98.250.2:8081/fore',  //这里是目标服务器地址  后端给的ip地址
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''       //这里一定要为空
                }
            }
        }
    }
}
//   /api/login  => http://127.0.0.1:8100/login
