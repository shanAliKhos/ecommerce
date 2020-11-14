<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />
        <meta name="viewport" content="width=device-width, initial-scale=1"> 
  
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
 
        <script src="{{ mix('js/app.js') }}" defer></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.26.0/moment.min.js"></script>
        <script src="https://js.stripe.com/v3/"></script>

        @routes
 
    </head>  
    
    <body x-data="{ modal: false, mobileMenu: false }" :class="{ 'overflow-hidden max-h-screen': modal || mobileMenu }">
       
        @inertia
 

    <script src="https://cdn.jsdelivr.net/npm/@glidejs/glide@3.4.1/dist/glide.min.js"
        integrity="sha256-CnNQJd80jPuIDyeQRRq7+Wgt+++Kl0dZLt4ETNmxMIw=" crossorigin="anonymous" defer></script>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@glidejs/glide@3.4.1/dist/css/glide.core.min.css"
        integrity="sha256-Ev8y2mML/gGa4LFVZgNpMTjKwj34q4pC4DcseWeRb9w=" crossorigin="anonymous" />

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@glidejs/glide@3.4.1/dist/css/glide.theme.min.css"
        integrity="sha256-sw/JiPOV1ZfcXjqBJT1vqaA4vBGeiqn+b7PDhVv4OA4=" crossorigin="anonymous" />


    <script src="https://cdn.jsdelivr.net/npm/instafeed.js@1.4.1/instafeed.min.js"
        integrity="sha256-nZf3pLLtu49qBFElpoa1j1mQ9wDBp66ryKkOyL07oCI=" crossorigin="anonymous" defer></script>


    <script src="https://cdn.jsdelivr.net/npm/alpinejs@2.3.3/dist/alpine.min.js" defer></script>

    <script src='./fronttheme/main.js'></script>         

    </body>
</html>