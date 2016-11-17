import {
  injectReducer
}
from '../../store/reducers'

export default (store) => ({
  path: 'contactUs',
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const ContactUsContainer = require('./containers/ContactUsContainer').default
      const reducer = require('./modules/contactUs').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, {
        key: 'contactUs',
        reducer
      })

      /*  Return getComponent   */
      cb(null, ContactUsContainer)

      /* Webpack named bundle   */
    }, 'contactUs')
  }
})