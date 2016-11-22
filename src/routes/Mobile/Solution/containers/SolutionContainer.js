import {
  connect
}
from 'react-redux'
import {
  increment, doubleAsync
}
from '../modules/solution'

import Solution from '../components/Solution'


const mapDispatchToProps = {
  increment: () => increment(1),
  doubleAsync
}

const mapStateToProps = (state) => ({
  solution: state.solution
})

export default connect(mapStateToProps, mapDispatchToProps)(Solution)