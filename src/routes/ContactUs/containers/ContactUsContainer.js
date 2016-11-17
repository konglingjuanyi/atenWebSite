import {
	connect
}
from 'react-redux'
import {
	increment, doubleAsync
}
from '../modules/contactUs'


import ContactUs from '../components/ContactUs'

const mapDispatchToProps = {
	increment: () => increment(1),
	doubleAsync
}

const mapStateToProps = (state) => ({
	contactUs: state.contactUs
})
export default connect(mapStateToProps, mapDispatchToProps)(ContactUs)