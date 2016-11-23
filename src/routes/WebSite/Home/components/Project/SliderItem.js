import React from 'react';
import Projectbanner1 from '../../assets/project1.jpg'


class SliderItem extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'SliderItem';
	}
	render() {
		const {
			className
		} = this.props
		return <div className={className? className: 'ui-pc-project-banneritem'}>
			<img src={Projectbanner1} alt="我们的项目轮播图" />
		</div>;
	}
}

export default SliderItem;