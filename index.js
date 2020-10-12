// Access DOM elements
const reportSection = document.getElementById('weather-report');
const cityForm = document.getElementById('city-form');
const cityInput = document.getElementById('city');
const chosenCity = cityInput.value;
let apiRequest = new XMLHttpRequest();




function weatherResult(i) {
    let temp = document.getElementById("temp");
	var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    let feels_like = i.main.feels_like;
    let pressure = i.main.pressure;
    let humidity = i.main.humidity;
	let description = i.weather[0].main;
    const icon = document.getElementById('icon');

	document.getElementById("description").innerHTML = description;
    temp.innerHTML = `Temperature: ${celcius} &deg;`;
    document.getElementById('feels-like').innerHTML = `It feels like: ${feels_like} &deg;`;
    document.getElementById('pressure').innerHTML = `Pressure: ${pressure}`;
    document.getElementById('humidity').innerHTML = `Humidity: ${humidity}`;
	document.getElementById("location").innerHTML = `Location: ${d.name}`;
    
	if (description.indexOf("rain") > 0) {
        icon.innerHTML = `
            <div class="icon rainy">
            <div class="cloud"></div>
            <div class="rain"></div>
            </div>
        `;
        return icon;
	} else if (description.indexOf("cloud") > 0) {

        document.getElementById('icons').innerHTML = `
            <div class="icon cloudy">
                <div class="cloud"></div>
                <div class="cloud"></div>
            </div>
        `;
    
	} else if (description.indexOf("sunny") > 0) {
        icon.innerHTML = `
        <div class="icon sunny">
            <div class="sun">
                <div class="rays"></div>
            </div>
        </div>
        `
	}
}
cityForm.addEventListener('submit', (event) =>{
    
    const chosenCity = cityInput.value;
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
            chosenCity +
            "&APPID=b34fddd3dae4a2eb0ad363b62f98ba1e"
    )
	.then(function(response) { return response.json() })
	.then(function(data) {
		weatherResult(data); 
	})
	.catch(function(e) {
        console.log(e)
    });
    event.preventDefault();
    cityForm.reset();

});
