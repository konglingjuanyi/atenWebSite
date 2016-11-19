import React from 'react';
import Container from '../../Container'
import {
	Row
}
from 'antd'

import FooterMenuItem from './FooterMenuItem'


class FooterMenu extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'FooterMenu';
	}
	render() {
		const footerMenuData = [{
			"title": "关于我们",
			"menu": [{
				"name": "公司简介",
				"path": ""
			}, {
				"name": "企业文化",
				"path": ""
			}, {
				"name": "发展历程",
				"path": ""
			}, {
				"name": "资质证书",
				"path": ""
			}]

		}, {
			"title": "客户案例",
			"menu": [{
				"name": "企业网站",
				"path": ""
			}, {
				"name": "商城网站",
				"path": ""
			}, {
				"name": "管理系统",
				"path": ""
			}, {
				"name": "微信平台",
				"path": ""
			}]

		}, {
			"title": "服务范围",
			"menu": [{
				"name": "网站建设",
				"path": ""
			}, {
				"name": "系统开发",
				"path": ""
			}, {
				"name": "微信营销",
				"path": ""
			}, {
				"name": "移动APP",
				"path": ""
			}]

		}, {
			"title": "联系我们",
			"info": [{
				"name": "微信公众号：艾腾软件"
			}, {
				"name": "官方地址：福建莆田市城厢区龙桥街道"
			}, {
				"name": "三迪国际公馆38层"
			}]

		}]
		const footerMenu = (
			<Container>
			 {footerMenuData.map((item, index) => 
			 	item.hasOwnProperty("info") ? <FooterMenuItem info={item.info} key={index} title={item.title} />:<FooterMenuItem menu={item.menu} key={index} title={item.title} />
			 	
			 )}
			</Container>
		)
		return <Row>
			
		</Row>;
	}
}

export default FooterMenu;