import React from 'react';
import BannerAnim from 'rc-banner-anim';
import TweenOne, {
  TweenOneGroup
}
from 'rc-tween-one';
import carousel1 from '../carousel1.png'
import carousel2 from '../carousel2.png'
import 'rc-banner-anim/assets/index.css';
const {
  Element, Arrow, Thumb
} = BannerAnim;
const BgElement = Element.BgElement;
class AtCarousel extends React.Component {
  constructor() {
    super(...arguments);
    this.imgArray = [
      carousel1,
      carousel2
    ];
    this.state = {
      intShow: 0,
      prevEnter: false,
      nextEnter: false,
      thumbEnter: false,
    };
    [
      'onChange',
      'prevEnter',
      'prevLeave',
      'nextEnter',
      'nextLeave',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  onChange(type, int) {
    if (type === 'before') {
      this.setState({
        intShow: int,
      });
    }
  }

  getNextPrevNumber() {
    let nextInt = this.state.intShow + 1;
    let prevInt = this.state.intShow - 1;
    if (nextInt >= this.imgArray.length) {
      nextInt = 0;
    }
    if (prevInt < 0) {
      prevInt = this.imgArray.length - 1;
    }

    return [prevInt, nextInt];
  }

  prevEnter() {
    this.setState({
      prevEnter: true,
    });
  }

  prevLeave() {
    this.setState({
      prevEnter: false,
    });
  }

  nextEnter() {
    this.setState({
      nextEnter: true,
    });
  }

  nextLeave() {
    this.setState({
      nextEnter: false,
    });
  }

  render() {
    const intArray = this.getNextPrevNumber();
    const thumbChildren = this.imgArray.map((img, i) =>
      <span key={i}><i style={{ backgroundImage: `url(${img})` }} /></span>
    );
    return (
      <BannerAnim
        autoPlay={true}
        onChange={this.onChange} 
        prefixCls="custom-arrow-thumb"
      >
        <Element key="aaa"
          prefixCls="banner-user-elem"
          followParallax={{
            delay: 5000,
            data: [
              { id: 'bg', value: 10, bgPosition: '50%', type: ['backgroundPositionX'] },
              { id: 'title', value: 50, type: 'x' },
              { id: 'content', value: -30, type: 'x' },
            ],
          }}
        >
          <BgElement
            key="bg"
            className="bg"
            id="bg"
            style={{
              height: '100%',
              backgroundImage: `url(${this.imgArray[0]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <TweenOne className="banner-user-title first" animation={{ y: 30, opacity: 0, type: 'from' }} id="title">
            创意设计
          </TweenOne>
          <TweenOne 
            className="banner-user-text first" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
             id="content"
          >
            Originality
            </TweenOne>
        </Element>
        <Element key="bbb"
          prefixCls="banner-user-elem"
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              height: '100%',
              backgroundImage: `url(${this.imgArray[1]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <TweenOne className="banner-user-title second" animation={{ y: 30, opacity: 0, type: 'from' }}>
            客户服务
          </TweenOne>
          <TweenOne 
            className="banner-user-text second" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            service
          </TweenOne>
          <TweenOne 
            className="banner-user-text info" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 200 }}
          >
            为客户提供良好的服务，并考虑客户的实际情况，为客户提供个性化的、最适合您的服务。
          </TweenOne>
          <TweenOne 
            className="banner-user-text info" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 300 }}
          >
            <span style={
              {"color": "#999999"}
            }>To provide customers with good service, and consider the actual situation of customers, <br />
            to provide customers with personalized, the most suitable for your service.</span>
          </TweenOne>
        </Element>
        <Arrow arrowType="prev" key="prev" prefixCls="user-arrow" component={TweenOne}
          onMouseEnter={this.prevEnter}
          onMouseLeave={this.prevLeave}
          animation={{ left: this.state.prevEnter ? 0 : -120 }}
        >
          <div className="arrow"></div>
          <TweenOneGroup 
            enter={{ opacity: 0, type: 'from' }} 
            leave={{ opacity: 0 }} 
            appear={false} 
            className="img-wrapper" component="ul"
          >
            <li style={{ backgroundImage: `url(${this.imgArray[intArray[0]]})`}} key={intArray[0]} />
          </TweenOneGroup>
        </Arrow>
        <Arrow arrowType="next" key="next" prefixCls="user-arrow" component={TweenOne}
          onMouseEnter={this.nextEnter}
          onMouseLeave={this.nextLeave}
          animation={{ right: this.state.nextEnter ? 0 : -120 }}
        >
          <div className="arrow"></div>
          <TweenOneGroup 
            enter={{ opacity: 0, type: 'from' }} 
            leave={{ opacity: 0 }} 
            appear={false} 
            className="img-wrapper" 
            component="ul"
          >
            <li style={{ backgroundImage: `url(${this.imgArray[intArray[1]]})`}} key={intArray[1]} />
          </TweenOneGroup>
        </Arrow>
      </BannerAnim>
    );
  }
}
export default AtCarousel;