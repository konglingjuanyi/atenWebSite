import {
	connect
}
from 'react-redux'
import {
	increment, doubleAsync
}
from '../modules/mobileApplication'

import MobileApplication from '../components/MobileApplication'

const mapDispatchToProps = {
	increment: () => increment(1),
	doubleAsync
}

const mapStateToProps = (state) => ({
	mobileApplication: state.mobileApplication
})

export default connect(mapStateToProps, mapDispatchToProps)(MobileApplication)