async function fetchWeatherData(cityName){
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=78e7dd9059b2bed9c3b1918793e7894b`
	const response = await fetch(url)
	const data = await response.json();
	let city = document.getElementById("city");
	city.innerHTML=data.name;
	let windSpeed =document.getElementById("windSpeed");
	windSpeed.innerHTML=data.wind.speed+" km/hr";
	let humidity = document.getElementById("humidity") ;
	humidity.innerHTML = data.main.humidity+" g/kg";
	let temp = document.getElementById("temp");
	temp.innerHTML = Math.round((data.main.temp)-273.15)+"0°C";
	console.log(data);

}


function fetchCity(){
	let cityName = document.getElementById("cityName")
	if (cityName.value===""){
		alert("Enter a valid city ");
	}else{
		fetchWeatherData(cityName.value);
		cityName.value="";
	}
}