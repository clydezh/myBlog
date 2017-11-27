const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const Merge = require('webpack-merge')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')  //压缩CSS模块;
const UglifyJSPlugin = require('uglifyjs-webpack-plugin') // 压缩丑化js;
const os = require('os')


const CommonConfig = require('./webpack.config.js')


module.exports = Merge(CommonConfig, {
	module: {
		rules: [{
			test: /\.less$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader', 'less-loader']
			})
		}]
	},
	plugins: [
		new ExtractTextPlugin({           //将样式表提取到一个专用的文件
			filename: '[name].[hash:5].css',
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false
		}),
		new webpack.DefinePlugin({                            //允许你创建一个在编译时可以配置的全局常量。
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new UglifyJSPlugin({
			uglifyOptions: {
				test: /\.jsx?$/i,
				parallel: {                           //使用多进程并行运行和文件缓存来提高构建速度
					cache: true,
					workers: os.cpus().length,           //操作系统.中央处理器。  最大允许的进程并发数
				},
				sourceMap: false,
				compress: {
					warnings: false,                   //当删除无用的申明或者代码时，显示警告
					drop_console: true,    		       //删除所有的console
					// pure_funcs: ['console.log'],       //自定义删除 (这里删除console.log)
				},
				output: {
					comments: true,                   //删除注释
					ascii_only: false,                //在字符串和正则表达式里避开Unicode字符
				},
			}
		}),
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.css$/g,                                   //正则匹配后缀.css文件;
			cssProcessor: require('cssnano'),                             //加载‘cssnano’css优化插件;
			cssProcessorOptions: {discardComments: {removeAll: true}}, //插件设置,删除所有注释;
			canPrint: true                                                //设置是否可以向控制台打日志,默认为true;
		}),
	]
})