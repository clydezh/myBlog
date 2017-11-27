import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import './index.less'

class Navigation extends Component {
	state = {
		pathKey: '',
		menuCount: ''
	}
	static contextTypes = {
		router:React.PropTypes.object.isRequired
	}
	componentWillMount () {
		let pathKey = window.location.pathname.split('/')[1]
		this.setState({
			pathKey: pathKey,
			menuCount: 1
		})
	}

	onMenuChange = () => {
		let menuCount = this.state.menuCount
		menuCount ++
		this.setState({
			menuCount:menuCount
		})
		if (menuCount == 2) {
			$('#menu_layout .menu').addClass('menu_hidden')
			$('#menu_layout ol').addClass('ol_hidden')
			$('#menu_layout .line01').addClass('rotate01')
			$('#menu_layout .line02').addClass('rotate02')
		} else {
			$('#menu_layout .menu').toggleClass('menu_hidden_2')
			$('#menu_layout ol').toggleClass('ol_hidden_2')
			$('#menu_layout .line01').toggleClass('rotate01_2')
			$('#menu_layout .line02').toggleClass('rotate02_2')
		}

		$('#baseinfo_about').toggleClass('baseinfo_about')

	}
	onToHomePage = ()=> {
		this.context.router.history.push('/')
	}

	render () {
		const {pathKey} = this.state
		return (
			<div className='nav_box'>
				<div className='nav'>
					<div className='left' onClick={this.onToHomePage}>
						<span className='circle'>R</span>
						<span>REACT</span>
					</div>
					<div className='right' onClick={this.onMenuChange}>
						<ul>
							<li></li>
							<li></li>
							<li></li>
						</ul>
						<span>MENU</span>
					</div>
				</div>
				<div className='menu_layout' id='menu_layout'>
					<ol onClick={this.onMenuChange}>
						<li className='line01'></li>
						<li className='line02'></li>
					</ol>
					<div className='menu'>
						<ul className='menulist' id='menulist'>
							<li className={pathKey == '' ? 'actived' : ''}>
								<Link to='/'>Home</Link>
							</li>
							{/*<li className={pathKey == 'about' ? 'actived' : ''}>*/}
								{/*<Link to='/about'>About</Link>*/}
							{/*</li>*/}
							<li className={pathKey == 'timeline' ? 'actived' : ''}>
								<Link to='/timeline'>TimeLine</Link>
							</li>
							{/*<li className={pathKey == 'blog' ? 'actived' : ''}>*/}
								{/*<Link to='/blog'>Blog</Link>*/}
							{/*</li>*/}
							<li className={pathKey == 'contact' ? 'actived' : ''}>
								<Link to='/contact'>Contact</Link>
							</li>
						</ul>
					</div>

				</div>
			</div>

		)
	}
}

export default Navigation