<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;  
use App\Models\Attribute; 
use Inertia\Inertia;
  
class AttributeController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin');  
    }    

    public function index()
    {
        $Attribute = new Attribute;
        return Inertia::render('Admin/attribute/Index',[
            'attributes'=>$Attribute->paginate(5),
        ]);
    }
 
    public function create()
    { 
        // return Inertia::render('Admin/attribute/Create');
    }

 
    public function store(Request $request,Attribute $attribute)
    {
 
        $this->validate($request, [ 
            'name'          =>  'required|min:2|unique:attributes',
            'frontend_type' =>  'required', 
        ]);
        
        try {
            $attribute->create([
                'code'=> $request->code,
                'name'=>$request->name,
                'frontend_type'=>$request->frontend_type,
                'is_filterable' => $request->is_filterable?1:0,
                'is_required' => $request->is_required?1:0, 
            ]);             
        } catch (\Throwable $th) {
             
            return back()->with('error','OPPS fail to store in database, Please contact support team ');
        }       
        


        return redirect()->route('admin.attribute.index')->with('success', 'Attribute created');
    }
 
    public function edit(Attribute $attribute)
    { 
        $attribute->values;
        return Inertia::render('Admin/attribute/Index',[
            'attribute'=>$attribute,
            'attributes'=>$attribute->paginate('5'),
        ]);
 
    }

 
    public function update(Request $request, Attribute $attribute)
    { 
        
        $this->validate($request, [
            'name'=> 'required|min:2|max:255|unique:attributes,name,' .$attribute->id, 
            'frontend_type' =>  'required',
        ]);
     
        $attribute->update([
            'code' => $request->code,
            'name' => $request->name,
            'frontend_type' => $request->frontend_type,
            'is_filterable' => $request->is_filterable?1:0,
            'is_required' => $request->is_required?1:0, 
        ]);
        return redirect()->route('admin.attribute.index')->with('success', 'Attribute updated');
 
        // $attribute = $this->attributeRepository->updateAttribute($params);
    }

 
    public function destroy(Attribute $attribute)
    {

        try { 
            $attribute->delete();
            return back()->with('success','Sucess ! attribute removed');
        } catch (\Throwable $th) {
             
            return back()->with('error','Delete is not possible . Record may have children records');
        }        
         
        
    }
}
