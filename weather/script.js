let formInput = document.forms.data;
let cityInput = formInput.elements.city;
let countryInput = formInput.elements.country;
let content = document.querySelector('#content');
let myWeather = document.querySelector('#myWeather-info');
let blockMyWeather = document.querySelector('#block-myWeather');
let weatherData = JSON.parse(localStorage.getItem('weather'));


for(key in weatherData) {
    let div = document.createElement('div');
    div.className = 'myWeather-info';
    div.innerText =`${key}: temperature ${weatherData[key].temperature}°C, time: ${weatherData[key].observation_time}, wind degree: ${weatherData[key].wind_degree}, humidity: ${weatherData[key].humidity}%, wind_dir: ${weatherData[key].wind_dir}`
    myWeather.append(div);
}

async function getWeather(city, country) {
    if (city) {
  let stream = await fetch(`http://api.weatherstack.com/current?access_key=8c7a67463e076a13bd14170381fb599a&query=${city},${country}`)
  let result = await stream.json();
    
  let previousWeather = JSON.parse(localStorage.getItem('weather'));   
    let newWeather = {
        ...previousWeather,
        [`${result.location.country}, ${result.location.name}`] : result.current
    }
  localStorage.setItem(`weather`, JSON.stringify(newWeather)); 
       
        let content = document.querySelector('#content');
        content.style.display = 'block';
        let iconLocation = document.querySelector('#inon-location');
        let temperature = document.querySelector('#temperature');
        let cityInfo = document.querySelector('#city-country-info');
        let icons = document.querySelector('#icons');
        let time = document.querySelector('#time');
        let cloudcover = document.querySelector('#cloudcover');
        let weatherDescriptions = document.querySelector('#weather-descriptions');
            
        let feesllike = document.querySelector('#feelslike');
        let windDir = document.querySelector('#wind-dir');
        let visibility = document.querySelector('#visibility');
            
        let speed = document.querySelector('#speed');
        let pressure = document.querySelector('#pressure');
        let pricip = document.querySelector('#precip');
        
        iconLocation.src ="image/location.png";
        temperature.innerText = `${result.current.temperature}°C`;
        icons.src = result.current.weather_icons;
        cityInfo.innerText = `${result.location.name}, ${result.location.country}`;
       
        time.innerText =` Time: ${result.current.observation_time}`;
        cloudcover.innerText =` Cloud cover: ${result.current.cloudcover}%`;
        speed.innerText =` Speed: ${result.current.wind_speed} km/h`;
        
        feelslike.innerText =` Feels Like: ${result.current.feelslike} °c`;
        windDir.innerText =` Wind direction: ${result.current.wind_dir}`;
        visibility.innerText =` Visibility: ${result.current.visibility} km`;

        weatherDescriptions.innerText = result.current.weather_descriptions;
        pressure.innerText =` Pressure: ${result.current.pressure}`;
        precip.innerText =` Precip: ${result.current.precip} mm`;

        removeDataInput();
        createIconsWeather();
        blockMyWeather.style.display = 'none';

    }else{
        alert('Please enter the data to request the weather!');
    }
}

document.querySelector('#search').addEventListener('submit', (event) => {
        event.preventDefault();
        getWeather(cityInput.value, countryInput.value);        
})

document.querySelector('#btn-location').addEventListener('click', (event) => {
        navigator.geolocation.getCurrentPosition((result) => { 
        let {latitude, longitude} = result.coords
        getWeather(latitude, longitude);
        })
})

document.querySelector('#btn-my-weather').addEventListener('click', () => {
    content.style.display = 'none';
    blockMyWeather.style.display = 'flex';
})

document.querySelector('#btn-clouse'). addEventListener('click', () => {
    blockMyWeather.style.display = 'none';
})

document.querySelector('#btn-clear').addEventListener('click', () => {
    localStorage.clear();
    blockMyWeather.style.display = 'none';
    myWeather.innerHTML ='';
})

// add icons
function createIconsWeather() {
    document.querySelector('#icon-time').src ='image/icons8-time-machine-24.png';
    document.querySelector('#icon-speed').src ='image/icons8-windsock-24.png';
    document.querySelector('#icon-cloudcover').src = 'image/icons8-cloud-24.png';

    document.querySelector('#icon-feelslike').src ='image/temperature (1).png';
    document.querySelector('#icon-direction').src = 'image/wind-rose.png';
    document.querySelector('#icon-visibility').src ='image/icons8-wear-high-visibility-jacket-24.png';

    document.querySelector('#icon-description').src ='image/icons8-rain-cloud-24.png';;
    document.querySelector('#icon-pressure').src ='image/icons8-dew-point-24.png';
    document.querySelector('#icon-precip').src ='image/icons8-moisture-24.png';
}

// clear values inputs
function removeDataInput() {
    cityInput.value = '';
    countryInput.value = '';
}
