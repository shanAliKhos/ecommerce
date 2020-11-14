<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />
        <meta name="viewport" content="width=device-width, initial-scale=1"> 
  
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">

        @php 
            $RouteType = explode(".",Route::currentRouteName()); 
        @endphp
 
        @if($RouteType[0] != "tail")
 

            {{-- <link rel='stylesheet' media='screen' href='./fronttheme/bundles.css' /> --}}

            {{-- <link rel='stylesheet' media='screen' crossorigin='anonymous'
            href='https://d33wubrfki0l68.cloudfront.net/bundles/187683ef101db967d8370f0fa41316e42bb41247.css' /> --}}

        {{-- <link rel="stylesheet" href="/css/frontend/bootstrap.min.css" type="text/css">
        <link rel="stylesheet" href="/css/frontend/font-awesome.min.css" type="text/css">        
        <link rel="stylesheet" href="/backend/css/main.css" type="text/css"  />
        <link rel="stylesheet" href="/css/frontend/elegant-icons.css" type="text/css">
        <link rel="stylesheet" href="/css/frontend/nice-select.css" type="text/css">
        <link rel="stylesheet" href="/css/frontend/jquery-ui.min.css" type="text/css">
        <link rel="stylesheet" href="/css/frontend/owl.carousel.min.css" type="text/css">
        <link rel="stylesheet" href="/css/frontend/slicknav.min.css" type="text/css">
        <link rel="stylesheet" href="/css/frontend/style.css" type="text/css">                 --}}
        {{-- <!-- Scripts --> --}}
        @endif

        <script src="{{ mix('js/app.js') }}" defer></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.26.0/moment.min.js"></script>
        <script src="https://js.stripe.com/v3/"></script>

        @routes

        {{-- <style>
            .Addnew{
                position: absolute !important;
                right: 20px !important ;
            }              
        </style> --}}
 
    </head>  
    
    <body x-data="{ modal: false, mobileMenu: false }" :class="{ 'overflow-hidden max-h-screen': modal || mobileMenu }">
       
        @inertia

        {{-- <script src="/js/frontend/jquery-3.3.1.min.js"></script>
        <script src="/js/frontend/bootstrap.min.js"></script>  --}}
        {{-- <script src="{{ asset('backend/js/plugins/pace.min.js') }}"></script> --}}
        {{-- <script src="/js/frontend/jquery.nice-select.min.js"></script>
        <script src="/js/frontend/jquery-ui.min.js"></script>
        <script src="/js/frontend/jquery.slicknav.js"></script>
        <script src="/js/frontend/mixitup.min.js"></script>
        <script src="/js/frontend/owl.carousel.min.js"></script>
        <script src="/js/frontend/main.js"></script>         --}}

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