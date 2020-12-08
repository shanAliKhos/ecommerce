const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            backgroundImage: theme => ({
                'application-logo': "url('/img/partials/icons/logo.jpg')", 
                'icon-search': "url('/img/partials/icons/icon-search.svg')", 
                'icon-search-hover': "url('/img/partials/icons/icon-search-hover.svg')", 
                'icon-heart': "url('/img/partials/icons/icon-heart.svg')", 
                'icon-heart-hover': "url('/img/partials/icons/icon-heart-hover.svg')", 
                'icon-user': "url('/img/partials/icons/icon-user.svg')", 
                'icon-user-hover': "url('/img/partials/icons/icon-user-hover.svg')", 
                'icon-cart': "url('/img/partials/icons/icon-cart.svg')", 
                'icon-cart-hover': "url('/img/partials/icons/icon-cart-hover.svg')", 
                'icon-return': "url('/img/partials/icons/icon-return.svg')", 
                'icon-support': "url('/img/partials/icons/icon-support.svg')", 
                'icon-shipping': "url('/img/partials/icons/icon-shipping.svg')", 
                'coupon-bg': "url('/img/partials/bg/bg-coupon.png')", 
                'cta-bg': "url('/img/partials/bg/bg-cta.png')", 
                'footer-bg': "url('/img/partials/bg/bg-footer.png')", 
                'mega-menu-bg': "url('/img/partials/bg/bg-mega-menu.png')", 
                'products-bg': "url('/img/partials/bg/bg-products.png')", 
                'profile-bg': "url('/img/partials/bg/profile-bg.jpg')", 
            }),  
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },                      
        },
    },

    variants: {
        opacity: ['responsive', 'hover', 'focus', 'disabled'],
        fontSize: ['responsive', 'hover', 'focus', 'disabled'],
        backgroundImage: ['hover', 'focus'],    
        extend: {
           transform: ['hover', 'focus'],
           scale: ['focus-within'],
           animation: ['hover', 'focus'],
           transform: ['hover', 'focus'],
           appearance: ['hover', 'focus'],
           outline: ['hover', 'active'],           
        }        
    },

    plugins: [require('@tailwindcss/ui')],
};
