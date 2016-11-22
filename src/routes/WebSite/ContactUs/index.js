import {
  injectReducer
}
from '../../../store/reducers'

export default (store) => ({
  path: 'contactUs',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const ContactUsContainer = require('./containers/ContactUsContainer').default
      const reducer = require('./modules/contactUs').default

      injectReducer(store, {
        key: 'contactUs',
        reducer
      })

      cb(null, ContactUsContainer)

    }, 'contactUs')
  }
})