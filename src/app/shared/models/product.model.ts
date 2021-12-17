export interface ProductModel {
    _id: string;
    title:string;
    description?:string;
    image:string;
    price:number;
    idSupplier:string;
  }
  
  export interface ProductModelResponse {
    data: ProductModel[];
    error: boolean;
  }
  
  export interface ProductModelSingleResponse {
    data: ProductModel;
    error: boolean;
  }