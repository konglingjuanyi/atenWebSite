import {
	connect
}
from 'react-redux'
import {
	increment, doubleAsync
}
from '../modules/customerCase'

import CustomerCase from '../components/CustomerCase'

const mapDispatchToProps = {
	increment: () => increment(1),
	doubleAsync
}

const mapStateToProps = (state) => ({
	customerCase: state.customerCase
})


export default connect(mapStateToProps, mapDispatchToProps)(CustomerCase)