<template>
    <tr>
        <td>{{ CategoryIndex }}</td>
        <td>{{ Category.name }}</td>
        <td>{{ Category.slug }}</td>
        <!-- <td>{{ Category.parent }}</td> -->
        <td class="text-center"> 
            <span v-if="Category.is_featured" class="badge badge-success">Yes</span>
            <span v-else class="badge badge-danger">No</span>
        </td>
        <td class="text-center">
            <span v-if="Category.menu" class="badge badge-success">Yes</span>
            <span v-else class="badge badge-danger">No</span>
        </td>
        <!-- <td class="text-center">
                Category.order 
        </td> -->
        <td class="text-center">
            <div class="btn-group" role="group" aria-label="Second group">
                <inertia-link :href="$route('admin.category.edit', Category.id)" preserve-scroll class="btn btn-sm btn-primary"><i class="fa fa-edit"></i></inertia-link>
                <form @submit.prevent="destroy">
                    <loading-button :loading="sending" class="btn btn-danger" type="submit">
                        <i v-if="!sending" class="fa fa-trash"></i>
                    </loading-button> 
                </form>                
                <!-- <inertia-link :href="$route('admin.category.destroy', Category.id)" method="delete"  preserve-scroll class="btn btn-sm btn-danger"><i class="fa fa-trash"></i></inertia-link> -->
            </div>
        </td>
    </tr> 
</template>
<script>
import LoadingButton from './../../../Shared/LoadingButton'   
export default {
    props:['Category','CategoryIndex'],
    components:{
        LoadingButton,
    },    
    data() {
        return {
            sending:false,
        }
    },
    methods: {
        destroy(){
            const self= this;
            self.$swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, cancel it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    self.$inertia.delete(self.route('admin.category.destroy', self.Category.id), {
                        preserveState: true,
                        preserveScroll: true,  
                        onStart: () => self.sending = true,
                        onFinish: () => self.sending = false,                                    

                    })                    
                }
            })                   
        },        
    },     
}
</script>