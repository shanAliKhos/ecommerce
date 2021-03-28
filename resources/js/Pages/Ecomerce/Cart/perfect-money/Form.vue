<template>
    <form action="https://perfectmoney.is/api/step1.asp" method="POST" target="_blank" @submit="FormSubmitted">

    <input type="hidden" name="PAYEE_ACCOUNT" v-model="PerfectMoney.payee_account">
    
    <input type="hidden" name="PAYEE_NAME" v-model="PerfectMoney.payee_name">
    
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Amount</label>
        <input type="text" name="PAYMENT_AMOUNT" class="form-input w-full" v-model="PerfectMoney.payment_amount" placeholder="Amount">
    </div>

    <input type="hidden" name="PAYMENT_UNITS" v-model="PerfectMoney.payment_units">
	
    <input type="hidden" name="PAYMENT_URL" v-model="PerfectMoney.payment_url">
	
    <input type="hidden" name="NOPAYMENT_URL" v-model="PerfectMoney.noPayment_url">
 
    <input type="hidden" name="PAYMENT_ID" v-if="PerfectMoney.payment_id" v-model="PerfectMoney.payment_id">
    
    <input type="hidden" name="STATUS_URL" v-if="PerfectMoney.satus_url" v-model="PerfectMoney.satus_url">

    <input type="hidden" name="PAYMENT_URL_METHOD" v-if="PerfectMoney.payment_url_method" v-model="form.payment_url_method">

    <input type="hidden" name="NOPAYMENT_URL_METHOD" v-if="PerfectMoney.noPayment_url_method" v-model="PerfectMoney.noPayment_url_method">

    <input type="hidden" name="SUGGESTED_MEMO" v-if="PerfectMoney.memo" v-model="PerfectMoney.memo">

    <button type="submit" class="px-2 py-2 border-gray-50 bg-green-500 text-white rounded hover:bg-green-600 hover:shadow outline-none flex self-items-center">Procced</button>

</form>
</template>
<script>
import Button from '../../../../Jetstream/Button.vue';
export default {
  components: { Button },

 

    methods:{
        FormSubmitted(){  
            alert('ok');
            const self = this;
            let formData = new FormData();
 
            self.$inertia.post(this.route("cart.CustomerInfomationStore"), formData, {
                preserveState: true,
                onStart: () => (this.sending = true),
                onFinish: () => (this.sending = false),
            });
        },
    },

    computed:{
        PerfectMoney() {
         return this.$page.PerfectMoney;
        },
    },
    
}
</script>