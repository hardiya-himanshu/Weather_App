const API_key =  "a425612492a8a83e7f0e09fe67a8c21e";
const API_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=nagpur";

async function checkWeather(){
    const response = await fetch(API_url+`&appid=${API_key}`);
    var data = await response.json();
    console.log(data);
}

checkWeather(); 