import React from 'react'

export const CustomerCase = (props) => (
	<div style={{ margin: '0 auto' }}>
      客户案例
  </div>
)

CustomerCase.propTypes = {
	customerCase: React.PropTypes.number.isRequired,
	doubleAsync: React.PropTypes.func.isRequired,
	increment: React.PropTypes.func.isRequired
}

export default CustomerCase