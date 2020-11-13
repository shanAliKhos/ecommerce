<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1"> 

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;900&display=swap" rel="stylesheet">
        {{-- <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap"> --}}
        <!-- Styles -->
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        <link rel="stylesheet" href="/css/frontend/bootstrap.min.css" type="text/css">
        <link rel="stylesheet" href="/css/frontend/font-awesome.min.css" type="text/css">        
        <link rel="stylesheet" href="/backend/css/main.css" type="text/css"  />
        <link rel="stylesheet" href="/css/frontend/elegant-icons.css" type="text/css">
        <link rel="stylesheet" href="/css/frontend/nice-select.css" type="text/css">
        <link rel="stylesheet" href="/css/frontend/jquery-ui.min.css" type="text/css">
        <link rel="stylesheet" href="/css/frontend/owl.carousel.min.css" type="text/css">
        <link rel="stylesheet" href="/css/frontend/slicknav.min.css" type="text/css">
        <link rel="stylesheet" href="/css/frontend/style.css" type="text/css">                
        <!-- Scripts -->
        <script src="{{ mix('js/app.js') }}" defer></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.26.0/moment.min.js"></script>
        <script src="https://js.stripe.com/v3/"></script>

        @routes

        <style>
            .Addnew{
                position: absolute !important;
                right: 20px !important ;
            }              
        </style>
 
    </head>  
    
    <body class="app sidebar-mini rtl font-sans antialiased ">
       
        @inertia

        <script src="/js/frontend/jquery-3.3.1.min.js"></script>
        <script src="/js/frontend/bootstrap.min.js"></script> 
        {{-- <script src="{{ asset('backend/js/plugins/pace.min.js') }}"></script> --}}
        <script src="/js/frontend/jquery.nice-select.min.js"></script>
        <script src="/js/frontend/jquery-ui.min.js"></script>
        <script src="/js/frontend/jquery.slicknav.js"></script>
        <script src="/js/frontend/mixitup.min.js"></script>
        <script src="/js/frontend/owl.carousel.min.js"></script>
        <script src="/js/frontend/main.js"></script>        

    </body>
</html>