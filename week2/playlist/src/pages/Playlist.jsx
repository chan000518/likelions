import { useState,useEffect } from 'react';
import albumData from '../data/album.json';
import { Album } from '../components/album';
import { Modal } from '../components/Modal';

export const Playlist = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null); // 어떤 앨범을 선택했는지
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달창이 열려있는지

  // 모달 창을 여는 함수
  const openModal = (album) => {
    setSelectedAlbum(album);
    setIsModalOpen(true);
  };

  // 모달 창을 닫는 함수
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAlbum(null);
  };

  // isModalOpen가 바뀔시 즉, 모달 변경 시 실행
  // 스크롤 안되게
  useEffect(() => { 
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'; // 모달이 열리면 스크롤을 막음
    } else {
      document.body.style.overflow = 'auto'; // 모달이 닫히면 스크롤을 다시 가능
    }

    return () => {
      document.body.style.overflow = 'auto'; // 언마운트 -> 스크롤 다시 가능, 이게 없으면 다른 페이지로 이동했을 때 스크롤이 안될수도
    };
  }, [isModalOpen]);


  return (
    <main className="p-10">
      <section className="flex flex-wrap gap-8 justify-center">
        {albumData.map((album, index) => ( // 키 값을 배열의 인덱스로 키: 컴포넌트가 중복될 때  구분을 위해 
          <Album key={index} album={album} onClick={() => openModal(album)} />
        ))}
      </section>

      {isModalOpen && ( // 모달
        <Modal album={selectedAlbum} onClose={closeModal} /> 
      )}
    </main>
  );
};