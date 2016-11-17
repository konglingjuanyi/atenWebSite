import React from 'react'
import './HomeView.scss'
import SectionContainer from '../../../components/SectionContainer/SectionContainer'
import Service from './Service'
import QueueAnim from 'rc-queue-anim';


class HomeView extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'HomeView';
	}
	render() {
		return <QueueAnim delay={300} className="queue-simple">
	      	<SectionContainer key="a" title="了解我们的服务项目" text="SERVICE ITEMS" childrenComponents={Service}/>
	      	<SectionContainer key="b" title="欣赏我们的项目案例" text="PROJECT CASE" childrenComponents={Service} />
	      	<SectionContainer key="c" title="明白我们的移动开发" text="MOBILE DEVELOPMENT" childrenComponents={Service} />
	      	<SectionContainer key="d" title="解析我们的解决方案" text="SOLUTION" childrenComponents={Service} />
	      	<SectionContainer key="d" title="观看我们的新闻动态" text="NEWS" childrenComponents={Service} />
	      	<SectionContainer key="d" title="围观我们的合作伙伴" text="COOPERATIVE PARTNER" childrenComponents={Service} />
		</QueueAnim>;
	}
}

export default HomeView