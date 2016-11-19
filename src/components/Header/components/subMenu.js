import React from 'react';
import {
	IndexLink, Link
}
from 'react-router'

import {
	Menu, Dropdown, Icon, Row, Col
}
from 'antd';
import {
	MENU_DATA
}
from '../menuData/menuData'
import Views from '../../Views/Views'
import ChildrenMenu from './childrenMenu'

import MenuTitle from './MenuTitle'

import {
	addListenEvent
}
from '../../../constants'

class OverlayVisible extends React.Component {
	state = {
		visible: false,
	}
	handleMenuClick(e) {
		if (e.key === '3') {
			this.setState({
				visible: false
			});
		}
	}
	handleVisibleChange(flag) {
		this.setState({
			visible: flag
		});

	}
	render() {
		const upIconStyle = {
			"color": "#f6f6f6",
			"fontSize": "20px",
			"position": "absolute",
			"bottom": "20px",
		}
		const menu = (
			<Menu onClick={this.handleMenuClick.bind(this)}>
				{this.props.subMenuArr.map((items, index) =>
	 				<Menu.Item key={items.key}>
			        	<Row>
			        		<Col span={3}>
			        			<MenuTitle title={items.title} />
			        		</Col>
			        		<Col span={21}>
			        			{items.items.map((sub, index) => 
									<Link className="ant-menu-items-link" key={sub.key} to={sub.path}>{sub.name}</Link>
			        			)}
			        		</Col>
			        	</Row>
			        </Menu.Item>
				)}
			</Menu>
		)
		if (this.props.path === "/") {
			return <li>
			        <a className="ant-dropdown-link" href="#">
			          	{this.props.name}
			        	<span></span>
			        </a>
				</li>;
		} else {
			return <li>
					<Dropdown overlay={menu}
						align={{"adjustY": "0"}}
				        onVisibleChange={this.handleVisibleChange.bind(this)}
				        visible={this.state.visible}
				        trigger={['click']}
				        style={{
				        	"top": "0"
				        }}>
				        <a className="ant-dropdown-link" href="#">
				          	{this.props.name}<Icon type="down" />
				        	<span></span>
				        </a>
				    </Dropdown>
				</li>;
		}
	}
};

class SubMenu extends React.Component {
	render() {
		const menu = MENU_DATA.map((item, index) =>
			<OverlayVisible key={index} name={item.name} path={item.path} subMenuArr={item.subMenu} />
		)
		return <ul className="ui-pc-header-menu">{menu}</ul>;
	}
}



export default SubMenu;