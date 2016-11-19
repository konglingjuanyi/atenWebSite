import React from 'react'

import './CoreLayout.scss'
import '../../styles/core.scss'
import {
	BackTop
}
from 'antd';

import Header from '../../components/Header'

export const CoreLayout = ({
	children
}) => (
	<div className="ui-pc-headercontainer">
		<Header />
		{children}
		<BackTop />
	 </div>
)

CoreLayout.propTypes = {
	children: React.PropTypes.element.isRequired
}

export default CoreLayout