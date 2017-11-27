const webpack = require('webpack')
const Merge = require('webpack-merge')

const CommonConfig = require('./webpack.config.js')

module.exports = Merge(CommonConfig, {
	devtool: 'inline-source-map',
	// devServer: {                 //"start": "node --max_old_space_size=4096 node_modules/webpack-dev-server/bin/webpack-dev-server.js --config webpack.dev.js --history-api-fallback",
	// 	contentBase: './dist',   //webpack-dev-server，在 localhost:8080下建立服务，在dist文件夹下配置静态资源环境，作为可访问文件。
	// 	hot: true,
	// 	host: '127.0.0.1',
	// 	port: '8080'
	// },
	module: {
		rules: [{
			test: /\.less$/,
			use: [
				{
					loader: 'style-loader'  //将css代码以<style>标签的形式插入页面
				},
				{
					loader: 'css-loader'    //检查css代码中的import语句找到依赖，并合并
				},
				{
					loader: 'less-loader',
					options: {
						strictMath: true,
						noIeCompat: true
					}
				}
			]
		}]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		}),
	]
})

