<template>
<acounts-layout>
    <div class="lg:w-3/4 mt-12 lg:mt-0">
        <update-profile-information-form :user="$page.user" />
        <jet-section-border />
        
        <update-address-information-form :user="$page.user" />

        <jet-section-border />

        <update-password-form class="mt-10 sm:mt-0" />

        <div v-if="$page.jetstream.canManageTwoFactorAuthentication">
            <jet-section-border />

            <two-factor-authentication-form class="mt-10 sm:mt-0" />
        </div>

        <jet-section-border />

        <logout-other-browser-sessions-form :sessions="sessions" class="mt-10 sm:mt-0" />

        <jet-section-border />

        <delete-user-form class="mt-10 sm:mt-0" />
    </div>                    
</acounts-layout>
</template>

<script>
    import AppLayout from './../Ecomerce/shared/AppLayout'
    import AcountsLayout from './../Ecomerce/shared/AcountsLayout'  
    import DeleteUserForm from './DeleteUserForm'
    import JetSectionBorder from '@/Jetstream/SectionBorder'
    import LogoutOtherBrowserSessionsForm from './LogoutOtherBrowserSessionsForm'
    import TwoFactorAuthenticationForm from './TwoFactorAuthenticationForm'
    import UpdateAddressInformationForm from './UpdateAddressInformationForm'
    import UpdatePasswordForm from './UpdatePasswordForm'
    import UpdateProfileInformationForm from './UpdateProfileInformationForm'

    export default {
        props: ['sessions'],
        layout:AppLayout,
        components: { 
            AcountsLayout,
            DeleteUserForm,
            JetSectionBorder,
            LogoutOtherBrowserSessionsForm,
            TwoFactorAuthenticationForm,
            UpdatePasswordForm,
            UpdateProfileInformationForm,
            UpdateAddressInformationForm,
        },
    
        mounted() {
            const self = this
            self.$root.$emit('sidebar-close');     
        },        
    }
</script>
