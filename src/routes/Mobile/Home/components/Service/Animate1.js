import React from 'react';

class Animate1 extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Animate1';
  }
  render() {
    return <div key="a" className="code-box-shape queue-anim-demo">
              <div className="box-animate-1">
                {this.props.childrenComponentsBar}
              </div>
              {<this.props.childrenComponents info={this.props.info} title={this.props.title} />}
            </div>
  }
}

export default Animate1;