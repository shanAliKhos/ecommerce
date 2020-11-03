<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product; 
use App\Models\ProductAttribute; 
use App\Models\ProductAttributeValue; 


use Illuminate\Http\Request;

class ProductAttributeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
   
        $this->validate($request,[
            'Attribute'=>'required',
            'AttributeValues'=>'required',
        ]); 

        $ProductAttribute = new ProductAttribute;
        $ProductAttribute =$ProductAttribute->create([
            'attribute_id'=> $request->Attribute['id'],
            'product_id'=> $request->ProductId,
            'value'=> $request->Attribute['name'],
        ]); 
 
        if ($request->has('AttributeValues')) {

            $ProductAttributeValue = new ProductAttributeValue;
 
            foreach ($request->AttributeValues as $key => $AttributeValue) {
                $ProductAttributeValue->create([
                    'product_attribute_id'=>$ProductAttribute->id,
                    'attribute_value_id'=>$AttributeValue['id'],
                ]); 
            }
        }              
      return back()->with('success','attribute added');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(ProductAttribute $ProductAttribute)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(ProductAttribute $ProductAttribute)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,ProductAttribute $ProductAttribute)
    {
        $this->validate($request,[
            'Attribute'=>'required', 
            'AttributeValues'=>'required',
        ]);        

        $ProductAttribute->update([
            'attribute_id'=> $request->Attribute['id'], 
            'value'=> $request->Attribute['name'],
        ]); 
 
        
        if ($request->has('AttributeValues')) {

            $RequestedProductAttributeValues = array_column($request->AttributeValues,'id');
            $ExistingProductAttributeValues = array_column($ProductAttribute->ProductAttributeValues->toArray(),'attribute_value_id');
            
            $NewProductAttributeValues = array_diff($RequestedProductAttributeValues,$ExistingProductAttributeValues);
            $DestroyProductAttributeValues = array_diff($ExistingProductAttributeValues,$RequestedProductAttributeValues);
            
                
            if(!empty($DestroyProductAttributeValues)){
                $ProductAttributeValueModel = new ProductAttributeValue;
                foreach ($DestroyProductAttributeValues as  $DestroyProductAttributeID) {
                    $TrashProductAttributeValue = $ProductAttribute->ProductAttributeValues->where('attribute_value_id',$DestroyProductAttributeID)->first()->delete();
                }
            }
             
            if(!empty($NewProductAttributeValues)){
                $ProductAttributeValueModel = new ProductAttributeValue;
                foreach ($NewProductAttributeValues as  $AttributeValueID) {
                    $ProductAttributeValueModel->create([
                        'product_attribute_id'=>$ProductAttribute->id,
                        'attribute_value_id'=>$AttributeValueID,
                    ]);                      
                }                 
            }
  
                
            // foreach ($ProductAttribute->ProductAttributeValues as $ProductAttributeValuekey => $ProductAttributeValue) {

            //     if(isset($request->AttributeValues[$ProductAttributeValuekey])){

            //         $ProductAttributeValue->update([
            //             'attribute_value_id'=> $request->AttributeValues[$ProductAttributeValuekey]['id'],
            //         ]);
                    
            //     }else{
            //         $ProductAttributeValue->delete();
            //     }
            // }

            // }else{

            //     foreach ($request->AttributeValues as $AttributeValuekey => $AttributeValue) {
            //         $ProductAttributeValue = new ProductAttributeValue;
            //         $ProductAttributeValue->create([
            //             'product_attribute_id'=>$ProductAttribute->id,
            //             'attribute_value_id'=>$AttributeValue['id'],
            //         ]);                      
            //     }                
                    
                
            // } 

        }     
        
      return back()->with('success','success ! attribute updated');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProductAttribute $ProductAttribute)
    {
        $ProductAttribute->delete();

        return back()->with('success','success ! Product attribute removed');
    }
}
