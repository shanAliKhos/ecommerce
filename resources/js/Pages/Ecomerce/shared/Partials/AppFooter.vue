<template>
<footer class="xxstheme-footer">

    <div class="container">
        <div class="bg-center bg-no-repeat bg-cover" style="background-image:url(./img/bg-cta.png)">
            <div class="py-16 md:py-20 text-center">
                <h3 class="font-butlerregular text-white text-3xl sm:text-4xl tracking-wide">
                    Let's keep in touch</h3>
                <p class="font-hkregular text-white text-lg sm:text-xl pt-3 px-6">
                    Join our list and save 15% off your first order.</p>
                <form class="pt-10 sm:pt-12">
                    <div
                        class="w-5/6 sm:w-3/4 lg:w-3/5 xl:w-1/2 mx-auto flex flex-col sm:flex-row justify-center items-center">
                        <label for="cta_email" class="block relative h-0 w-0 overflow-hidden">Email</label>
                        <input type="email" name="cta_email" id="cta_email" placeholder="ENTER YOUR EMAIL"
                            class="form-input bg-transparent text-sm text-white border-white uppercase" />
                        <button type="button" class="btn btn-primary sm:ml-5 mt-4 sm:mt-0 w-full sm:w-auto"
                            aria-label="Subscribe button">SUBSCRIBE</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
    <div class="container text-center pt-20 md:pt-28 lg:pt-32">
        <span class="font-hkregular md:text-lg text-secondary uppercase pb-1 md:pb-2 block">Follow
            US</span>
        <h4 class="font-butlermedium text-3xl text-secondary pb-8 md:pb-10 lg:pb-12">
            Instagram Feed
        </h4>

        <!-- <div id="instafeed" x-data x-init="instagramGallery"></div> -->

    </div>

    <div class="bg-center bg-no-repeat bg-cover" style="background-image:url(./img/bg-footer.png)">
        <div class="container py-16 sm:py-20 md:py-24">
            <div class="w-5/6 mx-auto flex flex-col lg:flex-row items-center justify-between">
                <div class="text-center lg:text-left">
                    <h4 class="font-hkbold text-white text-xl pb-8">Contact</h4>
                    <ul class="list-reset">

                        <li class="pb-2 block">
                            <a href="mailto:test.email0123@elyssi.com"
                                class="font-hkregular text-white transition-colors hover:text-primary text-base tracking-wide">test.email0123@elyssi.com</a>
                        </li>

                        <li class="pb-2 block">
                            <a href="tel:0123234222"
                                class="font-hkregular text-white transition-colors hover:text-primary text-base tracking-wide">0123
                                234 222</a>
                        </li>

                        <li class="pb-2 block">
                            <a href="https://elyssi.tailwindmade.com"
                                class="font-hkregular text-white transition-colors hover:text-primary text-base tracking-wide">Elyssi</a>
                        </li>

                    </ul>
                </div>
                <div class="text-center py-16 lg:py-0">
                    <a href="/" class="font-butlerregular text-white text-4xl uppercase tracking-wider">Elyssi.</a>
                    <div class="flex items-center justify-center pt-5">

                        <a href="https://www.google.com" class="group">
                            <span class="sr-only">Social link</span>
                            <div
                                class="bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors">
                                <i
                                    class="bx bxl-facebook text-secondary transition-colors group-hover:text-white"></i>
                            </div>
                        </a>

                        <a href="https://www.google.com" class="group">
                            <span class="sr-only">Social link</span>
                            <div
                                class="bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors">
                                <i
                                    class="bx bxl-twitter text-secondary transition-colors group-hover:text-white"></i>
                            </div>
                        </a>

                        <a href="https://www.google.com" class="group">
                            <span class="sr-only">Social link</span>
                            <div
                                class="bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors">
                                <i
                                    class="bx bxl-instagram text-secondary transition-colors group-hover:text-white"></i>
                            </div>
                        </a>

                        <a href="https://www.google.com" class="group">
                            <span class="sr-only">Social link</span>
                            <div
                                class="bg-white group-hover:bg-primary rounded-full px-2 py-2 flex items-center mr-5 transition-colors">
                                <i
                                    class="bx bxl-pinterest text-secondary transition-colors group-hover:text-white"></i>
                            </div>
                        </a>

                    </div>
                </div>
                <div class="text-center lg:text-left">
                    <h4 class="font-hkbold text-white text-xl pb-8">Link</h4>
                    <ul class="list-reset">

                        <li class="pb-2 block">
                            <a href="/collection-list"
                                class="font-hkregular transition-colors text-white hover:text-primary text-base tracking-wide">Shop</a>
                        </li>

                        <li class="pb-2 block">
                            <a href="/contact"
                                class="font-hkregular transition-colors text-white hover:text-primary text-base tracking-wide">Contact
                                Us</a>
                        </li>

                        <li class="pb-2 block">
                            <a href="/single"
                                class="font-hkregular transition-colors text-white hover:text-primary text-base tracking-wide">Terms
                                & Conditions</a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="container py-8">
        <p class="font-hkregular text-secondary text-base text-center">All rights
            reserved © 2020 shanalikhos12@gmail.com .</p>
    </div>    
 

</footer>
</template>
<script> 
export default { 


}
</script>