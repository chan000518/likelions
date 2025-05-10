const MovieDetail = ({ movie }) => {
    if (!movie) return null;
  
    return (
      <div className="w-10/12 max-w-5xl mx-auto mt-15 border border-gray-400 rounded-[24px] shadow-lg p-6 flex gap-15">
        <img
        src={movie.image}
        alt={movie.name}
        className="w-[300px] h-[400px] object-cover rounded-[16px] shadow-md"
        />
        
        <div className="flex flex-col justify-start text-gray-800 w-full">
          <h1 className="text-2xl font-bold mb-4">{movie.name}</h1>
  
          <div className="space-y-2 text-sm text-gray-600">
            {movie.genres?.length > 0 && (
              <p>
                <span className="font-semibold">장르:</span> {movie.genres.join(', ')}
              </p>
            )}
            {movie.runtime && (
              <p>
                <span className="font-semibold">런타임:</span> {movie.runtime}분
              </p>
            )}
            {movie.rating && (
              <p>
                <span className="font-semibold">평점:</span> {movie.rating}
              </p>
            )}
            {movie.language && (
              <p>
                <span className="font-semibold">언어:</span> {movie.language}
              </p>
            )}
            {movie.premiered && (
              <p>
                <span className="font-semibold">방영일:</span> {movie.premiered}
              </p>
            )}
            {movie.schedule?.time && (
              <p>
                <span className="font-semibold">방영시간:</span> {movie.schedule.time}
              </p>
            )}
            {movie.status && (
              <p>
                <span className="font-semibold">상태:</span> {movie.status}
              </p>
            )}
            {movie.type && (
              <p>
                <span className="font-semibold">타입:</span> {movie.type}
              </p>
            )}
            {movie.url && (
              <p className="mt-2">
                <a
                  href={movie.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  TVMaze 상세 페이지로 이동
                </a>
              </p>
            )}
          </div>
  
          {movie.summary && (
            <div
              className="prose prose-sm mt-6 text-gray-500 max-w-full"
              dangerouslySetInnerHTML={{ __html: movie.summary }}
            />
          )}
        </div>
      </div>
    );
  };
  
  export default MovieDetail;