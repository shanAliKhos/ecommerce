<template>
    <jet-form-section @submitted="updateAddressInformation">
        <template #title>
            Address Information
        </template>

        <template #description>
            Update your account's address information and contact.
        </template>

        <template #form>
 

            <!-- Name -->
            <div class="col-span-6 sm:col-span-4">
                <jet-label for="Address" value="Address" />
                <jet-input id="address" type="text" class="mt-1 block w-full" v-model="form.address" autocomplete="address" />
                <jet-input-error :message="$page.errors.address" class="mt-2" />
            </div>

            <!-- Email -->
            <div class="col-span-6 sm:col-span-4">
                <jet-label for="mobile" value="Mobile" />
                <jet-input id="mobile" type="number" class="mt-1 block w-full" v-model="form.phone" />
                <jet-input-error :message="$page.errors.phone" class="mt-2" />
            </div>
            
        </template>

        <template #actions>
            <jet-action-message :on="Success" class="mr-3">
                Saved.
            </jet-action-message>

            <jet-button :class="{ 'opacity-25': sending }" :disabled="sending">
                Save
            </jet-button>
        </template>
    </jet-form-section>
</template>

<script>
    import JetButton from '@/Jetstream/Button'
    import JetFormSection from '@/Jetstream/FormSection'
    import JetInput from '@/Jetstream/Input'
    import JetInputError from '@/Jetstream/InputError'
    import JetLabel from '@/Jetstream/Label'
    import JetActionMessage from '@/Jetstream/ActionMessage'
    import JetSecondaryButton from '@/Jetstream/SecondaryButton'

    export default {
        components: {
            JetActionMessage,
            JetButton,
            JetFormSection,
            JetInput,
            JetInputError,
            JetLabel,
            JetSecondaryButton,
        },

        props: ['user'],

        data() {
            return {
                form:{
                    '_method': 'PUT',
                    address: this.user.address,
                    phone: this.user.phone,
                    country: this.user.country,
                    city: this.user.city,
                },   
                sending:false,
                Success:false,
            }
        },

        methods: {
            updateAddressInformation() {
                const self = this;
                self.$inertia.post( route('dashboard.user-address-information.update'),self.form, {
                    preserveScroll: true,
                    onStart: () => {
                        self.sending = true 
                    },
                    onFinish: () => self.sending = false,                    
                    onSuccess: () => {
                       self.Success = true; 
                       setTimeout(() => {
                           self.Success = false;
                       }, 500);
                    },
                });                
 
            },
 
        },
    }
</script>

