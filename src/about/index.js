import React, { Component } from 'react'
import $ from 'jquery'
import './index.less'
import '../utils/iconfont.less'
import { Input , Icon,Row, Col} from 'antd'
import Navigation from '../component/nav'
import Footer from '../component/footer'
import aboutMeImg from '../images/aboutme-img9.jpg'
import meStory from '../images/blog-image-1.jpg';

class AboutMe extends Component {
	state = {
		winH: '',
		winW: '',
		value:"My Love's Nickname?",
		clickCountMouse:1,
		viewFooter:false
	}

	componentWillMount () {

	}

	componentDidMount () {
		this.getWindowInfo()
	}

	getWindowInfo = () => {
		let winH = window.innerHeight || document.body.clientHeight
		let winW = window.innerWidth || document.body.clientWidth
		this.setState({
			winH,
			winW
		})
	}
	onSeeMoreClick = () => {
		let clickCountMouse = this.state.clickCountMouse;
		clickCountMouse ++
		this.setState({
			clickCountMouse:clickCountMouse
		})
		let maskQuestion = document.querySelector('.about_me .mask_qusetion');
		if ( clickCountMouse == 2){
			maskQuestion.classList.add('mask_qusetion_2');
		}else {
			$('.about_me .mask_qusetion').toggleClass('mask_qusetion_3');
		}
		document.querySelector('.about_me .mask_qusetion input').focus()
	}
	onValueChange = (e) => {
		this.setState({
			value:e.target.value
		})
	}
	onPressEnterChange = () => {
		const { value } = this.state;
		let lowValue = value.toLowerCase();
		if (lowValue == 'yaoyao'){
			// let seeMore = document.querySelector('.about_me .more_about');
			// seeMore.style.display = 'block';
			$('body,html').animate({scrollTop:this.state.winH},1500)
			this.onSeeMoreClick()
			this.setState({
				viewFooter:true
			})
		}
	}

