<template>
    <tr>
        <td>{{ Attribute.code }}</td>
        <td>{{ Attribute.name }}</td>
        <td>{{ Attribute.frontend_type }}</td>
        <td class="text-center">
            <span v-if="Attribute.is_filterable" class="badge badge-success">Yes</span>
            <span v-else class="badge badge-danger">No</span>
        </td>
        <td class="text-center"> 
            <span v-if="Attribute.is_required" class="badge badge-success">Yes</span> 
            <span v-else class="badge badge-danger">No</span> 
        </td>
        <td class="text-center">
            <div class="btn-group" role="group" aria-label="Second group">
                <inertia-link :href="route('admin.attribute.edit', Attribute.id)" class="btn btn-sm btn-primary"><i class="fa fa-edit"></i></inertia-link>
                <form @submit.prevent="destroy">
                    <loading-button :loading="sending" class="btn btn-danger" type="submit">
                        <i v-if="!sending" class="fa fa-trash"></i>
                    </loading-button> 
                </form>
            </div>
        </td>
    </tr>
</template>
<script>
import LoadingButton from './../../../Shared/LoadingButton'   
export default {
    props:['Attribute'],
    data() {
        return {
            sending:false,
        }
    },
    components:{
        LoadingButton,
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
                    self.$inertia.delete(self.route('admin.attribute.destroy', self.Attribute.id), {
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