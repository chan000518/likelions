import { useEffect, useState } from 'react';
import { getWeatherIcon } from '../utils/getWeatherIcon';

const WeatherCard = ({ city }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadWeather = async () => {
      setLoading(true);
      setError(null);
      // TODO: axios로 날씨 API 호출 코드 try문 작성!
      try {
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

  return (
    <div className="mt-6 flex items-center justify-around gap-4 min-w-[300px] w-auto p-4 rounded-2xl bg-white shadow text-gray-800 text-center">
      <span className="text-xl font-medium">{city}</span>
      <p className="text-xl font-medium">--°C</p>
      <p className="text-4xl">🌤️</p>
    </div>
  );
};

export default WeatherCard;
