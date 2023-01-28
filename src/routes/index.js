import { HeaderOnly } from '~/component/Layout'
import Home from '~/page/Home';
import Following from '~/page/Following';
import Profile from '~/page/Profile';
import Upload from '~/page/Upload';

// router không phải đăng nhập
const pulicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
]

// router phải đăng nhập
const privateRoutes = [

]

export { pulicRoutes, privateRoutes }