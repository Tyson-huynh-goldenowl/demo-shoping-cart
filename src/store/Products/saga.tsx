import { call, put, takeLatest } from "redux-saga/effects";
import { SagaIterator } from "@redux-saga/core";
import { PRODUCT } from "../../consts/products.const";
import {  fetchProducts } from "../../services/products.api";
import { fetchListProductSuccess, fetchListProductError } from "./actions";


function* getProducts() {
  yield takeLatest(PRODUCT.fetchProductList, getProductsFromAPI);
}

function* getProductsFromAPI(action: any): SagaIterator {
  try {
    // call the api
    const data = yield call(fetchProducts, {
      response: action.payload,
    });
    console.log('========>', data);
    // call the success action with data
    yield put(fetchListProductSuccess(data));
  } catch (e) {
    // call the error action with data
    yield put(fetchListProductError(e));
  }
}

export const sagas = [getProducts];
