import React from 'react'

export const Solution = (props) => (
  <div style={{ margin: '0 auto' }}>
      解决方案
  </div>
)

Solution.propTypes = {
  solution: React.PropTypes.number.isRequired,
  doubleAsync: React.PropTypes.func.isRequired,
  increment: React.PropTypes.func.isRequired
}

export default Solution