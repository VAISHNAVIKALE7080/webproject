async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '7563654c53a2c04e5217c9508be8281b';
    
 // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            const weatherResult = document.getElementById('weather-result');
            weatherResult.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Error fetching the weather data:', error);
        alert('Could not retrieve weather data.');
    }
}
