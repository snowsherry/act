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
                target: "http://10.0.2.98:8081/",
                changeOrigin: true,

            },
            '/getSchoolList':{
                target: "http://10.0.17.66/api/",
                changeOrigin: true,
            }
        }
    }

}