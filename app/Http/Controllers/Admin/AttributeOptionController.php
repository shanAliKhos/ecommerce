<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use App\Models\AttributeValue;
use Illuminate\Http\Request;

use App\Models\Attribute;
use Inertia\Inertia;


class AttributeOptionController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin');  
    }    

    public function index()
    {
        $AttributeValue = new AttributeValue; 
        $attribute = new Attribute;

        return Inertia::render('Admin/attribute-option/Index',[
            'attribute_options'=>$AttributeValue->with('attribute')->paginate(8),
            'attributes'=>$attribute->all(),
        ]);   
    }
 
    public function create()
    {
        // $attribute = new Attribute;
        // $attributes = $attribute->all();  
        // return Inertia::render('Admin/attribute-option/Create',compact('attributes'));   
    }
 
    public function store(Request $request)
    {
        $this->validate($request, [ 
            'name'          =>  'required|min:2|unique:attribute_values',
            'code'          =>  'required|min:1|max:4|unique:attribute_values',
            'attribute_id' =>  'required', 
        ]);
         
        $attributeValue = new AttributeValue ;
        try {
            $attributeValue->create([
                'code'=> $request->code,
                'name'=>$request->name, 
                'attribute_id' => $request->attribute_id, 
            ]);             
        } catch (\Throwable $th) {
             
            return back()->with('error','OPPS fail to store in database, Please contact support team ');
        }       
        


        return redirect()->route('admin.attribute-option.index')->with('success', 'Attribute Option created');
    }
 
    public function show(AttributeValue $attribute_option)
    {
        //
    }

 
    public function edit(AttributeValue $attribute_option)
    { 
        $attribute = new Attribute;
     
        return Inertia::render('Admin/attribute-option/Index',[
            'attribute_option'=>$attribute_option->load('attribute'),
            'attribute_options'=>$attribute_option->with('attribute')->paginate(8),
            'attributes'=>$attribute->all(),
        ]);         
        return Inertia::render('Admin/attribute-option/Edit',compact('attribute_option','attributes')); 
    }
 
    public function update(Request $request, AttributeValue $attribute_option)
    { 
        $this->validate($request, [
            'name'=> 'required|min:2|max:255|unique:attribute_values,name,' .$attribute_option->id, 
            'code'=> 'required|min:1|max:4|unique:attribute_values,code,' .$attribute_option->id, 
            'attribute_id' =>  'required',  
        ]);
     
        $attribute_option->update([
            'code' => $request->code,
            'name' => $request->name,
            'attribute_id' => $request->attribute_id, 
        ]);

        return back()->with('success', 'Attribute option updated');
    }

 
    public function destroy(AttributeValue $attribute_option)
    { 
        try { 
            $attribute_option->delete();
            return back()->with('success','Sucess ! attribute option removed');
        } catch (\Throwable $th) {
             
            return back()->with('error','Delete is not possible . Record may have children records');
        }   
    }
}
