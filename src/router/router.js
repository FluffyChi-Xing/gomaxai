//导入路由
import {createRouter,createWebHistory} from "vue-router";
import Top from "@/components/infomation/Top.vue";

//创建路由
const router = createRouter({
    routes: [
        {path: '/Login',component: Top},
    ],
    history: createWebHistory(),
    linkActiveClass: 'LAC'
})
export default router