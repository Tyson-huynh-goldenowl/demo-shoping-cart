
import { sagas as productSaga } from "./Products/saga";
import { fork, all } from "redux-saga/effects";

const allSagas = [...productSaga];

export default function* rootSaga() {
  yield all(allSagas.map((saga) => fork(saga)));
}
