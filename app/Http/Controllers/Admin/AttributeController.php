<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;  
use App\Models\Attribute; 
use Inertia\Inertia;
  
class AttributeController extends Controller
{
  
    public function index()
    {
        $Attribute = new Attribute;
        $Attributes = $Attribute->all(); 
        return Inertia::render('Admin/attribute/Index',compact('Attributes'));
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function create()
    { 
        return Inertia::render('Admin/attribute/Create');
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'code'          =>  'required',
            'name'          =>  'required',
            'frontend_type' =>  'required'
        ]);
        $attribute = new Attribute ;

        $attribute->create([
            'code'=> $request->code,
            'name'=>$request->name,
            'frontend_type'=>$request->frontend_type,
            'is_filterable' => $request->is_filterable?1:0,
            'is_required' => $request->is_required?1:0, 
        ]); 

        return redirect()->route('admin.attribute.index')->with('success', 'Success ! Attribute created ');
    }

    /**
     * @param $id
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function edit(Attribute $Attribute)
    { 
        $Attribute->values;
        return Inertia::render('Admin/attribute/Edit',compact('Attribute')); 
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request, Attribute $attribute)
    { 
        
        $this->validate($request, [
            'code'          =>  'required',
            'name'          =>  'required',
            'frontend_type' =>  'required'
        ]);
     
        $attribute->update([
            'code' => $request->code,
            'name' => $request->name,
            'frontend_type' => $request->frontend_type,
            'is_filterable' => $request->is_filterable?1:0,
            'is_required' => $request->is_required?1:0, 
        ]);
        return back()->with('success', 'Success ! Attribute updated ');
 
        // $attribute = $this->attributeRepository->updateAttribute($params);
    }

    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Attribute $attribute)
    {

        try { 
            $attribute->delete();
            return back()->with('success','Sucess ! attribute removed');
        } catch (\Throwable $th) {
             
            return back()->with('error','Fail ! could not delete ');
        }        
         
        
    }
}
