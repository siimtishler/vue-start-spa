import {createRouter, createWebHashHistory} from 'vue-router';
import CreatePage from './components/CreatePage.vue';
import PageViewer from './components/PageViewer.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        // Make PageViewer have optional URL param idx, with '?'
        { path: '/:idx?', component: PageViewer, props: true },
        { path: '/create', component: CreatePage },
        
    ]
});

export default router;