import weatherResult from './weatherResult';

const cityForm = document.getElementById('city-form');
const cityInput = document.getElementById('city');

const submit = () => {
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
      });
    event.preventDefault();
    cityForm.reset();
    document.getElementById('toggle').style.display = 'block';
    document.querySelector('.titles').style.display = 'block';
  });
};

export default submit;