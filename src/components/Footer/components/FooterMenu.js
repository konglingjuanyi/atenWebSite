import React from 'react';
import Container from '../../Container'
import {
	Row, Col
}
from 'antd'
import {
	Link
}
from 'react-router'
import LogoImg from '../../Header/logo.png'

class FooterMenu extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'FooterMenu';
	}
	render() {

		return <Container>
				<Row>
					<Col span={4}>
						<h3 className="ui-pc-footer-menuhead">关于我们</h3>
						<ul>
							<li><Link to="" title="公司简介">公司简介</Link></li>
							<li><Link to="" title="企业文化">企业文化</Link></li>
							<li><Link to="" title="发展历程">发展历程</Link></li>
							<li><Link to="" title="资质证书">资质证书</Link></li>
						</ul>
					</Col>
					<Col span={4}>
						<h3 className="ui-pc-footer-menuhead">客户案例</h3>
						<ul>
							<li><Link to="" title="企业网站">企业网站</Link></li>
							<li><Link to="" title="商城网站">商城网站</Link></li>
							<li><Link to="" title="管理系统">管理系统</Link></li>
							<li><Link to="" title="微信平台">微信平台</Link></li>
						</ul>
					</Col>
					<Col span={4}>
						<h3 className="ui-pc-footer-menuhead">服务范围</h3>
						<ul>
							<li><Link to="" title="网站建设">网站建设</Link></li>
							<li><Link to="" title="系统开发">系统开发</Link></li>
							<li><Link to="" title="微信营销">微信营销</Link></li>
							<li><Link to="" title="移动APP">移动APP</Link></li>
						</ul>
					</Col>
					<Col span={6}>
						<h3 className="ui-pc-footer-menuhead">联系我们</h3>
						<ul>
							<li title="微信公众号：艾腾软件">微信公众号：艾腾软件</li>
							<li title="官方地址：福建省莆田市城厢区龙桥街道">官方地址：福建省莆田市城厢区龙桥街道</li>
							<li title="三迪国际公馆38层">三迪国际公馆38层</li>
						</ul>
					</Col>
					<Col span={6}>
						<div className="padding-left-50" style={{
							marginBottom: "10px"
						}}><a className="ui-pc-footer-online">在线客服</a></div>
						<ul>
							<li>咨询热线：0594-2201192</li>
							<li>咨询邮箱：749339425@QQ.com</li>
						</ul>
						<div className="padding-left-50">
							<img src={LogoImg} className=""></img>
						</div>
					</Col>
				</Row>
			</Container>;
	}
}

export default FooterMenu;