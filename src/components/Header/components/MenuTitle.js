import React from 'react';
import {
	Icon
}
from 'antd';

export default class MenuTitle extends React.Component {
	render() {
		const iconStyle = {
			"color": "#fff",
			"font-size": "16px",
			"margin-left": "10px",
			"top": "2px",
			"position": "relative"
		}
		return (
			<div className="ant-dropdown-menu-item-title">
				{this.props.title}
				<Icon type="right" style={iconStyle} className="animate" />
			</div>
		);
	}
};