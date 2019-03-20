import axios from "axios";
import { GET_COUNTRIES } from "./types";

export const getCountries = () => dispatch => {
   axios.get("https://restcountries.eu/rest/v2/all").then(res =>
      dispatch({
         type: GET_COUNTRIES,
         payload: res.data
      })
   );
};
