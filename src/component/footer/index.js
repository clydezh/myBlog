import React , { Component } from 'react';
import './index.less';
import '../../utils/iconfont.less'
import { Row,Col } from 'antd';

class Footer extends Component{
	render (){
		return (
			<footer className='core_footer'>
				<h3>YAO~ QIE GE NAO~~</h3>
				<Row className='footer'>
					<Col
						xs={24} sm={12} md={12} lg={6} xl={6}
						className='copyright'
					>
						<dl>
							<dt>
								<span>R</span>
								<span>REACT</span>
							</dt>
							<dd>Worked by React 2017</dd>
						</dl>
					</Col>
					<Col
						xs={24} sm={12} md={12} lg={6} xl={6}>
						<dl>
							<dt>about me</dt>
						</dl>
					</Col>
					<Col
						xs={24} sm={12} md={12} lg={6} xl={6}>
						<dl>
							<dt className='email'><span>reactzh@aliyun.com</span></dt>
						</dl>
					</Col>
					<Col
						xs={24} sm={12} md={12} lg={6} xl={6}
						className='share_icon'
					>
						<dl>
							<dt>
								<i className='iconfont icon-weixin'></i>
								<i className='iconfont icon-qq-copy'></i>
								<i className='iconfont icon-tuite'></i>
								<i className='iconfont icon-facebookicon'></i>
							</dt>
						</dl>
					</Col>
				</Row>
			</footer>
		)
	}
}


export default Footer;