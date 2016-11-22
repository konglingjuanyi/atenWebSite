import React, {
  Component
}
from 'react'
import classes from './PageNotFound.scss'
import {
  withRouter
}
from 'react-router'

class PageNotFound extends Component {
  render() {
    const props = this.props
    return (
      <div className={classes.container}>
        当前页面不存在 404
      </div>
    )
  }
}

PageNotFound.propTypes = {
  router: React.PropTypes.object.isRequired
}

export default withRouter(PageNotFound)