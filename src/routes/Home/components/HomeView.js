import React from 'react'
import './HomeView.scss'
import SectionContainer from '../../../components/SectionContainer/SectionContainer'
import Service from './Service'
import Project from './Project'
import QueueAnim from 'rc-queue-anim';
import AtCarousel from '../../../components/Header/components/Carousel'

class HomeView extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'HomeView';
	}
	render() {
		return <div>
		<AtCarousel />
		<div className='container'>
		    <div className='core-layout__viewport'>
				<QueueAnim delay={300} className="queue-simple">
			      	<SectionContainer key="a" pageId="SERVICE" title="了解我们的服务项目" text="SERVICE ITEMS" childrenComponents={Service}/>
			      	<SectionContainer key="b" pageId="PROJECT" title="欣赏我们的项目案例" text="PROJECT CASE" childrenComponents={Project} />
			      	<SectionContainer key="c" pageId="MOBILE" title="明白我们的移动开发" text="MOBILE DEVELOPMENT" childrenComponents={Service} />
			      	<SectionContainer key="d" pageId="SOLUTION" title="解析我们的解决方案" text="SOLUTION" childrenComponents={Service} />
			      	<SectionContainer key="e" pageId="NEWS" title="观看我们的新闻动态" text="NEWS" childrenComponents={Service} />
			      	<SectionContainer key="f" pageId="COOPERATIVE" title="围观我们的合作伙伴" text="COOPERATIVE PARTNER" childrenComponents={Service} />
				</QueueAnim>
		    </div>
		</div>
		</div>;
	}
}

export default HomeView