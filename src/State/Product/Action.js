import { FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS } from "./ActionType";
import { api } from "../../config/apiConfig"

export const findProducts=(reqData)=>async(dispath)=>{
    dispath({type:FIND_PRODUCTS_REQUEST})
    const {colors,sizes,minPrice,minDiscoumt,category,stock,sort,pageNumber,pageSize}=reqData;
    
    try{
      const {data}=await api.get('/api/product?color=${color}&size=${size}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}')
      console.log("product data",data)
    dispath({type:FIND_PRODUCTS_SUCCESS,payload:data})
    }catch(error){
        dispath({type:FIND_PRODUCTS_FAILURE,payload:error.message})
    }
};

export const findProductsById=(reqData)=>async(dispath)=>{
    dispath({type:FIND_PRODUCT_BY_ID_REQUEST})
    const {productId}=reqData;
    console.log("product id", productId)
    try{
      const {data}=await api.get('/api/product/id/${productId}')
      console.log("data", data)
    dispath({type:FIND_PRODUCT_BY_ID_SUCCESS,payload:data})
    }catch(error){
        dispath({type:FIND_PRODUCT_BY_ID_FAILURE,payload:error.message})
    }
};
