import React from 'react';
import {
	Col
}
from 'antd'
import {
	Link
}
from 'react-router'
class FooterMenuItem extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'FooterMenuItem';
	}
	render() {
		return <Col span={2}>
			<h3 className="ui-pc-footer-menuhead">{this.props.title}</h3>
			<ul>
				{this.props.menu.map((item) => 
					<li><Link to={item.path}>{item.name}</Link></li>
				)}
			</ul>
		</Col>;
	}
}

export default FooterMenuItem;