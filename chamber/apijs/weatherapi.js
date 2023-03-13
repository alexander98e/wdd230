const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const currentWind = document.querySelector('#windspeed');
const currentWindchill = document.querySelector('#wind-chill');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Bolivia,BO&appid=ccf3a81b3396c495cc896291da73460d&units=imperial';



async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); 
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();           
  
  
  function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    currentWind.innerHTML = `<strong>${weatherData.wind.speed}</strong>`;  

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    var windChill= (35.74 + (0.6215 * currentTemp))-(35.75 * Math.pow(currentWind,0.16)) + (0.4275*currentTemp*Math.pow(currentWind,0.16));

    var windChill= Math.round(windChill);
    document.getElementById("windChill").innerHTML= windChill;
  }
  //The National Weather Service's formula to calculate wind chill is: """""35.74 + 0.6215T – 35.75(V0.16) + 0.4275T(V0.16). 
  //Simple, right? Let's break it down: Here, T represents air temperature in Fahrenheit and V represents wind speed in miles per hour.
  //windChill = 35.74 + 0.6215 * temperature + (0.4275 * temperature - 35.75) * Math.pow(windSpeed, 0.16);
  //https://www.youtube.com/watch?v=u8owGbjydqA

