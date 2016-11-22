import React from 'react';

class AnimateInfo extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'AnimateInfo';
	}
	render() {
		return <div className="ui-animate-item">
			<h3>{this.props.title}</h3>
			<p>{this.props.info}</p>
		</div>;
	}
}
AnimateInfo.propTypes = {
	childrenComponents: React.PropTypes.string
}
export default AnimateInfo;