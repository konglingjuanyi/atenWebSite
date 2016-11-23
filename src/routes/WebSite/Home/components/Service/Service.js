import React from 'react'

import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import ServiceItem from '../../../../../components/ServiceItem'
import {
  serviceUrl
}
from '../../../../../constants'

import {
  Row, Col
}
from 'antd'
import Animate1 from './Animate1'
import AnimateInfo from './AnimateInfo'
import AnimateDiot from './AnimateDiot'

import AnimateImg1 from '../../assets/animate-1.png'
import AnimateImg2 from '../../assets/animate-2.png'
import AnimateImg3 from '../../assets/animate-3.png'
import AnimateImg4 from '../../assets/animate-4.png'

class Service extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Service';

  }

  render() {
    const styleConfig = [{
        left: "31px"
      },

      [{
        left: "112px",
        duration: 1000
      }, {
        scale: 1.2
      }, {
        scale: 1
      }],

      [{
        left: "112px",
        duration: 1000
      }, {
        top: "109px",
        reverseDelay: 1000,
        duration: 1000
      }, {
        scale: 1.2
      }, {
        scale: 1
      }],

      [{
        left: "112px",
        duration: 1000
      }, {
        top: "109px",
        reverseDelay: 1000,
        duration: 1000
      }, {
      left: "31px",
        reverseDelay: 1000,
        duration: 2000
      }, {
        scale: 1.2
      }, {
        scale: 1
      }]
    ]
    const Diot = styleConfig.map((item, index) =>
      <AnimateDiot animatestyle={item} key={index}></AnimateDiot>
    );

    return <QueueAnim key="queue"
            leaveReverse={true}
            type="bottom"
            duration={700}
            interval={200}
            animConfig={{opacity:[1, 0],translateY:[0, 50]}}
            style={{ float: 'left', position: 'relative', width: '100%',marginTop: '45px', marginBottom: '30px'}}
            >
            <Animate1 key="a" imgComponents={AnimateImg1} childrenComponents={AnimateInfo} childrenComponentsBar={Diot} title="网站建设 / 营销策划" info="策划、设计、制作、推广" />
            <Animate1 key="b" childrenComponents={AnimateInfo} title="微信营销 / 推广" info="注册 | 登录 | 编辑器" imgComponents={AnimateImg2} />
            <Animate1 key="c" childrenComponents={AnimateInfo} title="主机、域名、服务器" info="稳定、告诉、全能" imgComponents={AnimateImg3} />
            <Animate1 key="d" childrenComponents={AnimateInfo} title="软件 / APP移动端" info="打造安全、优质网站" imgComponents={AnimateImg4} />
        </QueueAnim>
  }
}

Service.propTypes = {
  children: React.PropTypes.any,
  className: React.PropTypes.string,
  paused: React.PropTypes.bool,
};

export default Service