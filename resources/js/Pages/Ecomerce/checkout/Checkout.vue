<template>
 
    <section class="checkout spad">
        <div class="container">
            <!-- <div class="row">
                <div class="col-lg-12">
                    <h6><span class="icon_tag_alt"></span> Have a coupon? <a href="#">Click here</a> to enter your code
                    </h6>
                </div>
            </div> -->
            <div class="checkout__form">
                <h4>Billing Details</h4>
                <form action="#">
                    <div class="row">  
                        <your-order class="col-12 col-md-4"></your-order>
                        <hr> 
                        <payment-form class="col-12 col-md-8"></payment-form>
                         
                    </div>
                </form>
            </div>
        </div>
    </section> 

</template>

<script>
import AppLayout from './../shared/AppLayout'  
import YourOrder from './YourOrder' 
import PaymentForm from './stripe/PaymentForm';
// import CustomerForm from './CustomerForm' 


export default {
    layout: AppLayout,  
    metaInfo: { title: 'Checkout' },
    components: {
        YourOrder,
        PaymentForm, 
    }, 
}
</script>