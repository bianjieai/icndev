import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import vuescroll from "vuescroll";
import iconfont from "./public/iconfont/iconfont.css"
import locale from 'element-ui/lib/locale/lang/en'
export default async ({Vue,isServer,router}) => {
    Vue.use(Element);
    Vue.use(router);
    if(!isServer){
        router.beforeEach((to,from,next) => {
            console.log(to,from)
            if(to.path === '/'){
                next('/gon')
            }else {
                next()
            }
        })
        await import("axios").then(module => {
            console.log(module)
            Vue.prototype.$axios = module.default
        })
        await import('element-ui').then(module => {
            Vue.use(module.default,{locale})
        }).catch(e => {
            console.log(e, 'element-ui error ')
        })
        await import("./public/iconfont/iconfont").then(module => {
            console.log(module, 'module ')
        })
        await import('vuescroll').then(module => {
            Vue.use(module.default)
        }).catch(e => {

        })
    }
}