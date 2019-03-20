import { GET_COUNTRIES } from "../actions/types";

const initialState = {
   countries: []
};

export default function(state = initialState, action) {
   switch (action.type) {
      case GET_COUNTRIES:
         return {
            ...state,
            countries: action.payload,
            loading: false
         };
      default:
         return state;
   }
}