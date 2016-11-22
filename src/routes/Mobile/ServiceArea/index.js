import {
  injectReducer
}
from '../../../store/reducers'

export default (store) => ({
  path: 'serviceArea',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const ServiceAreaContainer = require('./containers/ServiceAreaContainer').default
      const reducer = require('./modules/serviceArea').default

      injectReducer(store, {
        key: 'serviceArea',
        reducer
      })
      cb(null, ServiceAreaContainer)

    }, 'serviceArea')
  }
})