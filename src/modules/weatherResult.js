const weatherResult = (i) => {
  const temp = document.getElementById('temp');
  const celcius = `${Math.round(parseFloat(i.main.temp) - 273.15)} &deg; C `;
  const fahrenheit = `${Math.round(((parseFloat(i.main.temp) - 273.15) * 1.8) + 32)} &deg; F`;

  const { pressure } = i.main;
  const { humidity } = i.main;
  const description = i.weather[0].main;

  document.getElementById('description').innerHTML = description;
  temp.innerHTML = `${celcius}`;
  document.getElementById('pressure').innerHTML = `Pressure: ${pressure}`;
  document.getElementById('humidity').innerHTML = `Humidity: ${humidity}`;
  document.getElementById('location').innerHTML = `Location: ${i.name}`;

  document.getElementById('toggle').addEventListener('click', () => {
    temp.innerHTML = `${fahrenheit}` ? temp.innerHTML = `${fahrenheit}` : temp.innerHTML = `${celcius}`;
  });
  return false;
};

export default weatherResult;