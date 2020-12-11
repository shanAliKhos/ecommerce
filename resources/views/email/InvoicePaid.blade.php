@component('mail::message')

<p>Order # {{$Order['OrderNumber']}}</p>
<p>CustomerName # {{$Order['CustomerName']}}</p>
<p>CustomerEmail # {{$Order['CustomerEmail']}}</p>
<p>Address # {{$Order['Address']}}</p>
<p>GrandTotal # {{$Order['GrandTotal']}}</p>

<h1>Product<h1>
<ul>
@foreach ($Order['OderItems'] as $key => $OderItems)
    <li>{{$OderItems['Quantity']}}</li>
@endforeach
</ul>  

@component('mail::button', ['url' => ''])
Button Text
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
