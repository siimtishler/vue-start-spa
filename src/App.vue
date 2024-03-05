<template>
    <navbar
        :pages="pages"
        :active-page="activePage"
    ></navbar>

    <router-view>
        
    </router-view>

    <!-- :page on binditud componentis page-ga -->
    <!-- <page-viewer 
        v-if="pages.length > 0"
        :page="pages[activePage]"
    ></page-viewer>

    <create-page
        @page-created="pageCreated"
    ></create-page> -->
</template>

<script>
import PageViewer from './components/PageViewer.vue';
import Navbar from './components/Navbar.vue';
import CreatePage from './components/CreatePage.vue';

export default {
    components: {
        Navbar,
        PageViewer,
        CreatePage,
    },
    created() {
        this.getPages()

        this.$eventBus.$on('navbarLinkActivated', (idx) => {
            this.activePage = idx;
        });
    },
    data() {
        return {
            activePage: 0,
            pages: [],
        };
    }, 
    methods: {
        async getPages() {
            let res = await fetch('pages.json');
            let data = await res.json();

            this.pages = data;
        },
        pageCreated(pageObj) {
            this.pages.push(pageObj);
        }
    },
};
</script>