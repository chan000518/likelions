import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard'; 

const MovieCardList = ({ searchWord }) => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovie = async () => {
      setLoading(true);
      setError(null);
      try {
        const Data = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchWord}`);
        setMovieList(
          Data.data.map((item) => ({
            id: item.show.id,
            name: item.show.name,
            image: item.show.image?.medium || '',
            genres: item.show.genres.map((genre) => `#${genre}`),
            runtime: item.show.runtime,
          }))
        );
      } catch (error) {
        console.error('정보 가져오기 실패:', error);
        setMovieList([]);
        setError(error.message || '알 수 없는 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    loadMovie();
  }, [searchWord]);

  if (loading) {
    return (
      <div className="mt-6 text-black text-[15px] animate-pulse">
        영화를 조회중입니다.....
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
    <div className="flex">
      <div className="w-[650px] ml-[220px]">
        <div className="grid grid-cols-2 gap-10 mt-8">
          {movieList.map((item) => (
            <MovieCard
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              genres={item.genres}
            />
          ))}
        </div>
      </div>

      <div className="fixed right-52 ml-[30px] mt-8 w-[200px] h-[250px] bg-white shadow-md border border-gray-300 rounded-[24px] px-6 py-4">
        <h2 className="text-xl font-bold mb-2 text-gray-800">검색 결과</h2>
        <p className="text-gray-600">
          총 <span className="font-semibold">{movieList.length}</span>개의 결과를 찾았습니다.
        </p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1.5 px-3 rounded-lg text-sm"
        >
          맨 위로 가기
        </button>
        <button
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1.5 px-3 rounded-lg text-sm"
        >
          맨 밑으로 가기
        </button>
      </div>
    </div>
  );
};

export default MovieCardList;