import axios from 'axios';

const URL = "https://restcountries.eu/rest/v2/name/";

export function searchCountry(country){
	const url = `${URL}${country}`;
	const request = axios.get(url);

	return{
		type: 'FETCH_COUNTRY',
		payload: request
	}
};