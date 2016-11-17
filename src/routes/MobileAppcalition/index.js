import {
  injectReducer
}
from '../../store/reducers'

export default (store) => ({
  path: 'mobileApplication',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const MobileApplicationContainer = require('./containers/MobileApplicationContainer').default
      const reducer = require('./modules/mobileApplication').default
      injectReducer(store, {
        key: 'mobileApplication',
        reducer
      })

      cb(null, MobileApplicationContainer)

    }, 'mobileAppcalition')
  }
})