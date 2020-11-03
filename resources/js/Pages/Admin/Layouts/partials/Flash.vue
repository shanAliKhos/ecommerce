<template>
    <div>
        {{Alert}}
    </div>
</template>
<script>
export default {
  

    methods: {
        success(text){
            this.$toasted.success(text); 
        },
        error(text){
            this.$toasted.error(text); 
        },
    },


    computed: {
        Alert(){
            if(this.$page.flash.success){
                this.success(this.$page.flash.success); 
            }
            if(this.$page.flash.error){
                this.error(this.$page.flash.error); 
            }
        }
    },
    
 
 
}
</script>