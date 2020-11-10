<template>
    <div class="container flex">
         
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                API Tokens
            </h2>
        

        <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <api-token-manager :tokens="tokens"
                                   :available-permissions="availablePermissions"
                                   :default-permissions="defaultPermissions" />
            </div>
        </div>
    </div>
</template>

<script>
    import ApiTokenManager from './ApiTokenManager'
    import AppLayout from './../Ecomerce/shared/AppLayout'  
    import JetSectionBorder from './../../Jetstream/SectionBorder'

    export default {
        layout: AppLayout,  

        props: [
            'tokens',
            'availablePermissions',
            'defaultPermissions',
        ],

        components: {
            ApiTokenManager,
            JetSectionBorder,
        },
    }
</script>
