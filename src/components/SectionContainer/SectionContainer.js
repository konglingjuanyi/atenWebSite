import React from 'react'

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
			<OverPack style={{ overflow: 'hidden', height: 'auto', minHeight: '450px' }} 
		        hideProps={{ 0: { reverse: true } }}
		        playScale={0.15}
		      	>
		        <TweenOne key={this.props.key} animation={{ opacity: 1 }}
		          style={{ opacity: 0, marginBottom: 10 }}
		        >
		        <div className={DEFAULT_CONFIG.cls}><SectionHeader title={this.props.title} text={this.props.text}/>{<this.props.childrenComponents />}</div>
		      	</TweenOne>
		    </OverPack>
		)
	}
}

export default SectionContainer;