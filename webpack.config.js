const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
	entry: {
		main: ['./src/index.js'],   //应用代码
		vendor: ['react', 'react-dom', 'react-router', 'react-router-dom', 'antd', 'axios', 'moment', 'jquery']   //提取公共代码库，生产环境可以注释掉，提高打开页面的速度(不需要加载vender.js了)。开发的时候打开提高编译速度）
	},
	output: {
		filename: '[name].[chunkhash:5].js',
		chunkFilename: '[name]-[id].js',       //bundle-loader使用的名字
		path: path.resolve(__dirname, 'dist'),
		publicPath: '',                        //最终的线上地址
		sourceMapFilename: 'name.map'
	},

	resolve: {
		extensions: ['.jsx', '.js', '.json', '*'],                  //自动解析确定的扩展
		modules: [path.resolve(__dirname, 'src'), 'node_modules']   //告诉 webpack 解析模块时应该搜索的目录。
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['to-string-loader', 'style-loader', 'css-loader']   // style-loader必须放在前面
			},
			{
				test: /\.(jpg|png|gif|jpeg)$/,
				// use: {
				// 	loader: 'file-loader',
				// 	query: {
				// 		useRelativePath: true     //useRelativePath should be true if you wish to generate relative URL to the each file context
				// 	}
				// },
				use:
					{
						loader: 'url-loader',
						options: {
							limit: 10000,                      //低于10000byte的图片文件转base64到css里,当然css文件体积更大;
						}
					}
			},
			{
				test: /\.(woff|woff2|eot|ttf|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 100000
					}
				}
			},
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: 'cache-loader',  //请只对性能开销较大的 loader 使用此 loader
						options: {
							cacheDirectory: path.resolve('.cache-loader')
						}
					},
					{
						loader: 'babel-loader',
						options: {
							presets: ['es2015', 'env', 'babel-preset-react', 'babel-preset-es2015', 'babel-preset-stage-0'],
							plugins: [
								['import', {
									libraryName: 'antd',               //babel-plugin-import 支持 js 和 css 同时按需加载。
									libraryDirectory: 'lib',
									style: 'css'
								}],
								'transform-runtime'       //必须要排除node_modules等， 提高速度,否则报错
							],
						}
					}
				]
			}
		]
	},

	plugins: [
		new webpack.HashedModuleIdsPlugin(),        //让vendor的hash值保持不变
		new webpack.optimize.CommonsChunkPlugin({   //使用 CommonsChunkPlugin 为每个页面间的应用程序共享代码创建 bundle。多页应用能够在入口起点重用大量代码/模块。
			name: 'vendor',
			minChunks: Infinity                     //随着 entrie chunk 越来越多，保证没其它的模块会打包进 vendor chunk
		}),
		new webpack.optimize.CommonsChunkPlugin({   //runtime必须放在库实例之后
			name: 'runtime',
			filename: '[name].[hash:5].js',
			minChunks: Infinity
		}),
		new HtmlWebpackPlugin({
			title: 'React photos',
			template: 'src/index.html',
			chunksSortMode: 'dependency'
		}),
		new CleanWebpackPlugin(['dist']),
	]
}