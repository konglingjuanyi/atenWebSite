import React from 'react'

import QueueAnim from 'rc-queue-anim';
import ServiceItem from '../../../../components/ServiceItem'
import {
  serviceUrl
}
from '../../../../constants'

import {
  Row, Col
}
from 'antd'
import Animate1 from './Animate1'
import AnimateInfo from './AnimateInfo'
import AnimateDiot from './AnimateDiot'

class Service extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Service';
  }
  render() {
    const styleArr = [{
        left: "25px"
      },

      [{
        left: "125px",
        duration: 1000
      }, {
        scale: 1.2
      }, {
        scale: 1
      }],

      [{
        left: "125px",
        duration: 1000
      }, {
        top: "125px",
        reverseDelay: 1000,
        duration: 1000
      }, {
        scale: 1.2
      }, {
        scale: 1
      }],

      [{
        left: "125px",
        duration: 1000
      }, {
        top: "125px",
        reverseDelay: 1000,
        duration: 1000
      }, {
        left: "25px",
        reverseDelay: 1000,
        duration: 2000
      }, {
        scale: 1.2
      }, {
        scale: 1
      }]
    ]
    return <QueueAnim key = "queue"
            leaveReverse={true}
            type="bottom"
            style={{ float: 'left', position: 'relative', width: '100%',marginTop: '45px', marginBottom: '30px' }}
            >
            <Animate1 childrenComponents={AnimateInfo} childrenComponentsBar={styleArr.map((item) => 
                <AnimateDiot animatestyle={item} />
            )} title="网站建设 / 营销策划" info="策划、设计、制作、推广" />
            <Animate1 childrenComponents={AnimateInfo} title="网站建设 / 营销策划" info="策划、设计、制作、推广" />
        </QueueAnim>
  }
}

Service.propTypes = {
  children: React.PropTypes.any,
  className: React.PropTypes.string,
  paused: React.PropTypes.bool,
};

export default Service