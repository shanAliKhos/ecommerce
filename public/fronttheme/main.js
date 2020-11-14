function collectionSliders() {
    document
        .querySelectorAll(".collection-slider")
        .forEach(slider => {
            new Glide(slider, {
                    autoplay: 2000,
                    type: "carousel",
                    perView: 3,
                    gap: 30,
                    breakpoints: {
                        1024: {
                            perView: 2,
                        },
                    },
                })
                .mount();
        });
}

function instagramGallery() {
    let userFeed = new Instafeed({
        get: "user",
        userId: "15931771808",
        accessToken: "15931771808.1677ed0.e2d809f9932c44fa872b7392d1f4b8d2",
        limit: 8,
        template: `
            <div class="md:w-1/4 xl:w-auto">
                <a href='{{link}}' class="group relative block">
                <div class="opacity-0 bg-primary transition-opacity group-hover:opacity-75 absolute inset-0 z-50 items-center justify-center">
                    <i class="bx bxl-instagram text-white text-3xl"></i>
                </div>
                <img src='{{image}}' class="w-full" alt="instagram photo" />
                </a>
            </div>
            `,
    });
    userFeed.run();
}

function productSlider() {
    document
        .querySelectorAll(".product-slider")
        .forEach(slider => {
            new Glide(slider, {
                    type: "carousel",
                    startAt: 1,
                    perView: 4,
                    gap: 0,
                    peek: {
                        before: 50,
                        after: 50,
                    },
                    breakpoints: {
                        1024: {
                            perView: 3,
                            peek: {
                                before: 20,
                                after: 20,
                            },
                        },
                        768: {
                            perView: 2,
                            peek: {
                                before: 10,
                                after: 10,
                            },
                        },
                        600: {
                            perView: 1,
                            peek: {
                                before: 0,
                                after: 0,
                            },
                        },
                    },
                })
                .mount();
        });
}

function postSlider() {
    new Glide(".posts-slider", {
            type: "carousel",
            startAt: 1,
            perView: 3,
            gap: 0,
            peek: {
                before: 50,
                after: 50,
            },
            breakpoints: {
                1024: {
                    perView: 3,
                    peek: {
                        before: 20,
                        after: 20,
                    },
                },
                768: {
                    perView: 2,
                    peek: {
                        before: 10,
                        after: 10,
                    },
                },
                600: {
                    perView: 1,
                    peek: {
                        before: 0,
                        after: 0,
                    },
                },
            },
        })
        .mount();
}
;