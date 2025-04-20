import { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
;

  const api_key = "e10e48cd5c1df35f6da8d75df73a8bb5";

  const handleData = async () => {
    try {
      setError("");
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
      );
      if (!response.ok) throw new Error("City not found 🚫");
      const LiveData = await response.json();
      setWeather(LiveData);
    } catch (error) {
      setWeather(null);
      setError(error.message);
    }
  };


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[url('/src/components/media/images.jpg')] bg-cover bg-no-repeat p-4 " >
      <div className="w-full max-w-md bg-white bg-opacity-50 backdrop-blur-lg rounded-3xl shadow-2xl p-6 text-black">
        <h1 className="text-3xl font-extrabold text-center mb-5 tracking-wide">
          ☁️ Weather  Application
        </h1>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter city name..."
            className="p-3 rounded-tl-lg rounded-br-lg text-black font-semibold focus:outline-none shadow-inner bg-white"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            onKeyDown={(e) => e.key === "Enter" && handleData()}
          />
          <button
            className="bg-white text-indigo-600 font-semibold font-semibold py-2 rounded-tr-lg rounded-bl-lg hover:bg-indigo-100 
          "
            onClick={handleData}
          >
            🔎 Search City
          </button>
        </div>

        {error && <p className="text-blue-5000 text-lg mt-4 font-semibold text-center">{error}</p>}

        {weather && (
          <div className="mt-6 text-center">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="weather-icon"
              className="mx-auto h-32 w-32 object-contain mb-4"
            />
            <h2 className="text-3xl font-bold">
              {weather.name}/{weather.sys.country}
            </h2>
            <p className="text-xl capitalize">
              {weather.weather[0].description}
            </p>
            <p className="text-5xl font-extrabold mt-2">
              {weather.main.temp}°C
            </p>

            <div className="grid grid-cols-3 gap-2 mt-6 text-base text-black">
              <div className="bg-white bg-opacity-60 rounded-xl p-2">
                <p className="font-semibold">Humidity</p>
                <p>{weather.main.humidity}%</p>
              </div>
              <div className="bg-white bg-opacity-60 rounded-xl p-2">
                <p className="font-semibold">Wind</p>
                <p>{weather.wind.speed} m/s</p>
              </div>
              <div className="bg-white bg-opacity-60 rounded-xl p-2">
                <p className="font-semibold">Clouds</p>
                <p>{weather.clouds.all}%</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
