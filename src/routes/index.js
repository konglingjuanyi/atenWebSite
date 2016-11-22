import Mobile from './Mobile'
import WebSite from './WebSite'
import DeviceSuports from '../lib/device'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */


export default DeviceSuports.desktop() ? WebSite : Mobile