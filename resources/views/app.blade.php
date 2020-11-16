<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />
        <meta name="viewport" content="width=device-width, initial-scale=1"> 
  
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
 
        <script src="{{ mix('js/app.js') }}" defer></script>
        {{-- <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.26.0/moment.min.js"></script> --}}
        <script src="https://js.stripe.com/v3/"></script>

        @routes
 
    </head>  
    
    <body x-data="{ modal: false, mobileMenu: false }" :class="{ 'overflow-hidden max-h-screen': modal || mobileMenu }">
       
        @inertia
 

    
        <script src="https://cdn.jsdelivr.net/npm/alpinejs@2.3.3/dist/alpine.min.js" defer></script>
      

    </body>
</html>