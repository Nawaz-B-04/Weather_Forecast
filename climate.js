let apiKey = "786e0220992701eb25d4c0c23a79e290";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox = document.querySelector(".search input");
let weatherImg = document.querySelector(".weather-img");
let searchBtn = document.querySelector(".search button")
async function checkWeather(city){
    try{
        let response = await axios.get(apiUrl + city + `&appid=${apiKey}`);
        let data = response.data;
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"

    if(data.weather[0].main == "Clouds"){
        weatherImg.src = "./images/clouds.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherImg.src = "./images/rain.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherImg.src = "./images/mist.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherImg.src = "./images/drizzle.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherImg.src = "./images/clear.png";
    }

    document.querySelector(".weather").style.display = "block";
    }
    catch(err){
        alert("Invalid city");
    }

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
searchBox.addEventListener("keydown",function(event){
    if (event.key === 'Enter') {
        
        checkWeather(searchBox.value);
    }
})