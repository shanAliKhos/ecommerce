<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />
        <meta name="viewport" content="width=device-width, initial-scale=1">  
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        {{-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"> --}}
        @routes
    </head>  
    
    <body >
       
        @inertia

        <script src="{{ mix('js/app.js') }}" defer></script>  
        <script src="https://js.stripe.com/v3/" defer></script> 
    </body>
</html>