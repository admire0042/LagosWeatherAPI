$(document).ready(function() {

	
		let date = new Date();
		let year = date.getFullYear() 
		let month = date.getMonth();
		let day = date.getDay();
		let days = date.getDate();
		let hour = date.getHours() % 12;
		let minutes = date.getMinutes();
		let seconds = date.getSeconds();
		let Days= ["Sun","Mon","Tues","Wed","Thrus","Fri","Sat"];
		let Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		
	fetch("https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=82005d27a116c2880c8f0fcb866998a0&lang=en&units=metric")
	.then(function(response){
		return response.json();
		
	})
	.then(function(data){

		console.log(data);
		
		$("#lagos").html(`${data.name} ${data.sys.country}`);
		$("#sunrise").html(`Sunrise: ${data.sys.sunrise}`);
		$("#sunset").html(`Sunset: ${data.sys.sunrise}`);
		$("#timezone").html(`Timezone: ${data.timezone}`);
		$("#temperature").html(`${data.main.temp}°C`);
		$("#description").html(`${data.weather[0].description}`);
		$("#humidity").html(`Humidity: ${data.main.humidity}%`);
		$("#speed").html(`Speed: ${data.wind.speed}km/h`);
		$("#degree").html(`Degree: ${data.wind.deg}`);
		$("#pressure").html(`Pressure: ${data.main.pressure}Pa`);
		$("#date").html(`${Days[day]} ${days} ${Months[month]} ${year}`);
		//$("#icon").html(`<img src="https://api.openweathermap.org/img/w/${data.weather[0].icon}" alt="image"/>`);

		
	})
	

    


})




 