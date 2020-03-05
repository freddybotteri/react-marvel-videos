import { all } from 'redux-saga/effects';

import hero from "./hero";

export default function* rootSaga() {
	yield all([ hero() ]);
}
