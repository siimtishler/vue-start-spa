<template>
    <div v-if="page" class="container">
        <h1 class="emphasize">{{ page.pageTitle }}</h1> 
        <p>{{ page.content }}</p>
    </div>
</template>

<script>
export default{
    props: ['idx'],
    created() {
        let idx = 0;
        if(this.$route.params.idx != ''){
            idx = this.$route.params.idx;
        }
        this.page = this.$pages.getSinglePage(idx);
    },
    watch: {
        idx(newIdx, oldIdx){
            this.page = this.$pages.getSinglePage(newIdx);
        },
    },
    data() {
        return {
            page: null
        };
    },
};
</script>