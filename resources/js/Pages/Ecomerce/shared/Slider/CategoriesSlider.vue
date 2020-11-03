<template>
    <section class="categories">
        <div class="container">
            <div class="row">
                <div class="categories__slider owl-carousel" >
                    <div class="col-lg-3" v-for="(Category, CategoryIndex) in Categories" :key="CategoryIndex" v-if="CategoryIndex > 0">
                        <Category :Category="Category"></Category>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Category from './components/Category' 
export default {
    components:{
        Category,
    },
    computed: {
        Categories(){
            return this.$page.Categories;
        },   
    },   
}
</script>
 