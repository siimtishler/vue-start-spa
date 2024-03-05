<template>
    <li>
        <router-link
            :to="`/${idx}`" 
            class="nav-link"
            :class="activeClasses"
            aria-current="page"
            :title="`This link goes to ${page.link.text}`"
        >{{ page.link.text }}</router-link>
    </li>
    
</template>

<script>
export default{
    props: ['page', 'idx', 'isActive'],
    computed: {
        activeClasses(){
            return{
                active: this.isActive,
                emphasize: this.isActive,
            };
        }
    }
}
</script>
<style scoped>
.emphasize{
    text-decoration: underline !important;
}
</style>