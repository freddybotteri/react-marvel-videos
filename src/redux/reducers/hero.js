import {
  GET_HERO_MARVEL_DATA_START,
  GET_HERO_MARVEL_DATA_SUCCESS,
  GET_HERO_MARVEL_DATA_ERROR
} from "../../consts/actionTypes";
import get from "lodash/get";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_HERO_MARVEL_DATA_START:
       return { ...state, error: null, herosData: null };
     case GET_HERO_MARVEL_DATA_SUCCESS:
       console.log(action);
       return { ...state, herosData: get(action, "herosData") };
     case GET_HERO_MARVEL_DATA_ERROR:
       return { ...state, error: true };
       break;
     default:
       return {...state };
  }
}
