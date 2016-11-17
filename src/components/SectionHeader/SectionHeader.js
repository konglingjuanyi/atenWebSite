import React from 'react';
import './SectionHeader.scss'


class SectionHeader extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'SectionHeader';
	}
	render() {
		const titleStyle = {
			"color": "#595757",
			"font-size": "28px"
		}
		return <div className="ui-fn-center">
				<h3 style={titleStyle}>{this.props.title}</h3>
				<div className="section-header-line"></div>
				<p className="section-header-text">{this.props.text}</p>
			</div>;
	}
}

export default SectionHeader;