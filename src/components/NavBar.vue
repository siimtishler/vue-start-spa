<template>
    <!-- has to be ' ': 'navbar-light bg-light' because JS cant use '-' -->
    <nav :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']">
        <div class="container-fluid">
            <a href="#" class="navbar-brand">My Vue</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <navbar-link
                    v-for="(page, idx) in publishedPages" class="nav-item" :key="idx"
                    :page="page"
                    :idx="idx"
                ></navbar-link>

                <li>
                    <router-link
                        :to="`/pages`" 
                        class="nav-link"
                        aria-current="page"
                        active-class="active"
                    >Pages</router-link>
                </li>

            </ul>
            <form action="" class="d-flex">
                <button 
                    class="btn btn-primary"
                    :class="[`btn-${btnTheme}`]"
                    @click.prevent="changeTheme()"
                >{{ themeBtnText }}</button>
            </form>
        </div>
    </nav>
</template>

<script>
import NavbarLink from './NavbarLink.vue';
// const count = ref(0);

export default{
    components:{
        NavbarLink,
    },
    inject: ['$pages'],
    computed: {
        publishedPages() {
            return this.pages.filter(p => p.published == true)
        }
    },
    data(){
        return{
            theme: 'dark',
            btnTheme: 'light',
            themeBtnText: 'Light mode',
            data: [],
        };
    },
    created(){
        this.getThemeSettings()
        this.pages = this.$pages.getAllPages();
    },
    methods: {
        changeTheme(){
            let theme = 'light'
            let btnTheme = 'dark'
            let themeBtnTxt = 'Dark mode'

            if(this.theme == 'light'){
                theme = 'dark'
                btnTheme = 'light'
                themeBtnTxt = 'Light mode'
            }

            this.theme = theme;
            this.btnTheme = btnTheme;
            this.themeBtnText = themeBtnTxt;
            this.storeThemeSettings()
        },
        storeThemeSettings(){
            localStorage.setItem('theme', this.theme);
            localStorage.setItem('btnTheme', this.btnTheme);
            localStorage.setItem('themeBtnTxt', this.themeBtnText);
        },
        getThemeSettings(){
            let theme = localStorage.getItem('theme');
            let btnTheme = localStorage.getItem('btnTheme');
            let themeBtnText = localStorage.getItem('themeBtnTxt');

            this.theme = theme ? theme : 'dark'
            this.btnTheme = btnTheme ? btnTheme : 'light'
            this.themeBtnText = themeBtnText ? themeBtnText : 'Light mode'
        },
    },
}
</script>