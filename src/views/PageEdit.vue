<template>
    edit {{ route.params.idx }}

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
                        v-model="h"
                    />
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">
                        Content
                    </label>
                    <textarea 
                        type="text" 
                        class="form-control" 
                        rows="5" 
                        v-model="g">
                    </textarea>
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
                        v-model="atanh"
                    />
                </div>
                <div class="row mb-3">
                    <div class="form-check">
                        <input 
                            type="checkbox" 
                            class="form-check-input" 
                            v-model="a">
                        <label type="gridCheck1" class="form-check-label">
                            Published
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="mb-3">
            <button 
                class="btn btn-primary me-2"
            >Edit</button>
            <button 
                class="btn btn-primary"
            >Cancel</button>
        </div>
    </form>
</template>


<script setup>
import { atanh } from 'core-js/library/core/number';
import { useRoute } from 'vue-router';

const route = useRoute();

const props = defineProps(['idx']);


</script>