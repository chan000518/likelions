import { useRef } from 'react';

export const Modal = ({ album, onClose }) => {
    const { albumImage, title, } = album; // 앨범에서 필요한 정보만 추출
    const overlayRef = useRef(); // useRef로 오버레이의 ref를 생성

    // 모달이 아닌 부분을 클릭 즉, 전체 화면을 덮는 오버레이만을 클릭했을 때 닫히도록
    const onClickHandler = (e) => {
        // e.target이 overlayRef.current와 같을 때만 모달을 닫음
        if (e.target === overlayRef.current){
            onClose();
        }
    }

    return (
    // 모든 화면을 덮는 배경
    // onClick={onClose}로 배경 클릭 시 모달 닫힘 -> 네부 클릭 시도 닫힘
    // fixed, inset-0으로 모든 화면을 덮음
    // bg-black/80으로 배경을 투명한 검은색으로 설정
    // items-center, justify-center로 가운데 정렬  
    // z-50으로 다른 요소들보다 위에
    <div ref={overlayRef} onClick={onClickHandler} className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"> 
        <div className="relative bg-white rounded-lg p-6 shadow-lg">
            {/* 모달창 닫는 함수 */}
            <button
            onClick={onClose}
            // absolute로 오른쪽 위로
            className="absolute text-black top-1 right-2 text-xl font-bold uppercase"
            >
            X
            </button>
            {/* max-h-100으로 최대 높이 안에서 최대한 원본 사진으로 */}
            <img src={albumImage} alt={title} className="max-h-100 object-cover rounded" />
            <h2 className="mt-6 text-center  text-black text-2xl font-semibold">{title}</h2>
        </div>
        </div>
    );
};