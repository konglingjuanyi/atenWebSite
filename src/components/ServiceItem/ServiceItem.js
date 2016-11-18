import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne, {
	TweenOneGroup
}
from 'rc-tween-one';

class ServiceItem extends React.Component {
	static propTypes = {
		className: React.PropTypes.string,
	};

	static defaultProps = {
		className: 'pic-details-demo',
	};

	constructor(props) {
		super(props);
		this.state = {
			picOpen: {},
		};
	}


	render() {
		return <div>1</div>

	}
}
export default ServiceItem;