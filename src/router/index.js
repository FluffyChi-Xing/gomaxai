//导入路由
import {createRouter,createWebHistory} from "vue-router";
import Login from "@/components/Login/Login.vue";
import Background from "@/components/Home/Background.vue";
import MyOffice from "@/components/aioffice/MyOffice.vue";
import Hot from "@/components/aioffice/hot/Hot.vue";
import Enlightenment from "@/components/enlightenment/Enlightenment.vue";
import UniverseFamily from "@/components/family/UniverseFamily.vue";
import MyLife from "@/components/life/MyLife.vue";
import AGround from "@/components/ground/AGround.vue";
import Registered from "@/components/registered/Registered.vue";
import Account from "@/components/aioffice/account/Account.vue";

//创建路由
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [

        {
            path: '/',
            component: Background
        },
        {
            path: '/404',
            component: () => import('@/views/404/404notfound.vue'),
            hidden: true
        },
        {
            path: '/login',
            component: Login
        },
        {
          path: '/office',
          component: MyOffice,
        },
        {
          path: '/office',
          component: MyOffice,
            children: [
                {
                    path: '/hot',
                    component: Hot
                }
            ]
        },
        {
            path: '/office',
            component: MyOffice,
            children: [
                {
                    path: '/account',
                    component: Account
                }
            ]
        },
        {
          path: '/school',
          component: Enlightenment
        },
        {
            path: '/family',
            component: UniverseFamily
        },
        {
          path: '/life',
          component: MyLife
        },
        {
          path: '/ground',
          component: AGround
        },
        {
          path: '/endoll',
          component: Registered
        },
        {
            path: '/:catchAll(.*)',
            redirect: '/404',
            hidden: true
        }
    ]
})
export default router