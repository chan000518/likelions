// src/components/AlbumCard.jsx
import React from "react";

export const Album = ({ album }) => {
  const { albumImage, releaseDate, artist, title, lyricist, composer } = album;

  return (
    <div className="bg-gradient-to-r from-purple-400 to-blue-500 p-6 rounded-lg shadow w-72">
      <img
        src={albumImage}
        alt={`${title} 앨범 커버`}
        className="w-full h-60 object-cover rounded mb-4"
      />
      <h2 className="text-2xl font-semibold text-black">{title}</h2>
      <hr className="my-4 border-gray-600" />
      <p className="text-gray-300">가수: {artist}</p>
      <p className="text-gray-300">작사가: {lyricist}</p>
      <p className="text-gray-300">작곡가: {composer}</p>
      <p className="text-gray-800 text-sm mt-2">발매일: {releaseDate}</p>
    </div>
  );
};