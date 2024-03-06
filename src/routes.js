import {createRouter, createWebHashHistory} from 'vue-router';
import CreatePage from './views/CreatePage.vue';
import PageViewer from './views/PageViewer.vue';
import Pages from './views/Pages.vue';
import PagesList from './views/PagesList.vue';
import PageEdit from './views/PageEdit.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        // Make PageViewer have optional URL param idx, with '?'
        { 
            path: '/:idx?', 
            component: PageViewer, 
            props: true 
        },
        { 
            path: '/pages', 
            component: Pages, 
            children: [
                { path: '', component: PagesList },
                { path: 'create', component: CreatePage },
                { path: ':idx/edit', component: PageEdit, props: true },
            ],
            props: true 
        },




        { path: '/create', component: CreatePage },
        
    ]
});

export default router;