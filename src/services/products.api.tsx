
import API from './api';

function fetchProducts(param?:any) {
  return API.get('/products', { ...param })
}

export {
  fetchProducts
}

