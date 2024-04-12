var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apiK = "63a90ae96d390ec37d6c1252f5a86e1a";

function conversion(val) {
    return (val - 273).toFixed(3);
}

btn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apiK)
        .then(res => res.json())
        .then(data => {
            var nameVal = data['name'];
            var descriptionVal = data['weather'][0]['description'];
            var temperatureVal = data['main']['temp'];
            var windSpeedVal = data['wind']['speed'];

            city.innerHTML = `Weather of <span>${nameVal}</span>`;
            descrip.innerHTML = `Temperature: <span>${conversion(temperatureVal)} C</span>`;
            temp.innerHTML = `Sky Conditions: <span>${descriptionVal}</span>`;
            wind.innerHTML = `Wind speed: <span>${windSpeedVal} km/h</span>`;
        })
        .catch(err => alert('You entered Wrong city name'));
});
