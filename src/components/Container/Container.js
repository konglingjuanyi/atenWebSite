import React from 'react';
import './Container.scss'

class Container extends React.Component {
	static defaultProps = {
		cls: "ui-container-1200"
	}
	constructor(props) {
		super(props);
		this.displayName = 'Container';
	}
	render() {
		return <div className={this.props.cls}>Container</div>;
	}
}

export default Container;