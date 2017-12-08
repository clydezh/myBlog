import React , { Component } from 'react';
import masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import $ from 'jquery';
import './index.less';
import { Row,Col } from 'antd';
import Footer from '../component/footer'
import Navigation from '../component/nav';

const requireContext = require.context("../images", true, /^.+(\.jpg|\.jpeg)/);
const images = requireContext.keys().map(requireContext);                 //一次性导入多张图片

class HomePage extends Component{
	state={

	}
	componentDidMount (){
		imagesLoaded.makeJQueryPlugin( $ );
		(function() {
			$('#masonry').imagesLoaded(function() {
				let msnry = new masonry( '#masonry', {
					itemSelector: '.masonry_items',
					isAnimated: true,
					columnWidth: '.masonry_items',
					percentPosition: true,
					resize: true
				});
			});
		})();
	}

	render (){
		return (
			<div className='masonry_main'>
				<main>
					<Navigation />
					<div className='float_box'>
						<Row id='masonry' gutter={16}>
							<Col
								className='masonry_items'
								xs={24} sm={12} md={8} lg={6} xl={6}
							>
								<figure>
									<img src={images[0]} alt=""/>
									<figcaption>
										<h2>yaoyao</h2>
										<p>the way to brother's home on the bridge.</p>
										<a href="#">View more</a>
									</figcaption>
								</figure>
							</Col>
							<Col
								className='masonry_items'
								xs={24} sm={12} md={8} lg={6} xl={6}
							>
								<figure>
									<img src={images[1]} alt=""/>
									<figcaption>
										<h2>Breakfast</h2>
										<p>a nie breakfast.</p>
										<a href="#">View more</a>
									</figcaption>
								</figure>
							</Col>
							<Col
								className='masonry_items'
								xs={24} sm={12} md={8} lg={6} xl={6}
							>
								<figure>
									<img src={images[2]} alt=""/>
									<figcaption>
										<h2>Snow</h2>
										<p>in JiLin ChangChun.</p>
										<a href="#">View more</a>
									</figcaption>
								</figure>
							</Col>
							<Col
								className='masonry_items'
								xs={24} sm={12} md={8} lg={6} xl={6}
							>
								<figure>
									<img src={images[3]} alt=""/>
									<figcaption>
										<h2>Wall</h2>
										<p>National Day 10.1.</p>
										<a href="#">View more</a>
									</figcaption>
								</figure>
							</Col>
							<Col
								className='masonry_items'
								xs={24} sm={12} md={8} lg={6} xl={6}
							>
								<figure>
									<img src={images[4]} alt=""/>
									<figcaption>
										<h2>Lawn</h2>
										<p>I am on the lawn, the sun is shine.</p>
										<a href="#">View more</a>
									</figcaption>
								</figure>
							</Col>
							<Col
								className='masonry_items'
								xs={24} sm={12} md={8} lg={6} xl={6}
							>
								<figure>
									<img src={images[5]} alt=""/>
									<figcaption>
										<h2>Street</h2>
										<p>on the way home when I go home.</p>
										<a href="#">View more</a>
									</figcaption>
								</figure>
							</Col>
							<Col
								className='masonry_items'
								xs={24} sm={12} md={8} lg={6} xl={6}
							>
								<figure>
									<img src={images[6]} alt=""/>
									<figcaption>
										<h2>Yuan To Zhu</h2>
										<p>Yuan To Zhu WuXi. it's a beautifull lake</p>
										<a href="#">View more</a>
									</figcaption>
								</figure>
							</Col>
							<Col
								className='masonry_items'
								xs={24} sm={12} md={8} lg={6} xl={6}
							>
								<figure>
									<img src={images[7]} alt=""/>
									<figcaption>
										<h2>Jing Ji Lake</h2>
										<p>Jing Ji Lake. Suzhou, at the dusk</p>
										<a href="#">View more</a>
									</figcaption>
								</figure>
							</Col>
							<Col
								className='masonry_items'
								xs={24} sm={12} md={8} lg={6} xl={6}
							>
								<figure>
									<img src={images[8]} alt=""/>
									<figcaption>
										<h2>Photo</h2>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing eColt.</p>
										<a href="#">View more</a>
									</figcaption>
								</figure>
							</Col>
							<Col
								className='masonry_items'
								xs={24} sm={12} md={8} lg={6} xl={6}
							>
								<figure>
									<img src={images[9]} alt=""/>
									<figcaption>
										<h2>Tai Hang Shan</h2>
										<p>Tai Hang Shan.  shanxi</p>
										<a href="#">View more</a>
									</figcaption>
								</figure>
							</Col>
							<Col
								className='masonry_items'
								xs={24} sm={12} md={8} lg={6} xl={6}
							>
								<figure>
									<img src={images[10]} alt=""/>
									<figcaption>
										<h2>Photo</h2>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing eColt.</p>
										<a href="#">View more</a>
									</figcaption>
								</figure>
							</Col>
							<Col
								className='masonry_items'
								xs={24} sm={12} md={8} lg={6} xl={6}
							>
								<figure>
									<img src={images[11]} alt=""/>
									<figcaption>
										<h2>Photo</h2>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing eColt.</p>
										<a href="#">View more</a>
									</figcaption>
								</figure>
							</Col>
							<Col
								className='masonry_items'
								xs={24} sm={12} md={8} lg={6} xl={6}
							>
								<figure>
									<img src={images[12]} alt=""/>
									<figcaption>
										<h2>Photo</h2>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing eColt.</p>
										<a href="#">View more</a>
									</figcaption>
								</figure>
							</Col>
							<Col
								className='masonry_items'
								xs={24} sm={12} md={8} lg={6} xl={6}
							>
								<figure>
									<img src={images[13]} alt=""/>
									<figcaption>
										<h2>Photo</h2>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing eColt.</p>
										<a href="#">View more</a>
									</figcaption>
								</figure>
							</Col>
							<Col
								className='masonry_items'
								xs={24} sm={12} md={8} lg={6} xl={6}
							>
								<figure>
									<img src={images[14]} alt=""/>
									<figcaption>
										<h2>yaoyao</h2>
										<p>the time on DuShu lake. it's beautifull.</p>
										<a href="#">View more</a>
									</figcaption>
								</figure>
							</Col>
							<Col
								className='masonry_items'
								xs={24} sm={12} md={8} lg={6} xl={6}
							>
								<figure>
									<img src={images[15]} alt=""/>
									<figcaption>
										<h2>On Load</h2>
										<p>the frist page.</p>
										<a href="#">View more</a>
									</figcaption>
								</figure>
							</Col>
							<Col
								className='masonry_items'
								xs={24} sm={12} md={8} lg={6} xl={6}
							>
								<figure>
									<img src={images[16]} alt=""/>
									<figcaption>
										<h2>On Load</h2>
										<p>the frist page.</p>
										<a href="#">View more</a>
									</figcaption>
								</figure>
							</Col>
							<Col
								className='masonry_items'
								xs={24} sm={12} md={8} lg={6} xl={6}
							>
								<figure>
									<img src={images[17]} alt=""/>
									<figcaption>
										<h2>yaoyao</h2>
										<p>the time on DuShu lake. it's beautifull</p>
										<a href="#">View more</a>
									</figcaption>
								</figure>
							</Col>
							<Col
								className='masonry_items'
								xs={24} sm={12} md={8} lg={6} xl={6}
							>
								<figure>
									<img src={images[18]} alt=""/>
									<figcaption>
										<h2>On Load</h2>
										<p>the frist page.</p>
										<a href="#">View more</a>
									</figcaption>
								</figure>
							</Col>
							<Col
								className='masonry_items'
								xs={24} sm={12} md={8} lg={6} xl={6}
							>
								<figure>
									<img src={images[19]} alt=""/>
									<figcaption>
										<h2>On Load</h2>
										<p>the frist page.</p>
										<a href="#">View more</a>
									</figcaption>
								</figure>
							</Col>
							<Col
								className='masonry_items'
								xs={24} sm={12} md={8} lg={6} xl={6}
							>
								<figure>
									<img src={images[20]} alt=""/>
									<figcaption>
										<h2>On Load</h2>
										<p>the frist page.</p>
										<a href="#">View more</a>
									</figcaption>
								</figure>
							</Col>
							<Col
								className='masonry_items'
								xs={24} sm={12} md={8} lg={6} xl={6}
							>
								<figure>
									<img src={images[21]} alt=""/>
									<figcaption>
										<h2>On Load</h2>
										<p>the frist page.</p>
										<a href="#">View more</a>
									</figcaption>
								</figure>
							</Col>
						</Row>
					</div>

				</main>
				<Footer />
			</div>

		)
	}
}

export default HomePage;