import { useEffect, useState } from "react";
import "./WeatherWidget.css";

const WeatherWidget = () => {
	const [weather, setWeather] = useState(null);
	const [unit, setUnit] = useState("metric"); // "metric" or "imperial"

	const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;

	const fetchWeather = async (position) => {
		const { latitude, longitude } = position.coords;

		try {
			const weatherRes = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${weatherApiKey}`
			);
         const weatherData = await weatherRes.json();
         
         const locationRes = await fetch(
						`https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${weatherApiKey}`
					);
         const locationData = await locationRes.json();

         const city = locationData[0]?.name || weatherData.name;
         const country = locationData[0]?.country || weatherData.sys.country;
			
         setWeather({
            ...weatherData,
            locationName: `${city}, ${country}`,
         });
		} catch (err) {
			console.error("Error fetching weather data:", err);
		}
	};

	const handleError = () => {
		alert("Location access is required for weather info.");
	};

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(fetchWeather, handleError);
		} else {
			alert("Geolocation is not supported by this browser.");
		}
	}, [unit]);

	const toggleUnit = () => {
		setUnit((prev) => (prev === "metric" ? "imperial" : "metric"));
	};

	if (!weather) return <div className="text-sm text-gray-500">Loading...</div>;

	const { temp } = weather.main;
	const weatherIcon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

	return (
		<div
			className="weather-container"
			onClick={toggleUnit}
			title={`Click to switch to ${unit === "metric" ? "°F" : "°C"}`}>
			<div className="weather-main">
				<img src={weatherIcon} alt="Weather Icon" className="weather-icon" />
				<span>
					{Math.round(temp)}°{unit === "metric" ? "C" : "F"}
				</span>
			</div>
			<span className="weather-location">{weather.locationName}</span>
		</div>
	);
};

export default WeatherWidget;
