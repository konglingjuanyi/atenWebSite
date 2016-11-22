import {
  injectReducer
}
from '../../../store/reducers'

export default (store) => ({
  path: 'customerCase',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const CustomerCaseContainer = require('./containers/CustomerCaseContainer').default
      const reducer = require('./modules/customerCase').default

      injectReducer(store, {
        key: 'customerCase',
        reducer
      })

      cb(null, CustomerCaseContainer)

    }, 'customerCase')
  }
})