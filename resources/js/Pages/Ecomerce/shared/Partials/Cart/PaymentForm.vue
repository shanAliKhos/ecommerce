<template>
<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 needs-validation"
    id="payment-form"
    @submit.prevent="pay()"
    novalidate        
    >
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Name on Card</label>
        <input class="form-input" v-model="name_on_card" id="nameoncard" type="text" placeholder="Name On Card">
    </div>
    <div class="mb-6"> 
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Card Number</label>
        <stripe-card-element></stripe-card-element>
    </div>
    <div class="flex items-center justify-between">
        <button type="submit" class="btn btn-primary mb-3 sm:mb-0">PAY NOW</button>             
    </div>     

</form> 
</template>

<script>
import { createToken } from "vue-stripe-elements-plus";
import StripeCardElement from './stripe/StripeCardElement';
export default {
    components:{
        StripeCardElement,
    },
    data() {
        return {  
            name_on_card: "", 
        };
    },
    methods: {
        pay() {
            const self = this;
            // createToken returns a Promise which resolves in a result object with
            // either a token or an error key.
            // See https://stripe.com/docs/api#tokens for the token object.
            // See https://stripe.com/docs/api#errors for the error object.
            // More general https://stripe.com/docs/stripe.js#stripe-create-token.
            var options = {
                NameOnCard: this.name_on_card
            };
            createToken(options).then(result => {
                if (result.token) {
                    let hiddenInput = document.createElement("input");
                    hiddenInput.setAttribute("type", "hidden");
                    hiddenInput.setAttribute("name", "stripeToken");
                    hiddenInput.setAttribute("value", result.token.id);
                    this.$el.appendChild(hiddenInput);
                    // Submit the form
                    // this.$el.submit();
                    // let payment_Form =  document.getElementById("#payment-form");
                     

                    this.$inertia.post(this.route('checkout.post'), options,{
                        preserveState: true,              
                    });                    

                }
            });
        }
    },
    mounted() {
        window.addEventListener("load", function() { 
                var forms = document.getElementsByClassName("needs-validation"); 
                var validation = Array.prototype.filter.call(forms, function(form) {
                        form.addEventListener("submit",function(event) {
                            if (form.checkValidity() === false) {
                                event.preventDefault();
                                event.stopPropagation();
                            }
                            form.classList.add("was-validated");
                        },
                        false
                    );
                });
            },
            false
        );
    }
};
</script>