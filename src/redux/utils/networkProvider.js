import axios from 'axios';

const darkSkyProvider = axios.create({
	baseURL: 'https://api.darksky.net',
	timeout: 10000
});

const hereMapsProvider = axios.create({
	baseURL: 'https://reverse.geocoder.api.here.com/6.2',
	timeout: 10000
});

const autoCompleteProvider = axios.create({
	baseURL: 'https://autocomplete.geocoder.api.here.com/6.2',
	timeout: 10000
})

darkSkyProvider.all = axios.all;
hereMapsProvider.all = axios.all;
autoCompleteProvider.all = axios.all;

export {
	darkSkyProvider,
	hereMapsProvider,
	autoCompleteProvider
}