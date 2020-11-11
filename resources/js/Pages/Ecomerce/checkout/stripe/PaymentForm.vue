<template>
    <form
        class="needs-validation"
      
        method="post"
        id="payment-form"
        @submit.prevent="pay()"
        novalidate
     >
     <h4>Checkout Form</h4>
        <div class="form-group">
            <label for="inputEmail"
                >Email address
                <span class="text-danger font-weight-bold">*</span></label
            >
            <input
                type="email"
                class="form-control"
                id="inputEmail"
                aria-describedby="emailHelp"
                name="email"
                :class="{'is-invalid':$page.errors.email}"
                required
            />
            <div class="invalid-feedback">Email is required!</div>
        </div>
        <div class="form-group">
            <label for="inputNameOnCard"
                >Name on Card
                <span class="text-danger font-weight-bold">*</span></label
            >
            <input
                type="text"
                class="form-control"
                id="inputNameOnCard"
                aria-describedby="emailHelp"
                name="name_on_card"
                v-model="name_on_card"
                required
                :class="{'is-invalid':$page.errors.name_on_card}"

            />
            <div class="invalid-feedback">Name on Card is required!</div>
        </div>
        <div class="form-row">
            <div class="col-md-4 mb-3">
                <label for="inputAddress">Address <span class="text-danger font-weight-bold">*</span></label>
                <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    name="address"
                    v-model="address"
                    required
                    :class="{'is-invalid':$page.errors.address}"

                />
            <div class="invalid-feedback">Address is required!</div>

            </div>
            <div class="col-md-4 mb-3">
                <label for="inputCity">City <span class="text-danger font-weight-bold">*</span></label>
                <input
                    type="text"
                    class="form-control"
                    id="inputCity"
                    name="city"
                    required
                    :class="{'is-invalid':$page.errors.city}"

                />
            <div class="invalid-feedback">City is required!</div>

            </div>
            <div class="col-md-4 mb-3">
                <label for="inputProvince">Province <span class="text-danger font-weight-bold">*</span></label>
                <input
                    type="text"
                    class="form-control"
                    id="inputProvince"
                    name="province"
                    required
                    :class="{'is-invalid':$page.errors.province}"

                />
                <div class="invalid-feedback">Province is required!</div>
                
            </div>
        </div>
        <div class="form-row">
            <div class="col-md-4 mb-3">
                <label for="inputPostalCode">Postal Code <span class="text-danger font-weight-bold">*</span></label>
                <input
                    type="text"
                    class="form-control"
                    id="inputPostalCode"
                    name="postal_code"
                    required
                    :class="{'is-invalid':$page.errors.postal_code}"

                />
                <div class="invalid-feedback">Postal Code is required!</div>

            </div>
            <div class="col-md-4 mb-3">
                <label for="inputCountry">Country <span class="text-danger font-weight-bold">*</span></label>
                <input
                    type="text"
                    class="form-control"
                    id="inputCountry"
                    name="country"
                    required
                    :class="{'is-invalid':$page.errors.country}"

                />
                <div class="invalid-feedback">Country is required!</div>

            </div>
            <div class="col-md-4 mb-3">
                <label for="inputPhone">Phone <span class="text-danger font-weight-bold">*</span></label>
                <input
                    type="text"
                    class="form-control"
                    id="inputPhone"
                    name="phone"
                    required
                    :class="{'is-invalid':$page.errors.phone}"

                />
                <div class="invalid-feedback" v-if="$page.errors.phone">Phone is required!</div>

            </div>
        </div>
        <div class="form-group">
            <label for="card-element">Credit Card <span class="text-danger font-weight-bold">*</span></label>
            <stripe-card-element></stripe-card-element>
        </div>

        <div class="text-center mt-4 mb-3">
            <button type="submit" class="site-btn">PLACE ORDER</button>

            <!-- <button type="submit" class="c-btn-main">Submit Payment</button> -->
        </div>
    </form>
</template>

<script>
import { createToken } from "vue-stripe-elements-plus";
import StripeCardElement from './StripeCardElement';
export default {
    components:{
        StripeCardElement,
    },
    data() {
        return {  
            name_on_card: "",
            address: "",
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
                name: this.name_on_card
            };
            createToken(options).then(result => {
                if (result.token) {
                    var hiddenInput = document.createElement("input");
                    hiddenInput.setAttribute("type", "hidden");
                    hiddenInput.setAttribute("name", "stripeToken");
                    hiddenInput.setAttribute("value", result.token.id);
                    this.$el.appendChild(hiddenInput);
                    // Submit the form
                    // this.$el.submit();

                    self.$inertia.post(route('checkout.post'), $("#payment-form").serialize(),{
                        preserveState: true,              
                    });                    

                }
            });
        }
    },
    mounted() {
        window.addEventListener(
            "load",
            function() {
                // Fetch all the forms we want to apply custom Bootstrap validation styles to
                var forms = document.getElementsByClassName("needs-validation");
                // Loop over them and prevent submission
                var validation = Array.prototype.filter.call(forms, function(
                    form
                ) {
                    form.addEventListener(
                        "submit",
                        function(event) {
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