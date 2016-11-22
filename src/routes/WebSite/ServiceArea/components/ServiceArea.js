import React from 'react'

export const ServiceArea = (props) => (
  <div style={{ margin: '0 auto' }}>
      服务范围
  </div>
)

ServiceArea.propTypes = {
  serviceArea: React.PropTypes.number.isRequired,
  doubleAsync: React.PropTypes.func.isRequired,
  increment: React.PropTypes.func.isRequired
}

export default ServiceArea