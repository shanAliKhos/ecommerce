<template>
<form class="bg-white rounded lg:px-20 pt-6 pb-8 needs-validation"
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
    <div class="flex items-center justify-end  hidden lg:block">
        <button  
            type="submit"
            class="flex items-center justify-center uppercase transition duration-700 ease-in-out bg-orange-400 hover:bg-orange-500 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow inline-flex items-center w-full  "
            > 
            <svg v-if="sending"  class="transition  ease-in-out  animate-spin h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
            </svg>                              
            <svg v-else  class="transition duration-700 ease-in-out  h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>      
            PAY NOW
        </button>                                  
    </div>    

    <div class="mobile-secondary-menu z-50 bg-white block lg:hidden fixed bottom-12 right-0 left-0  border-t-2 border-gray-200 text-gray-400 ">
        <div class="grid grid-cols-4 gap-2 flex justify-around"> 

            <div class="w-1/2 relative px-2 py-2 flex item-center">
                
            </div>
            <div class="w-1/2 relative px-2 py-2 flex item-center justify-end">
                <button :disabled="sending" type="submit"
                    :class="{'opacity-50 pointer-events-none':sending}"  
                    class="flex items-center transition duration-500 ease-in-out bg-orange-500 hover:bg-orange-600 focus:outline-none rounded px-2 py-2 text-white text-sm font-semibold uppercase shadow" >
                    <svg v-if="!sending" class="transition duration-700 ease-in-out  h-5 w-auto mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg> 
                    <svg v-else  class="transition  ease-in-out  animate-spin h-5 w-auto mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <svg viewBox="0 0 20 20" class="h-6 w-6 fill-current mr-2"><path d="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10"></path></svg>
                    </svg>                                   
                    <span class="tracking-tighter">Proceed</span>
                </button> 
            </div>

        </div>
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
            sending:false,
            
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
                    
                    let payment_Form =  {
                        CustomerInformation:this.$page.CustomerInformation,
                        ShipmentInformation:this.$page.ShipmentInformation,
                        stripeToken:result.token.id,
                        NameOnCard:options.NameOnCard,
                    };
                     

                    this.$inertia.post(this.route('cart.checkout'), payment_Form,{
                        preserveState: true, 
                        onStart: () => this.sending = true,
                        onFinish: () => this.sending = false,                
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