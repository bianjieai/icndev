import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
export default async ({Vue,isServer,router}) => {
    Vue.use(Element);
    if(!isServer){
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