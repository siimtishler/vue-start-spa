<template>
    <div v-if="page" class="container">
        <h1 class="emphasize">{{ page.pageTitle }}</h1> 
        <p>{{ page.content }}</p>
    </div>
</template>

<script>
export default{
    props: ['idx'],
    inject: ['$pages'],
    created() {
        let idx = (this.idx == '') ? 0 : this.idx;
        this.page = this.$pages.getSinglePage(idx);
    },
    watch: {
        // In watch the "method" or "function" has to be same as a prop
        // in this case 'idx'. 
        idx(newIdx){
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