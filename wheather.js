
//variaveis e selecao de elementos 
const apikey="ca7c03c059e860a27a755a573bd43493";
const apicountryURL="https://flagsapi.com/png/";
const cityInput=document.querySelector("#cityInput");
const searchBtn=document.querySelector("#search");
const cityElement=document.querySelector("#city");
const tempElement=document.querySelector("#temperature span");
const descElement=document.querySelector("#description");
const weatherIconElement=document.querySelector("#wheater-icon");
const countryElement=document.querySelector("#country")
const humidityElement=document.querySelector("#humidity span");
const windElement=document.querySelector("#wind span");
const weatherContainer=document.querySelector("#weather-data");

// funcoes
const getWeatherData=async(city)=>{
    const apiWeatherURL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}&lang=pt_pt`
    const res=await fetch(apiWeatherURL)
    const data= await res.json()
    return data;
}
const getCountryFlagURL = (countryCode) => {
    return `${apicountryURL}${countryCode.toLowerCase()}/64.png`;
  };
const showWeatherData = async (city) => {
    const data = await getWeatherData(city);
    cityElement.innerText = data.name;
    tempElement.innerText=parseInt(data.main.temp)
    descElement.innerText=data.weather[0].description;
    weatherIconElement.setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`

    );
    countryElement.setAttribute("src",
     `http://openweathermap.org/images/flags/${data.sys.country.toLowerCase()}.png`);
    
    humidityElement.innerText=`${data.main.humidity}%`;
    windElement.innerText=`${data.wind.speed}km/h`
    weatherContainer.classList.remove("hide");
  };
//eventos 
searchBtn.addEventListener("click" ,(e) => {
    e.preventDefault();
    const city=cityInput.value;
    showWeatherData(city);
});
