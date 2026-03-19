
async function getWeather() {
    const city = document.getElementById('city');
    const apiKey = "50965f50b67b56afdf33799237c592a6";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url)
    }
}
