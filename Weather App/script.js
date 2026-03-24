const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city');

const cityNameEl = document.getElementById('city-name');
const tempEl = document.getElementById('temp');
const weatherEl = document.getElementById('weather');
const precipitaitonEl = document.getElementById('precipitaiton');
const humidityEl = document.getElementById('humidity');
const errorEl = document.getElementById("error");

async function getWeather() {
    const city = cityInput.value;
    const apiKey = "50965f50b67b56afdf33799237c592a6";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url)
        const data = await response.json();

        if(data.cod !== 200) {
           errorEl.textContent = "City Not Found!";
           clearData();
           return; 
        }
        
        //Clear error
        errorEl.textContent = "";

        //Update UI
        cityNameEl.textContent = data.name;
        tempEl.textContent = `Temperature: ${data.main.temp} °C`;
        weatherEl.textContent = `Weather: ${data.weather[0].description}`;
        precipitaitonEl.textContent = `Precipitation: ${data.precipitation[0].description}`;
        humidityEl.textContent = `Humidity: ${data.main.humidity}%`;
    }

    catch(error) {
      errorEl.textContent = "Error fetching data";
      clearData();
    }
}

searchBtn.addEventListener("click", getWeather);

cityInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
       getWeather();
    }
});


