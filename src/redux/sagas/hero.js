import { put, call , takeLatest } from "redux-saga/effects";
import { apiCall } from "../api";

import {
  GET_HERO_MARVEL_DATA_START,
  GET_HERO_MARVEL_DATA_SUCCESS,
  GET_HERO_MARVEL_DATA_ERROR
} from "../../consts/actionTypes";

export function* getHeroData({ payload: { name }}) {
  try {
    
    const publicKeyandHash = '001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b';
    let herosData = yield call(apiCall, `https://gateway.marvel.com/v1/public/characters?limit=12&nameStartsWith=${name}&ts=thesoer&apikey=${publicKeyandHash}`,null, null, "GET");
    if(herosData.data) {
      herosData =  herosData.data.data.results;
      yield put({ type: GET_HERO_MARVEL_DATA_SUCCESS, herosData });
    }else{ 
      yield put({ type: GET_HERO_MARVEL_DATA_SUCCESS, herosData });
    }
    
    console.log('desde saga',herosData.data.data.results);
  } catch (error) {
    yield put({ type: GET_HERO_MARVEL_DATA_ERROR, error });
  }
}


export default function* profileWatcher() {
  yield takeLatest(GET_HERO_MARVEL_DATA_START, getHeroData);
}
