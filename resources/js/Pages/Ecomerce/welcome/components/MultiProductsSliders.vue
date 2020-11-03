<template>
    <section class="latest-product spad">
        <div class="container">
            <div class="row shadow-2xl p-3">
                <div class="col-lg-4 col-md-6">
                    <LatestProductsSlider></LatestProductsSlider>
                </div>
                <div class="col-lg-4 col-md-6">
                    <TopRatedProductsSlider></TopRatedProductsSlider>
                </div>
                <div class="col-lg-4 col-md-6">
                    <ReviewProductsSlider></ReviewProductsSlider>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import LatestProductsSlider from './../../shared/Slider/LatestProductsSlider' 
import TopRatedProductsSlider from './../../shared/Slider/TopRatedProductsSlider' 
import ReviewProductsSlider from './../../shared/Slider/ReviewProductsSlider' 
export default {
 components:{LatestProductsSlider,TopRatedProductsSlider,ReviewProductsSlider},
}
</script>