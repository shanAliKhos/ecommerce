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
                this.$swal({
                    toast: true,
                    position: 'top',
                    showConfirmButton: false,
                    showCloseButton: true,
                    timer: 7000,
                    timerProgressBar: true,
                    icon: 'success',
                    title: this.$page.flash.success,
                })                              
            }
            if(this.$page.flash.error){
                this.$swal({
                    toast: true,
                    position: 'top',
                    showConfirmButton: false,
                    showCloseButton: true,
                    timer: 7000,
                    timerProgressBar: true,
                    icon: 'error',
                    title: this.$page.flash.error,
                })             
            }
        }
    },
    
 
 
}
</script>