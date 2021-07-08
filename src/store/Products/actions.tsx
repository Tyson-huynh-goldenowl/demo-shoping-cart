import { PRODUCT } from "../../consts/products.const";
import {ProductProps} from './type';
export const fetchListProduct = () => {
  return {
    type: PRODUCT.fetchProductList,
  };
};

export const updateListProduct = (data: ProductProps) => {
  return {
    type: PRODUCT.updateListProduct,
    payload: data,
  };
};

export const fetchListProductSuccess = (data: any) => {
  return {
    type: PRODUCT.fetchProductListSuccess,
    payload: data,
  };
};

export const fetchListProductError = (data: any) => {
  return {
    type: PRODUCT.fetchProductListError,
    payload: data,
  };
};

export const addToCart = (data: {data:ProductProps, amount: number}) => {
  return {
    type: PRODUCT.addToCart,
    payload: data,
  };
};
