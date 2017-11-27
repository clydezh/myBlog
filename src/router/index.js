import React, { Component } from 'react'
import { render } from 'react-dom'
import Bundle from '../utils/bundle'
import { Router, Route, Switch } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'


import HomePage from 'bundle-loader?lazy&&name=HomePage!../homePage'
import AboutMe from 'bundle-loader?lazy&&name=AboutMe!../about'
import TimeLine from 'bundle-loader?lazy&&name=TimeLine!../timeLine'
import Blog from 'bundle-loader?lazy&&name=Blog!../blog'
import Contact from 'bundle-loader?lazy&&name=Contact!../contact'


const LazyHomePage = (props) => <Bundle load={HomePage}>{(HomePage) => <HomePage {...props}/>}</Bundle>
const LazyAboutMe = (props) => <Bundle load={AboutMe}>{(AboutMe) => <AboutMe {...props}/>}</Bundle>
const LazyTimeLine = (props) => <Bundle load={TimeLine}>{(TimeLine) => <TimeLine {...props}/>}</Bundle>
const LazyBlog = (props) => <Bundle load={Blog}>{(Blog) => <Blog {...props}/>}</Bundle>
const LazyContact = (props) => <Bundle load={Contact}>{(Contact) => <Contact {...props}/>}</Bundle>


class RouterApp extends React.Component {
	componentDidMount () {
		LazyHomePage()
		LazyAboutMe()
		LazyTimeLine()
		LazyBlog()
		LazyContact()
	}

	render () {
		const history = createBrowserHistory()    //使用browserHistory，同时也在使用者webpack-dev-server，要在启动webpack-dev-server时，要加--history-api-fallback参数
		                                          //或者也可以使用hashHistory，不需要加--history-api-fallback参数就可以，然而这样有个问题就是url可视性太不友好了，全是hash了的。
		return (
			<Router history={history}>
				<Switch>
					<Route exact path="/" component={LazyHomePage}/>
					{/*<Route exact path="/about" component={LazyAboutMe}/>*/}
					<Route exact path="/timeline" component={LazyTimeLine}/>
					{/*<Route exact path="/blog" component={LazyBlog}/>*/}
					<Route exact path="/contact" component={LazyContact}/>
				</Switch>
			</Router>
		)
	}
}

export default RouterApp



