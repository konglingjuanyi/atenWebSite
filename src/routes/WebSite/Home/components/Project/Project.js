import React, {
	Component
}
from 'react';
import SliderItem from './SliderItem'

class Project extends Component {
	constructor(props) {
		super(props);
		this.displayName = 'Project';
	}
	componentDidMount() {
		console.log(this.refs.projectbanner);
	}
	render() {
		return <div style={{ position: 'relative', width: '100%',marginTop: '45px', marginBottom: '30px', zIndex: "10"}}>
			<SliderItem ref="projectbanner" key="a" className="ui-pc-project-banneritem active" />
			<SliderItem key="b" />
			<SliderItem key="c" />
			<SliderItem key="d" />
		</div>
	}
}

export default Project;