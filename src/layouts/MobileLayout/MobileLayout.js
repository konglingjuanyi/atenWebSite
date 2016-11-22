import React from 'react'

import './MobileLayout.scss'
import '../../styles/core.scss'
import {
	BackTop
}
from 'antd';

export const MobileLayout = ({
	children
}) => (
	<div className="ui-mobile-container">
		{children}
		<BackTop />
	</div>
)

MobileLayout.propTypes = {
	children: React.PropTypes.element.isRequired
}

export default MobileLayout