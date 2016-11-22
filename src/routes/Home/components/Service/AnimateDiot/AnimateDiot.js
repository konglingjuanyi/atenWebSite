import React from 'react'
import TweenOne from 'rc-tween-one'
class AnimateDiot extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Aniamte1';
    this.moment = 0;
    this.animation = this.props.animatestyle;
    this.state = this.props.animatestate;
  }
  render() {
    return <TweenOne
                  animation={this.animation}
                  paused={this.state.paused}
                  onChange={this.onChange}
                  moment={this.state.moment}
                  style={{ transform: 'scale(1)', left: '25px' }}
                  className={this.props.className}
                />;
  }
}
AnimateDiot.defaultProps = {
  className: "ui-fn-diot-left",
  animatestyle: {
    left: '100px',
    duration: 1000
  },
  animatestate: {
    paused: false,
    reverse: false,
    moment: 0,
  }
}
AnimateDiot.propTypes = {
  children: React.PropTypes.any,
  className: React.PropTypes.string,
  paused: React.PropTypes.bool,
};

export default AnimateDiot;