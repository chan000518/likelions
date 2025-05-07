import { useSearchParams } from "react-router-dom";

const Home = () => {
    const [params, setParams] = useSearchParams(); // url의 쿼리스트링을 가져옴
    console.log(params.get('value')); // ?id=1 -> params.get('id')는 1

    return <div> Home </div>
}

export default Home;