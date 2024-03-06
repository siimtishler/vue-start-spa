import { createApp } from "vue";
import App from './App.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import $eventBus from './utils/Events';
import router from './routes';
import $pages from './data.js';


const app = createApp(App)

app.use(router);

app.config.globalProperties.$eventBus = $eventBus;
// app.config.globalProperties.$pages = $pages;

app.provide('$pages', $pages);


app.mount('#app');