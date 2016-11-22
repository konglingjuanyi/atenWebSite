// We only need to import the modules necessary for initial render
import MobileLayout from '../../layouts/CoreLayout'
import Home from './Home'
import NearAtenRoute from './NearAten'
import NewsRoute from './news'
import SolutionRoute from './Solution'
import ServiceAreaRoute from './ServiceArea'
import MobileApplicationRoute from './MobileAppcalition'
import CustomerCaseRoute from './CustomerCase'
import ContactUsRoute from './ContactUs'
import PageNotFound from './PageNotFound'
import Redirect from './PageNotFound/redirect'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path: '/',
  component: MobileLayout,
  indexRoute: Home,
  childRoutes: [
    NearAtenRoute(store),
    NewsRoute(store),
    SolutionRoute(store),
    ServiceAreaRoute(store),
    SolutionRoute(store),
    MobileApplicationRoute(store),
    CustomerCaseRoute(store),
    ContactUsRoute(store),
    PageNotFound(),
    Redirect
  ]
})

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes