import React from 'react'

import QueueAnim from 'rc-queue-anim';
import ServiceItem from '../../../../components/ServiceItem'
import {
  serviceUrl
}
from '../../../../constants'

class Service extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Service';
  }
  componentWillMount() {
    fetch('../../modules/service.json').then(function(response) {
      console.log(response);
    })
  }
  render() {
    return <QueueAnim key="queue"
          leaveReverse={true}
          style={{ float: 'left', position: 'relative', left: '50%', marginLeft: -165 }}
        >
          <div key="a" className="code-box-shape queue-anim-demo" />
          <div key="b" className="code-box-shape queue-anim-demo" />
          <div key="c" className="code-box-shape queue-anim-demo" />
          <div key="d" className="code-box-shape queue-anim-demo" />
          <div key="e" className="code-box-shape queue-anim-demo" />
          <div key="f" className="code-box-shape queue-anim-demo" />
    </QueueAnim>
  }
}


export default Service