import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 border-b-1 border-gray-600 left-0 right-0 h-20 bg-white text-black flex items-center justify-between px-30 z-50 text-2xl">
      <div className="space-x-10 flex items-center">
        <Link to="/" className="font-semibold text-4xl">
          Playlist 🎧
        </Link>
        <Link to="/top100">Top 100</Link>
        <Link to="/mypage">My Page</Link>
      </div>
      <Link to="/login">Login</Link>
    </nav>
  );
};
