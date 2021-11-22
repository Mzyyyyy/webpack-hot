const webpack = require('webpack')
module.exports = {
    entry:"./src/index",
    devServer:{
        open:true,
        port:8080
    },
    plugins:[
        // new webpack.HotModuleReplacementPlugin()
    ]
}