import { PRODUCT } from "../../consts/products.const";

const initialState = {
  data: [],
  carts: [],
  amount: 0,
}

export function products(state = {
  ...initialState,
}, action: any) {
  switch (action.type) {
    case PRODUCT.fetchProductListSuccess:
      return { ...state, data: action.payload.data };
    case PRODUCT.addToCart:
      return { ...state, carts: action.payload.data, amount: action.payload.amount};
    case PRODUCT.updateListProduct:
      return {...state, data: action.payload};
    default:
      return state;
  }
}
