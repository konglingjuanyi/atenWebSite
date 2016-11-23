import React from 'react'

import SectionHeader from '../SectionHeader/SectionHeader'
import {
	OverPack
}
from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
import Container from '../../components/Container'

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
			<div className={this.props.className?this.props.className : 'ui-fn-bg-white'}>
				<Container>
					<OverPack style={{ overflow: 'hidden', height: 'auto', minHeight: '450px' }} 
				        hideProps={{ 0: { reverse: true } }}
				        playScale={0.25}
				      	>
				        <TweenOne key={this.props.pageId} animation={{ opacity: 1, top: '20px' }}
				        	style={{ marginBottom: 10 }}
				        >
				        	<div className={DEFAULT_CONFIG.cls}><SectionHeader title={this.props.title} text={this.props.text} change={this.props.change} />{<this.props.childrenComponents />}</div>
				      	</TweenOne>
				    </OverPack>
			    </Container>
		    </div>
		)
	}
}

export default SectionContainer;