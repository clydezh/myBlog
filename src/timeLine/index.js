import React, { Component } from 'react'
import './index.less'
import Navigation from '../component/nav'
// import Footer from '../component/footer'
import story01 from '../images/00.jpg'
import story02 from '../images/06.jpg'
import story03 from '../images/10.jpg'


class TimeLine extends Component {
	render () {
		return (
			<div className='time_line'>
				<Navigation/>
				<div className='time_main'>
					{/*<p>zhe shi wo de jie shao</p>*/}
					<ul>
						<li><img src={story01} alt=""/></li>
						<li>Hangzhou，with gaomei , xihu lake, xixi wetland , baoshi moutain, lingyin temple.</li>
						<li>2017-01-08</li>
					</ul>
					<ul>
						<li><img src={story02} alt=""/></li>
						<li>Hangzhou，with gaomei , xihu lake, xixi wetland , baoshi moutain, lingyin temple.</li>
						<li>2017-01-08</li>
					</ul>
					<ul>
						<li><img src={story03} alt=""/></li>
						<li>Hangzhou，with gaomei , xihu lake, xixi wetland , baoshi moutain, lingyin temple.</li>
						<li>2017-01-08</li>
					</ul>
					<ul>
						<li><img src={story01} alt=""/></li>
						<li>Hangzhou，with gaomei , xihu lake, xixi wetland , baoshi moutain, lingyin temple.</li>
						<li>2017-01-08</li>
					</ul>
					<ul>
						<li><img src={story02} alt=""/></li>
						<li>Hangzhou，with gaomei , xihu lake, xixi wetland , baoshi moutain, lingyin temple.</li>
						<li>2017-01-08</li>
					</ul>
					<ul>
						<li><img src={story03} alt=""/></li>
						<li>Hangzhou，with gaomei , xihu lake, xixi wetland , baoshi moutain, lingyin temple.</li>
						<li>2017-01-08</li>
					</ul>
					<ul>
						<li><img src={story01} alt=""/></li>
						<li>Hangzhou，with gaomei , xihu lake, xixi wetland , baoshi moutain, lingyin temple.</li>
						<li>2017-01-08</li>
					</ul>
					<ul>
						<li><img src={story02} alt=""/></li>
						<li>Hangzhou，with gaomei , xihu lake, xixi wetland , baoshi moutain, lingyin temple.</li>
						<li>2017-01-08</li>
					</ul>
					<ul>
						<li><img src={story03} alt=""/></li>
						<li>Hangzhou，with gaomei , xihu lake, xixi wetland , baoshi moutain, lingyin temple.</li>
						<li>2017-01-08</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default TimeLine