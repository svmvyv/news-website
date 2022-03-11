window.addEventListener("load", () => {
    let lon;
    let lat;
    let city = "eddah";
    let cityName = document.querySelector(".city");
    let apiKey = "9fb1ed892ffd436caa8f19611008a777";
    let Reigon = document.querySelector(".reigon");
    let tempValue = document.querySelector(".temperature");
    let tempDesc = document.querySelector(".desc");
    let sunRise = document.querySelector(".sunrise");
    let sunSet = document.querySelector(".sunset");
    let weatherIcon = document.querySelector(".weatherIcon");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&city=${city}&key=${apiKey}&lang=eng`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    const { timezone, temp, sr, sd, city_name } = data.data[0]
                    const { description, icon } = data.data[0].weather


                    Reigon.textContent = timezone;
                    tempValue.textContent = Math.floor(temp) + "°C";
                    tempDesc.textContent = description;
                    sunRise.textContent = sr;
                    sunSet.textContent = sd;
                    cityName.textContent = city_name;
                    weatherIcon.src = `https://www.weatherbit.io/static/img/icons/${icon}.png`;
                })
        })
    }
})