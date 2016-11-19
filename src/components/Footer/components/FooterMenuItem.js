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
				{this.props.menu ? this.props.menu.map((item, index) => 
					<li key={index}><Link to={item.path}>{item.name}</Link></li>
				): this.props.info.map((item, index) => 
					<li key={index}><p>{item.name}</p></li>
				)}
			</ul>
		</Col>;
	}
}

export default FooterMenuItem;