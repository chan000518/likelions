import "./TodoItem.css"
import {memo} from "react"

const TodoItem = ({id, isDone, content, date, onUpdate ,onDelete}) => {

    const onChangeCheckBox = () => {
        onUpdate(id);
    }

    const onClickDeleteButton = () => {
        onDelete(id);
    }

    return (
    <div className="TodoItem">
        
        <input onChange = {onChangeCheckBox} readOnly checked={isDone} type="checkbox" />
        <div className="content">{content}</div>
        <div className="date">{new Date(date).toLocaleDateString()}</div>
        <button onClick={onClickDeleteButton}>삭제</button>
    </div>
    )
}

// 메모에 등록해도 모든 컴포넌트 리랜더링
// 함수가 리 랜더링 시마다 새롭게 생성되어 전달
// props의 값이 아닌 함수(의 참조값)가 바뀌어 재 리랜더링
export default memo(TodoItem, (prevProps, nextProps) => {
    // 반환값에 따라,Props가 바꿨느지 안바꿨는지 판단
    // true면 리랜더링 안함, false면 리랜더링 함
    if(prevProps.id !== nextProps.id) {
        return false;
    }
    if(prevProps.isDone !== nextProps.isDone) {
        return false;
    }
    if(prevProps.content !== nextProps.content) {
        return false;
    }
    if(prevProps.date !== nextProps.date) {
        return false;
    }
    // onUpdate, onDelete는 함수이기 때문에 참조값이 바뀌어도 true로 하게
    return true;
});