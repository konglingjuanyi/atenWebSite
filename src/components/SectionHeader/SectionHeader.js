import React from 'react';
import './SectionHeader.scss'


class SectionHeader extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'SectionHeader';
	}
	render() {
		const titleStyle = {
			"color": this.props.change ? "#fff" : "#595757",
			"fontSize": "28px"
		}
		let style = this.props.change ? {
			color: "#fff"
		} : {

		}
		return <div className="ui-fn-center">
				<h3 style={titleStyle}>{this.props.title}</h3>
				<div className="section-header-line"></div>
				<p className="section-header-text" style={
					style
				}>{this.props.text}</p>
			</div>;
	}
}

export default SectionHeader;