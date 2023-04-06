
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const currentWind = document.querySelector('#windspeed');
const currentHumidity = document.querySelector('#humidity');
const FORECAST = document.querySelector('#forecast');


const url = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad,US&cnt=3&appid=f5db6fc8becd88cb022aca6611e248e8&units=imperial';


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
    currentHumidity.innerHTML = `<strong>${weatherData.main.humidity}</strong>`; 

    FORECAST.innerHTML = `<strong>${weatherData.forecast}</strong>`; 
    

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
        
  }
  