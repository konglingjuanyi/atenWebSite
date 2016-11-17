import React from 'react'

export const ContactUs = (props) => (
  <div style={{ margin: '0 auto' }}>
    联系我们
  </div>
)

ContactUs.propTypes = {
  contactUs: React.PropTypes.number.isRequired,
  doubleAsync: React.PropTypes.func.isRequired,
  increment: React.PropTypes.func.isRequired
}

export default ContactUs