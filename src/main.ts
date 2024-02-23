import { createApp } from 'vue'
import App from './App.vue'
import router from "@/plugins/router"
import Antd from "ant-design-vue"
import i18n from "@/plugins/i18n"
import "@/plugins/yup"

import './styles/utilities.css'
import './styles/additionnal.css'

const app = createApp(App)
    .use(Antd)
    .use(router)
    .use(i18n)

app.mount('#app')
