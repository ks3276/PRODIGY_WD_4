async function getWeather()
{
    const apiKey="your_api_key";
    const city=document.getElementById("cityInput").value;
    const weatherInfo=document.getElementById("weatherInfo");
    if(!city)
    {
        weatherInfo.innerHTML="<p>Please enter a city name.</p>";
        return;
    }
    try
    {
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data=await response.json();
        if (data.cod==="404")
        {
            weatherInfo.innerHTML="<p>City not found.</p>";
            return;
        }
        weatherInfo.innerHTML=`
            <p><strong>${data.name},${data.sys.country}</strong></p>
            <p>Temperature:${data.main.temp}°C</p>
            <p>Weather:${data.weather[0]. descriptive}</p>
        `;
    }
    catch(error)
    {
        weatherInfo.innerHTML="<p>Error fetching data. Try again later.</p>";
    }
}
