const cityForm = document.getElementById('city-form');
const cityInput = document.getElementById('city');

const weatherResult = (i) => {
  const temp = document.getElementById('temp');
  const celcius = Math.round(parseFloat(i.main.temp) - 273.15);
  const { pressure } = i.main;
  const { humidity } = i.main;
  const description = i.weather[0].main;

  document.getElementById('description').innerHTML = description;
  temp.innerHTML = `Temperature: ${celcius} &deg;`;
  document.getElementById('pressure').innerHTML = `Pressure: ${pressure}`;
  document.getElementById('humidity').innerHTML = `Humidity: ${humidity}`;
  document.getElementById('location').innerHTML = `Location: ${i.name}`;

  return false;
};
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
