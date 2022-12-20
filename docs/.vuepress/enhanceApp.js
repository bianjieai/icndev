import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
export default async ({Vue,isServer,router}) => {
    Vue.use(Element);
    Vue.use(router);
    if(!isServer){
        router.beforeEach((to,from,next) => {
            if(to.path === '/'){
                next('/game-of-nfts-2023')
            }else {
                next()
            }
        })
        await import("axios").then(module => {
            console.log(module.default)
            Vue.use(module.default)
        })
        await import('element-ui').then(module => {
            Vue.use(module.default)
        }).catch(e => {
            console.log(e, 'element-ui error ')
        })
    }
}