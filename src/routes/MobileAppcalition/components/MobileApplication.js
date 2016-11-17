import React from 'react'


export const MobileApplication = (props) => (
  <div style={{ margin: '0 auto' }}>
    移动应用
  </div>
)

MobileApplication.propTypes = {
  mobileApplication: React.PropTypes.number.isRequired,
  doubleAsync: React.PropTypes.func.isRequired,
  increment: React.PropTypes.func.isRequired
}

export default MobileApplication