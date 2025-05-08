import { useEffect, useState } from 'react';
import { getWeatherIcon } from '../utils/getWeatherIcon';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const WeatherCard = ({ city }) => {
  const [weather, setWeather] = useState({temp: "--", icon: getWeatherIcon("--")});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadWeather = async () => {
      setLoading(true);
      setError(null);
      // TODO: axios로 날씨 API 호출 코드 try문 작성!
      try {
        const gedData = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`);

        const location = gedData.data[0];

        if (!location) {
          throw new Error('도시를 찾을 수 없습니다.');
        }

        const weatherData = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${API_KEY}&lang=kr`
        );

        console.log(weatherData.data.main.temp);

        setWeather({
          name: weatherData.data.name,
          temp: Math.round(weatherData.data.main.temp),
          icon: getWeatherIcon(weatherData.data.weather[0].main),
        });
        
      } catch (error) {
        console.error('날씨 정보 가져오기 실패:', error);
        setWeather(null);
        setError(error.message || '알 수 없는 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    loadWeather();
  }, [city]);

  if (loading) {
    return (
      <div className="mt-6 text-black text-[15px] animate-pulse">
        실시간 날씨를 조회중입니다.....
      </div>
    );
  }
  if (error) {
    return (
      <div className="mt-6 text-red text-[15px]">
      {error}
      </div>
    );
  }
  return (
    <>
    <div className="mt-6 flex items-center justify-around gap-4 min-w-[300px] w-auto p-4 rounded-2xl bg-white shadow text-gray-800 text-center">
      <span className="text-xl font-medium">{weather.name}</span>
      <p className="text-xl font-medium">{weather.temp}°C</p>
      <p className="text-4xl">{weather.icon}</p>
    </div>
    </>
  );
};

export default WeatherCard;
