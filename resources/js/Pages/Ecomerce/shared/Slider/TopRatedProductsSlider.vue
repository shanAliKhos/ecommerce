<template>
    <div class="latest-product__text">
        <h4>Top Rated Products</h4>
        <div class="latest-product__slider owl-carousel shadow p-2">
            <div class="latest-prdouct__slider__item">
                <a href="#" class="latest-product__item">
                    <div class="latest-product__item__pic">
                        <img src="img/latest-product/lp-1.jpg" alt="">
                    </div>
                    <div class="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                    </div>
                </a>
                <a href="#" class="latest-product__item">
                    <div class="latest-product__item__pic">
                        <img src="img/latest-product/lp-2.jpg" alt="">
                    </div>
                    <div class="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                    </div>
                </a>
                <a href="#" class="latest-product__item">
                    <div class="latest-product__item__pic">
                        <img src="img/latest-product/lp-3.jpg" alt="">
                    </div>
                    <div class="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                    </div>
                </a>
            </div>
            <div class="latest-prdouct__slider__item">
                <a href="#" class="latest-product__item">
                    <div class="latest-product__item__pic">
                        <img src="img/latest-product/lp-1.jpg" alt="">
                    </div>
                    <div class="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                    </div>
                </a>
                <a href="#" class="latest-product__item">
                    <div class="latest-product__item__pic">
                        <img src="img/latest-product/lp-2.jpg" alt="">
                    </div>
                    <div class="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                    </div>
                </a>
                <a href="#" class="latest-product__item">
                    <div class="latest-product__item__pic">
                        <img src="img/latest-product/lp-3.jpg" alt="">
                    </div>
                    <div class="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        $(".latest-product__slider").owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            dots: false,
            nav: true,
            navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
            smartSpeed: 1200,
            autoHeight: false,
            autoplay: true
        });
    },    
}
</script>