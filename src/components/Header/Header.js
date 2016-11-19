import React from 'react'
import {
  Link
}
from 'react-router'
import {
  Affix, Icon
}
from 'antd';
import SubMenu from './components/subMenu'
import './Header.scss'
import LogoImg from './logo.png'


const Logo = () => (
  <div className="ui-pc-logo">
      <h1><Link to="/"><img className="img-responsive" src={LogoImg}></img></Link></h1>
  </div>
)

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Header';
  }
  render() {
    return <Affix> 
          <div className="ui-pc-header">
            <div className="container clearfix">
              <Logo />
              <SubMenu />
            </div>
          </div>
        </Affix>;
  }
}

export default Header;



/*
<Link to='/counter' activeClassName='route--active'>走进艾腾</Link>
<Link to='/zen' activeClassName='route--active'>新闻动态</Link>
<Link to='/elapse' activeClassName='route--active'></Link>
<Link to='/route/88' activeClassName='route--active'></Link>
<Link to='/notFound' activeClassName='route--active'></Link>
*/