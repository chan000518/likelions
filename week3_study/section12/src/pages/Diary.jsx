import { useParams } from "react-router-dom";

const Diary = () => {
    const params = useParams(); // url의 파라미터를 가져옴
    console.log(params); // {id: "1"} -> url에 /diary/1로 들어가면 params.id는 1
    return <div> {params.id}번 일기 입니다. </div>
}

export default Diary;