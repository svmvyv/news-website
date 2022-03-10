window.addEventListener("load", () => {
    let lon;
    let lat;
    let apiKey = "9fb1ed892ffd436caa8f19611008a777";
    let cityName = document.querySelector(".city");
    let temperature = document.querySelector(".temperature");
    let sunrise = document.querySelector(".sunrise");
    let sunset = document.querySelector(".sunset");
    let weatherIcon = document.querySelector(".weather-icon-pic")

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${apiKey}&lang=eng`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    const { timezone, temperature, sunrise, sunset } = data.data[0];
                    const { icon } = data.data[0].weather

                    cityName.textContent = timezone;
                    temperature.textContent = Math.floor(temp) + "°C";
                    sunrise.textContent = sunrise;
                    sunset.textContent = sunset;
                    weatherIcon.src = `https://api.weatherbit.io/static/img/icons/${icon}.png`;
                })
        })
    }
})