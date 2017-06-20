import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
    mode: 'history',
    //base: '/test/', //配制“二级目录：localhost:8080/test/”
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        }
    ]
})
