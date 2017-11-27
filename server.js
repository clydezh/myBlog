

//执行server.js 文件，需要判断(export) process.env.NODE_ENV 是个什么环境。 但是直接webpack执行--config文件是不需要判断的。

const express = require('express')
const path = require('path')
const routesPath = require('./routeServer/routes.js')

let isDeveloping = process.env.NODE_ENV.trim() === 'development'
let app = express()

if (isDeveloping) {
	console.log('开发模式启动')
	const webpack = require('webpack')
	const webpackDevMiddleWare = require('webpack-dev-middleware')
	const webpackHotMiddleWare = require('webpack-hot-middleware')

	let webpackDevConfig = require('./webpack.dev')
	let compiler = webpack(webpackDevConfig)             //webpack执行编译
	let DevMiddleWare = webpackDevMiddleWare(compiler, {
		publicPath: webpackDevConfig.output.publicPath,
		stats: {
			colors: true,
			modules: false,
			children: false,
			chunks: false,
			chunkModules: false
		},
	})
	app.use(DevMiddleWare)
	app.use(webpackHotMiddleWare(compiler))          //模块热替换

	// 调用 routes
	let routes = (app, MiddlewarefileStystem, file) => {           // 批量处理接口
		app.get(routesPath, (req, res, next) => {
			DevMiddleWare.waitUntilValid(() => {
				let html = MiddlewarefileStystem.readFileSync(file)
				res.end(html)
			})
			next()
		})

		//   处理 404
		app.get('*', function (req, res, next) {
			DevMiddleWare.waitUntilValid(() => {
				let html = MiddlewarefileStystem.readFileSync(file)
				res.end(html)
			})
		})
	}
	let MiddlewarefileStystem = DevMiddleWare.fileSystem
	let file = path.join(webpackDevConfig.output.path, 'index.html')
	routes(app, MiddlewarefileStystem, file)
	console.log('路由挂载完成')
} else {
	app.use('/', express.static(path.resolve(__dirname + '/dist')))
	let routes = (app) => {
		app.get(routesPath, (req, res, next) => {
			console.log(path.resolve(path.join(__dirname,  './dist/index.html')))
			res.sendFile(path.resolve(path.join(__dirname,  './dist/index.html')));
			// next()
		});

		// 处理 404
		app.get('*', function (req, res, next) {
			res.sendFile(path.resolve(path.join(__dirname, './dist/index.html')));
		})
	};
	routes(app)
	console.log('生产模式启动')

}


app.listen(8080, (err, success) => {
	if (err) {
		console.log('err', err)
	} else {
		console.log(`server start as port 8080`)
	}
})