import { Link } from 'react-router-dom';

const MovieCard = ({ id, name, image, genres }) => {
  return (
    <Link
      to={`/show/${id}`}
      className="flex flex-col gap-1.5 border-2 border-gray-200 rounded-[24px] p-4 hover:shadow-md transition"
    >
      <img
        src={image}
        alt={name}
        className="max-h-full max-w-full object-cover rounded-[24px]"
      />
      <div>
        <h2 className="text-xl font-bold mt-2">{name}</h2>
        <p className="text-gray-600">Genres: {genres.join(', ')}</p>
      </div>
    </Link>
  );
};

export default MovieCard;