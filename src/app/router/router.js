/*
 * file: routes.js
 * author: lxliang912
 * desc: 路由管理，用于组织路由列表
 * date: 2018/12/12
 */
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Login from '../pages/Login/Login'

/*
 * path: 路由配置路径
 * url: 路由请求路径
 */
export default [{
    'path': '/',
    'url': '/',
    'name': 'home',
    'component': Home
}, {
    'path': '/login/:id',
    'url': '/login',
    'name': 'login',
    'component': Login
}, {
    'path': '/about',
    'url': '/about',
    'name': 'about',
    'component': About
}]