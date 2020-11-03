<template>
    <section class="breadcrumb-section set-bg" 
    :style="'background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url(\'' + BreadCrumbImg + '\');'">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="breadcrumb__text">
                        <h2><slot name="CurrentPage"></slot></h2>
                        <div class="breadcrumb__option">
                            <inertia-link href="/" >Home</inertia-link>
                            <span><slot name="CurrentPage"></slot></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
 export default {
    computed: {
        BreadCrumbImg(){
            var  img = APP_URL +'/img/breadcrumb.jpg';
            return img;
        }
    },   
 }
</script>