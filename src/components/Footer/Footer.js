import React from 'react';

import CopyRight from './components/CopyRight'
import FooterMenu from './components/FooterMenu'
import './Footer.scss'

class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'Footer';
	}
	render() {
		return <div className="ui-pc-footer"> 
				<FooterMenu />
				<div className="ui-pc-copyright">
					<CopyRight />
				</div>
			</div>
	}
}

export default Footer;