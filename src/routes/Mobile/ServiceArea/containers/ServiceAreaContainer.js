import {
	connect
}
from 'react-redux'
import {
	increment, doubleAsync
}
from '../modules/serviceArea'

import ServiceArea from '../components/ServiceArea'


const mapDispatchToProps = {
	increment: () => increment(1),
	doubleAsync
}

const mapStateToProps = (state) => ({
	serviceArea: state.serviceArea
})


export default connect(mapStateToProps, mapDispatchToProps)(ServiceArea)