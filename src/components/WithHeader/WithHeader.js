import React from 'react';

class WidthHeader extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'WidthHeader';
	}
	render() {
		const WidthHeaderStyle = {
			paddingTop: "80px",
		}
		return <div style={WidthHeaderStyle}></div>;
	}
}

export default WidthHeader;