import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieDetail from "../component/MovieDetail"

const Show = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovie = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setMovie({
          id: data.id,
          name: data.name,
          image: data.image?.medium || "",
          genres: data.genres.map((g) => `#${g}`),
          runtime: data.runtime,
          summary: data.summary,
          rating: data.rating?.average,
          language: data.language,
          premiered: data.premiered,
          schedule: data.schedule,
          status: data.status,
          type: data.type,
          url: data.url,
        });
      } catch (err) {
        console.error("에러:", err);
        setError("영화 정보를 불러오지 못했습니다.");
      } finally {
        setLoading(false);
      }
    };

    loadMovie();
  }, [id]);

  return (
    <div className="flex flex-col items-center mt-10">
      {loading ? (
        <div className="mt-6 text-black text-[15px] animate-pulse">
          영화 정보를 조회중입니다.....
        </div>
      ) : error ? (
        <div className="mt-6 text-red text-[15px]">{error}</div>
      ) : (
        <MovieDetail movie={movie} />
      )}
    </div>
  );
};

export default Show;