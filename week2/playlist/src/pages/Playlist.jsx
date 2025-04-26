import albumData from '../data/album.json';
import { Album } from '../components/album';

export const Playlist = () => {
  return (
    <main className="p-10">
      <section className="flex flex-wrap gap-8 justify-center">
        {albumData.map((album, index) => ( // 키 값을 배열의 인덱스로 키: 컴포넌트가 중복될 때 
          <Album key={index} album={album} />
        ))}
      </section>
    </main>
  );
};