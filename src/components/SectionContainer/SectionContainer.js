import React from 'react';

import ReactDoM from 'react-dom'

import SectionHeader from '../SectionHeader/SectionHeader'
import {
	OverPack
}
from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';

class SectionContainer extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'SectionContainer';
	}
	render() {
		const DEFAULT_CONFIG = {
			cls: "section-container",
		}
		return (
			<OverPack style={{ overflow: 'hidden', height: 400 }} 
		        hideProps={{ 0: { reverse: true } }}
		      	>
		        <TweenOne key="0" animation={{ opacity: 1 }}
		          style={{ opacity: 0, marginBottom: 10 }}
		        >
		        <div className={DEFAULT_CONFIG.cls}><SectionHeader title={this.props.title} text={this.props.text}/>{<this.props.childrenComponents />}</div>
		      	</TweenOne>
		    </OverPack>
		)
	}
}

export default SectionContainer;