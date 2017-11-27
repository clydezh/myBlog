import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import RouterApp from './router'
import './index.less'

class MyComponent extends Component {
	render () {
		return (
			<RouterApp />
		)
	}
}

ReactDOM.render(<MyComponent/>, document.getElementById('myResume-content'))