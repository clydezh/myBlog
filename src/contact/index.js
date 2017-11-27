import React, { Component } from 'react'
import { Row, Col, Form, Input, Button } from 'antd'
import './index.less'
import Navigation from '../component/nav'
import Footer from '../component/footer'
import story01 from '../images/04.jpg'

const FormItem = Form.Item

class Contact extends Component {
	render () {
		const formItemLayout = {
			labelCol: {span: 24},
			wrapperCol: {span: 24},
		}
		const { getFieldDecorator } = this.props.form;
		return (
			<div className='contact_component'>
				<Navigation/>
				<section className='contact'>
					<div className='img'>
						<img src={story01} alt=""/>
					</div>
					<Row>
						<Col xs={24} sm={8}>
							<Col xs={12} sm={24}>
								<span className='wecaht'>weChat:</span><span>zl3049</span>
							</Col>
							<Col xs={12} sm={24}>
								<span>reactzh@aliyun.com</span>
							</Col>
						</Col>
						<Col xs={24} sm={16}>
							<p>Feel Free to Contact Me</p>
							<Col xs={24} sm={12}>
								<FormItem
									{...formItemLayout}
									label='whats your name'
								>
									{
										getFieldDecorator('name',{
											rules:[{required:true,message:'please write name'}]
										})(
											<Input type="text"/>
										)
									}
								</FormItem>
							</Col>
							<Col xs={24} sm={12}>
								<FormItem
									{...formItemLayout}
									label='whats your email'
								>
									{
										getFieldDecorator('name1',{
											rules:[{required:true,message:'please write name'}]
										})(
											<Input type="text"/>
										)
									}
								</FormItem>
							</Col>
							<Col span={24}>
								<FormItem
									{...formItemLayout}
									label='whats in your mind'
									className='textaera'
								>
									{
										getFieldDecorator('name2',{
										})(
											<Input type="textarea" autosize={{ minRows: 2, maxRows: 6 }}/>
										)
									}
								</FormItem>
							</Col>
							<Col span={24}>
								<Button className="btn">SEND MAIL</Button>
							</Col>
						</Col>
					</Row>
				</section>
				<Footer />
			</div>
		)
	}
}

export default Form.create()(Contact)