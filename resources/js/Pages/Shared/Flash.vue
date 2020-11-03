<template>
    <div>
        {{Alert}}
    </div>
</template>
<script>
export default {
  
 


    computed: {
        Alert(){
            if(this.$page.flash.success){
                this.$toasted.success(this.$page.flash.success,{
                    theme: "bubble", 
                    position: "bottom-center", 
                    duration : 2000                    
                }); 
            }
            if(this.$page.flash.error){
                this.$toasted.error(this.$page.flash.error,{
                    theme: "bubble", 
                    position: "bottom-center", 
                    duration : 2000                    
                });
            } 
            if(this.$page.flash.info){
                this.$toasted.info(this.$page.flash.info,{
                    theme: "bubble", 
                    position: "bottom-center", 
                    duration : 2000
                });
            }
        }
    },
    
 
 
}
</script>