module.exports={
    publicPath:'/campus',
    outputDir:'campus',
    devServer:{
        disableHostCheck: true,
        proxy:{
            '/WX': {
                target: 'https://open.weixin.qq.com/',
                changeOrigin: true,
                pathRewrite:{
                    "^/WX":"/"
                }
            },
            '/Mission':{
                target: "http://10.0.5.35:8080/api/",
                changeOrigin: true,
            },
            '/Coin':{
                target: "http://10.0.5.35:8080/api/",
                changeOrigin: true,
            },
            '/admin':{
                target: "http://192.168.102.90:8081/",
                changeOrigin: true,

            },
            '/SchoolApi':{
                target: "http://10.0.17.66/api/",
                changeOrigin: true,
                pathRewrite:{
                    "^/SchoolApi":"/"
                }
            },
            '/account':{
                target: "https://account.aigauss.com/api/",
                changeOrigin: true,
                pathRewrite:{
                    "^/account":"/"
                }

            },
            '/bets': {
                target: "http://10.0.2.98:8083/",
                changeOrigin: true,
                pathRewrite: {
                    "^/bets": "/"
                }
            }
        }
    }

}