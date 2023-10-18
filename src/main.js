import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue';
import router from "@/router/index";
import elementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import {createPinia} from "pinia";
import 'vant/lib/index.css'
import {VantResolver} from "@vant/auto-import-resolver";


const app = createApp(App)
const Vant = VantResolver

app.use(createPinia())
app.use(router)
app.use(elementPlus)
app.use(Vant)


app.mount('#app')
