import { GET_HERO_MARVEL_DATA_START} from "../../consts/actionTypes";

export const getHeroData = payload => ({
  type: GET_HERO_MARVEL_DATA_START,
  payload
});

