import React from 'react';

class CopyRight extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'CopyRight';
	}
	render() {
		const CopyRightStyle = {
			marginRight: "20px"
		}
		return <p className="">
		<span>COPYRIGHT</span>
		<span>©</span>
		<span>2010-2015</span>
		<span>莆田市艾腾软件优先公司</span>
		<span style={CopyRightStyle}>版权所有</span>
		<span>备案号：闽ICP备15002657号</span>
	</p>;
	}
}

export default CopyRight;