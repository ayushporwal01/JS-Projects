
async function getWeather() {
    const city = document.getElementById('city');
    const apiKey = "50965f50b67b56afdf33799237c592a6";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url)
        const data = response.json();

        if(data.cod !== 200) {
           document.getElementById("result").innerHTML = "City Not Found!";
           return; 
        }

        const temp = data.main.temp;
        const weather = data.weather[0].description;
        const humidity = data.main.humidity;

        document.getElementById("result").innerHTML = `
          <h3>${data.name}</h3>
          <p>Temperature: ${temp}C</p>
          <p>Weather: ${weather}C</p>
          <p>Humidity: ${humidity}C</p>
        `;
    }
}