	render () {
		window.onresize = () => {
			this.getWindowInfo()
		}
		window.onscroll = function() {
			let scrollY = window.scrollY
			if (scrollY > 730){
				$('.about_me .expertise .ui').addClass('ui_2')
				$('.about_me .expertise .webpack').addClass('webpack_2')
				$('.about_me .expertise .node').addClass('node_2')
				$('.about_me .expertise .javascript').addClass('javascript_2')
			}
		}
		const {winH, winW} = this.state
		const formItemLayout = {

		}
		return (
			<div className='about_me'>
				<header
					style={{
						backgroundImage: `url(${aboutMeImg})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						width: winW,
						height: winH
					}}
				>
					<Navigation />
					<div className="baseinfo" id='baseinfo_about'>
						<span className='space1'></span>
						<p id='me_job'>Web Design - Web Development - UX Design</p>
						<p>ZHANG LI</p>
						<span className='space2'></span>
						<div onClick={this.onSeeMoreClick}>
							<span></span>
						</div>
					</div>
					<div className='mask_qusetion'>
						<Icon type="close" onClick={this.onSeeMoreClick}/>
						<span></span>
						<Input
							   value={this.state.value}
							   onChange={this.onValueChange}
							   onPressEnter={this.onPressEnterChange}
						/>
						<p>Press Enter To See More</p>
						<span></span>
						
					</div>
				</header>
				{
					this.state.viewFooter && 
					<div className='more_about'>
					<section className='me_story'>
						<Row>
							<Col
								 sm={24} md={12}
							>
								<dl>
									<dt>A Little Bit Of My Story</dt>
									<dd>Senior Interactive Designer & Web Developer</dd>
									<dd>Award winning interdisciplinary Designer & Art director. We have a
										team who specialise in coding websites and themes perfect blend of
										style and function for a wide range of interactive product design.
									</dd>
								</dl>
							</Col>
							<Col
								 sm={24} md={12}
							>
								<img src={meStory} alt=""/>
							</Col>
						</Row>
					</section>
					<section className='expertise'>
						<Row>
							<Col  sm={24} md={12}>
								<p>Expertise</p>
								<p>Award winning interdisciplinary Designer & Art director. We have a team who specialise
									in coding websites.</p>
							</Col>
							<Col  sm={24} md={12}>
								<ul>
									<li><span>UI Design</span><span>90%</span></li>
									<li><p className='ui'></p></li>
								</ul>
								<ul>
									<li><span>Webpack & React & Antd</span><span>80%</span></li>
									<li><p className='webpack'></p></li>
								</ul>
								<ul>
									<li><span>Node</span><span>70%</span></li>
									<li><p className='node'></p></li>
								</ul>
								<ul>
									<li><span>Javascript</span><span>70%</span></li>
									<li><p className='javascript'></p></li>
								</ul>
							</Col>
						</Row>
					</section>
					<section className='exprience_edu'>
						<Row>
							<Col  sm={24} md={12}>
								<p>Exprience</p>
								<div className='itembox'>
									<div className='left'>
										<i className='icon-huihua_fuzhi-copy iconfont'></i>
										<p></p>
									</div>
									<div className='right'>
										<ul>
											<li>June 2012 - April 2013</li>
											<li>University</li>
											<li>Master Degree</li>
											<li>Lorem ipsum Occaecat do esse ex et dolor culpa nisi
												ex in magna consectetur nisi cupidatat laboris esse
												eiusmod deserunt aute do quis velit esse sed Ut proident
												cupidatat nulla esse cillum laborum occaecat nostrud sit
												dolor incididunt amet est occaecat nisi.
											</li>
										</ul>
									</div>
								</div>
								<div className='itembox'>
									<div className='left'>
										<i className='icon-huihua_fuzhi-copy iconfont'></i>
										<p></p>
									</div>
									<div className='right'>
										<ul>
											<li>June 2012 - April 2013</li>
											<li>University</li>
											<li>Master Degree</li>
											<li>Lorem ipsum Occaecat do esse ex et dolor culpa nisi
												ex in magna consectetur nisi cupidatat laboris esse
												eiusmod deserunt aute do quis velit esse sed Ut proident
												cupidatat nulla esse cillum laborum occaecat nostrud sit
												dolor incididunt amet est occaecat nisi.
											</li>
										</ul>
									</div>
								</div>
								<div className='itembox'>
									<div className='left'>
										<i className='icon-huihua_fuzhi-copy iconfont'></i>
										<p></p>
									</div>
									<div className='right'>
										<ul>
											<li>June 2012 - April 2013</li>
											<li>University</li>
											<li>Master Degree</li>
											<li>Lorem ipsum Occaecat do esse ex et dolor culpa nisi
												ex in magna consectetur nisi cupidatat laboris esse
												eiusmod deserunt aute do quis velit esse sed Ut proident
												cupidatat nulla esse cillum laborum occaecat nostrud sit
												dolor incididunt amet est occaecat nisi.
											</li>
										</ul>
									</div>
								</div>
							</Col>
							<Col  sm={24} md={12}>
								<p>Education</p>
								<div className='itembox'>
									<div className='left'>
										<i className='icon-jiaoyu iconfont'></i>
										<p></p>
									</div>
									<div className='right'>
										<ul>
											<li>June 2012 - April 2013</li>
											<li>University</li>
											<li>Master Degree</li>
											<li>Lorem ipsum Occaecat do esse ex et dolor culpa nisi
												ex in magna consectetur nisi cupidatat laboris esse
												eiusmod deserunt aute do quis velit esse sed Ut proident
												cupidatat nulla esse cillum laborum occaecat nostrud sit
												dolor incididunt amet est occaecat nisi.
											</li>
										</ul>
									</div>
								</div>
							</Col>
						</Row>
					</section>
				</div>
				}
				
				{
					this.state.viewFooter && 
					<Footer />
				}
				
			</div>
		)
	}
}

export default AboutMe