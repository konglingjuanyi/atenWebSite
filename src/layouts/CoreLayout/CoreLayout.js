import React from 'react'

import './CoreLayout.scss'
import '../../styles/core.scss'
import {
	BackTop
}
from 'antd';

import Header from '../../components/Header'

import Footer from '../../components/Footer'

export const CoreLayout = ({
	children
}) => (
	<div className="ui-pc-container">
		<div className="ui-pc-headercontainer">
			<Header />
		 </div>
		{children}
		<BackTop />
		<Footer />
	</div>
)

CoreLayout.propTypes = {
	children: React.PropTypes.element.isRequired
}

export default CoreLayout