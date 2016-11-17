import {
  injectReducer
}
from '../../store/reducers'

export default (store) => ({
  path: 'solution',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const SolutionContainer = require('./containers/SolutionContainer').default
      const reducer = require('./modules/solution').default

      injectReducer(store, {
        key: 'solution',
        reducer
      })
      cb(null, SolutionContainer)

    }, 'solution')
  }
})