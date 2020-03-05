const axios = require('axios');

export const getDemo = params => {
	const URL = 'http://gateway.marvel.com/v1/public/characters?limit=12&nameStartsWith=${character}&apikey=${key}';

	return axios.get(URL).then(response => {
		return response.data;
	});
};

export const apiCall = (url, data, headers, method) =>
	axios({
		method,
		url,
		data,
		headers
	});
