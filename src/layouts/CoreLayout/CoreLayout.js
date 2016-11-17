import React from 'react'
import Header from '../../components/Header'
import './CoreLayout.scss'
import '../../styles/core.scss'
import {
	BackTop
}
from 'antd';
import AtCarousel from '../../components/Header/components/Carousel'

export const CoreLayout = ({
	children
}) => (
	<div className="ui-pc-headercontainer">
		<Header />
		<AtCarousel />
		<div className='container'>
		    <div className='core-layout__viewport'>
		      {children}
		    </div>
		</div>
		<BackTop />
	 </div>
)

CoreLayout.propTypes = {
	children: React.PropTypes.element.isRequired
}

export default CoreLayout