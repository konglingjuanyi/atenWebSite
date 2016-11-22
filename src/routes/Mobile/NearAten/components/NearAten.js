import React from 'react'

export const NearAten = (props) => (
  <div style={{ margin: '0 auto' }}>
      走进艾腾
  </div>
)

NearAten.propTypes = {
  nearAten: React.PropTypes.number.isRequired,
  doubleAsync: React.PropTypes.func.isRequired,
  increment: React.PropTypes.func.isRequired
}

export default NearAten