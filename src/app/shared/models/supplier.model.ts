export interface SupplierModel {
    _id: string;
    name:string,
    phone:string,
  }
  
  export interface SupplierModelResponse {
    data: SupplierModel[];
    error: boolean;
  }
  
  export interface SupplierModelSingleResponse {
    data: SupplierModel;
    error: boolean;
  }