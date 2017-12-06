import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import RouterApp from './router'
import './index.less'

class MyComponent extends Component {
	componentDidMount (){
		let deviceWidth = document.documentElement.clientWidth;
		if(deviceWidth > 640){
			deviceWidth = 640;
		}
		document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 + 'px';
	}
	render () {
		return (
			<RouterApp />
		)
	}
}

ReactDOM.render(<MyComponent/>, document.getElementById('myResume-content'))