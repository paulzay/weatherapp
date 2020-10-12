// Access DOM elements
const cityForm = document.getElementById('city-form');
const cityInput = document.getElementById('city');

function weatherResult(i) {
  const temp = document.getElementById('temp');
  const celcius = Math.round(parseFloat(i.main.temp) - 273.15);
  const { pressure } = i.main;
  const { humidity } = i.main;
  const description = i.weather[0].main;
  const icon = document.getElementById('icon');

  document.getElementById('description').innerHTML = description;
  temp.innerHTML = `Temperature: ${celcius} &deg;`;
  document.getElementById('pressure').innerHTML = `Pressure: ${pressure}`;
  document.getElementById('humidity').innerHTML = `Humidity: ${humidity}`;
  document.getElementById('location').innerHTML = `Location: ${i.name}`;

  if (description.indexOf('rain') > 0) {
    icon.innerHTML = `
            <div class="icon rainy">
            <div class="cloud"></div>
            <div class="rain"></div>
            </div>
        `;
    return icon;
  } if (description.indexOf('cloud') > 0) {
    document.getElementById('icons').innerHTML = `
            <div class="icon cloudy">
                <div class="cloud"></div>
                <div class="cloud"></div>
            </div>
        `;
  } else if (description.indexOf('sunny') > 0) {
    icon.innerHTML = `
        <div class="icon sunny">
            <div class="sun">
                <div class="rays"></div>
            </div>
        </div>
        `;
  }
  return false;
}
cityForm.addEventListener('submit', (event) => {
  const chosenCity = cityInput.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${
      chosenCity
    }&APPID=b34fddd3dae4a2eb0ad363b62f98ba1e`,
  )
    .then((response) => response.json())
    .then((data) => {
      weatherResult(data);
    })
    .catch((e) => {
      console.log(e);
    });
  event.preventDefault();
  cityForm.reset();
});
