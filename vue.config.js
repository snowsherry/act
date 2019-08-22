module.exports={
    publicPath:'/campus',
    outputDir:'campus',
    devServer:{
        proxy:{
            '/WX': {
                target: 'https://open.weixin.qq.com/',
                changeOrigin: true,
                pathRewrite:{
                    "^/WX":"/"
                }
            },
        }
    }

}