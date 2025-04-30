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
    <div className="bg-cover h-screen bg-[url('/src/components/media/vecteezy_beautiful-blue-and-golden-sky-and-clouds-abstract_7773672.jpg')] flex flex-col items-center justify-center p-4 " >
      <div className="w-full max-w-md bg-black/50 rounded-2xl shadow-2xl text-white p-5 backdrop-blur-xl animate-pulse hover:animate-none">
        <h1 className="text-5xl font-extrabold text-center mb-6 animate-none">
          🌎Weather
        </h1>
        <div className="flex flex-col gap-4 animate-none">
          <input
            type="text"
            placeholder="Enter city name..."
            className="placeholder:italic placeholder:text-slate-400  block text-lg text-white w-full py-2 pl-9 pr-3  rounded-md p-2 font-semibold bg-transparent border-t border-b border-t-white border-b-neutral-800 focus:outline-none focus:border-t-white focus:border-b-neutral-800 focus:border-b-black focus:shadow-[1px_3px_9px_#00000020] hover:border-slate-400 transition duration-800 ease shadow-xl  "
            // value={city}       
            onChange={(e) => {
              setCity(e.target.value);
            }}
            onKeyDown={(e) => e.key === "Enter" && handleData()}
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-4 animate-none">
        <button
            className="text-white bg-[linear-gradient(110deg,#000103,40%,#1e2631,60%,#000103)] bg-[length:200%_100%] from-blue-500 via-blue-600 to-blue-700  hover:bg-gradient-to-br hover:scale-105 hover:shadow-md  focus:ring-black-300 dark:focus:ring-black-800 px-12 py-2 rounded-md font-semibold text-md"
            onClick={handleData}
          >
            🔎 Search City
          </button>
        </div>
          
        

        {error && <p className="text-blue-5000 text-lg mt-4 font-semibold text-center animate-none">{error}</p>}

        {weather && (
          <div className="flex flex-col items-center justify-center mt-5 animate-none">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="weather-icon"
              className="mx-auto h-30 object-contain"
            />
            <h2 className="md-4 text-2xl font-semibold">
              {weather.name}/{weather.sys.country}
            </h2>
            <p className="mt-2 text-md font-medium">
              {weather.weather[0].description}
            </p>
            <p className="mt-2 text-2xl font-extrabold">
              {weather.main.temp}°C
            </p>

            <div className="grid md:grid-cols-3 sm:grid-col-1 gap-1 md:gap-4 text-sm place-items-center mt-6  ">
              <div className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,40%,#1e2631,60%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 grid place-items-center">
                <p className="text-white text-xs ">Humidity</p>
                <p className="text-white text-xs">{weather.main.humidity}%</p>
              </div>
              <div className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,40%,#1e2631,60%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 grid place-items-center">
                <p className="text-white font-semibold ">Wind</p>
                <p className="text-white text-xs">{weather.wind.speed} m/s</p>
              </div>
              <div className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,40%,#1e2631,60%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 grid place-items-center">
                <p className="text-white font-semibold ">Clouds</p>
                <p className="text-white text-xs ">{weather.clouds.all}%</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
