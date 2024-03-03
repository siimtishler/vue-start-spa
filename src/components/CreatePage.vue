<template>
    <form action="" class="container mb-3">
        <div class="row">
            <div class="col-md-8">
                <div class="mb-3">
                    <label for="" class="form-label">
                        Page Title
                    </label>
                    <input 
                        type="text" 
                        class="form-control" 
                        v-model="pageTitle"
                    />
                    <div class="mb-3">
                        <label for="" class="form-label">
                            Content
                        </label>
                        <textarea 
                            type="text" 
                            class="form-control" 
                            rows="5" 
                            v-model="content">
                        </textarea>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="mb-3">
                    <label for="" class="form-label">
                        Link text
                    </label>
                    <input 
                        type="text"
                        class="form-control"
                        v-model="linkText"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">
                            Link URL
                        </label>
                        <input 
                        type="text"
                        class="form-control"
                        v-model="linkURL"
                    />
                </div>
                <div class="row mb-3">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input">
                        <label type="gridCheck1" class="form-check-label">
                            Published
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="mb-3">
            <button 
                class="btn btn-primary"
                :disabled="isFormInvalid"
                @click.prevent="submitForm">
            CreatePage</button>
        </div>
    </form>
</template>

<script>
export default {
    props: ['pageCreated'],
    computed:{
        isFormInvalid(){
            return !this.pageTitle || !this.content || !this.linkText || !this.linkURL;
        }
    },
    data(){
        return{
            pageTitle: '',
            content: '',
            linkText: '',
            linkURL: '',
        }
    },
    methods: {
        submitForm(){
            if(!this.pageTitle || !this.content || !this.linkText || !this.linkURL){
                alert('Please fill the form')
                return;
            }
            this.pageCreated({
                pageTitle: this.pageTitle,
                content: this.content,
                linkText: this.linkText,
                linkURL: this.linkURL,
            });
        }
    }
}
</script>

<style>
    textarea{
        resize:none;
    }
</style>