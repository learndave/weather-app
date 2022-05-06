const appID = '20f7632ffc2c022654e4093c6947b4f4';

const searchTemp = () => {
    let cityName = document.querySelector('input#city-name').value;

    if (cityName === '') {
        cityName = 'mawab';
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appID}`)
    .then( (response) => {
        return response.json();
    })
    .then( (response) => {
        let celsius = `${Math.round(response.main.temp - 273.15)}°C`;
        let location = `${response.name}, ${response.sys.country}`;
        let date = new Date(response.dt * 1000).toLocaleString();

        document.querySelector('.weather-detail.location').innerHTML = location;
        document.querySelector('.weather-detail.temperature').innerHTML = celsius;
        document.querySelector('.weather-detail.date').innerHTML = date;
    })
    .catch( (err) => {
        console.error(err);
        document.querySelector('.weather-detail.location').innerHTML = `Location not found`;
        document.querySelector('.weather-detail.temperature').innerHTML = `-°C`;
        document.querySelector('.weather-detail.date').innerHTML = "";
    });

    return false;
}

searchTemp()