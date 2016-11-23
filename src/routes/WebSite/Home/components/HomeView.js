import React from 'react'
import './HomeView.scss'
import SectionContainer from '../../../../components/SectionContainer/SectionContainer'
import Service from './Service'
import Project from './Project'
import QueueAnim from 'rc-queue-anim';
import AtCarousel from '../../../../components/Header/components/Carousel'

import {
	Element
}
from 'rc-scroll-anim'



class HomeView extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'HomeView';
	}
	render() {
		return <div>
			<AtCarousel />
			<QueueAnim delay={300} className="queue-simple">
		      	<Element id="SERVICE"><SectionContainer key="a" pageId="SERVICE" title="了解我们的服务项目" text="SERVICE ITEMS" childrenComponents={Service}/></Element>
		      	<Element id="PROJECT"><SectionContainer key="b" change={false} className="ui-fn-bg-weak" pageId="PROJECT" title="欣赏我们的项目案例" text="PROJECT CASE" childrenComponents={Project} /></Element>
		      	<Element id="MOBILE"><SectionContainer key="c" pageId="MOBILE" title="明白我们的移动开发" text="MOBILE DEVELOPMENT" childrenComponents={Service} /></Element>
		      	<Element id="SOLUTION"><SectionContainer key="d" change={true} className="ui-fn-bg-dark" pageId="SOLUTION" title="解析我们的解决方案" text="SOLUTION" childrenComponents={Service} /></Element>
		      	<Element id="NEWS"><SectionContainer key="e" pageId="NEWS" title="观看我们的新闻动态" text="NEWS" childrenComponents={Service} /></Element>
		      	<Element id="COOPERATIVE"><SectionContainer key="f" pageId="COOPERATIVE" title="围观我们的合作伙伴" text="COOPERATIVE PARTNER" childrenComponents={Service} /></Element>
			</QueueAnim>
		</div>;
	}
}

export default HomeView