document.addEventListener('DOMContentLoaded', () => {
    const weatherForm = document.getElementById('weather-form');
    const cityInput = document.getElementById('city-input');
    const weatherResult = document.getElementById('weather-result');
    const cityNameElem = document.getElementById('city-name');
    const temperatureElem = document.getElementById('temperature');
    const descriptionElem = document.getElementById('description');

    weatherForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const cityName = cityInput.value;
        getWeather(cityName);
    });

    async function getWeather(city) {
        const apiKey = '3eb39aa69a4b46c8f04ff586225af5c4';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${'3eb39aa69a4b46c8f04ff586225af5c4'}&units=metric`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.cod === 200) {
                weatherResult.classList.remove('hidden');
                cityNameElem.textContent = data.name;
                temperatureElem.textContent = `Temperature: ${data.main.temp} °C`;
                descriptionElem.textContent = `Weather: ${data.weather[0].description}`;
            } else {
                alert('City not found');
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
            alert('Failed to fetch weather data. Please try again.');
        }
    }
});
