import React, { useEffect, useState } from "react";
import "./WeatherWidget.css";

const WeatherWidget = () => {
   const [weather, setWeather] = useState(null);
   const [unit, setUnit] = useState("metric"); // "metric" or "imperial"

   useEffect(() => {
      if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(fetchWeather, handleError);
      } else {
         alert("Geolocation is not supported by this browser.");
      }
   }, [unit]);

   const fetchWeather = async (position) => {
      const { latitude, longitude } = position.coords;

      try {
         const res = await fetch(
						`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${
							import.meta.env.VITE_WEATHER_API_KEY
						}`
					);
         const data = await res.json();
         setWeather(data);
      } catch (err) {
         console.error("Error fetching weather data:", err);
      }
   };

   const handleError = () => {
      alert("Location access is required for weather info.")
   };

   const toggleUnit = () => {
      setUnit((prev) => (prev === "metric" ? "imperial" : "metric"));
   };

   if (!weather) return <div className="text-sm text-gray-500">Loading...</div>;

   const { temp } = weather.main;
   const weatherIcon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

   return (
      <div
         className="weather-container flex items-center gap-2 cursor-pointer"
         onClick={toggleUnit}
         title={`Click to switch to ${unit === "metric" ? "°F" : "°C"}`}
      >
         <img src={weatherIcon} alt="Weather Icon" className="weather-icon" />
         <span className="text-sm text-white">
            {Math.round(temp)}°{unit === "metric" ? "C" : "F"}
         </span>
      </div>
   );
};

export default WeatherWidget;