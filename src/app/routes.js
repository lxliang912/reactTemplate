/*
 * file: routes.js
 * author: lxliang912
 * desc: 路由管理，用于组织路由列表
 * date: 2018/12/12
 */
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Login from './pages/Login/Login'

export default [{
    'path': '/',
    'component': Home
}, {
    'path': '/login',
    'component': Login
}, {
    'path': '/about',
    'component': About
}]