export interface IProduct {
  id: number;
  name: string;
  description?: string;
  price: number;
}

export interface IAddNewProduct {
  name: string;
  description?: string;
  price: number;
}
