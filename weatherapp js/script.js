
// const APIURL	= 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/';
const url = (location) => `https://api.openweathermap.com/data/2.5/weather?q=${location}&appid=${apikey}`;
const apikey = "3265874a2c77ae4a04bb96236a642d2f";




async function getWeatherByLocation(location) {
	console.log("inside weather");
	// const resp = await fetch(url(location),{origin: 'cors'});
	const resp = await fetch(url(location), { origin: "cors" });
	const respData = await resp.json();
	console.log(respData);
}


getWeatherByLocation('London');