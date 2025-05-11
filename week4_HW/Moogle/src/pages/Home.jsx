import { useNavigate } from "react-router-dom";
import SearchBar from "../component/SearchBar";
import { useState, useEffect } from "react";
import MovieCardList from "../component/MovieCardList";
import BigLogo from "../component/BigLogo";
import SmallLogo from "../component/SmallLogo";

const Home = () => {
    const [searchWord, setSearchWord] = useState("");
    const [searchHistory, setSearchHistory] = useState([]);

    const navigate = useNavigate();

    const handleLogo = () => {
        navigate(0); // 홈 페이지 재렌더링
    };

    // 검색 기록 (localStorage) 불러오기
    useEffect(() => {
        const savedWords = JSON.parse(localStorage.getItem('recentWords')  || '[]');
        setSearchHistory(savedWords);
    }, []);
    
    const handleSearch = (word) => {
        setSearchWord(word);

        const savedWords = JSON.parse(localStorage.getItem('recentWords') || '[]');

        const updatedWords = [word, ...savedWords.filter((item) => item !== word)].slice(0, 5);
        
        localStorage.setItem('recentWords', JSON.stringify(updatedWords));
    
        setSearchHistory(updatedWords);
    };

    if (searchWord === "") { // 검색어가 없을 때
        return (
            <div className="flex items-center flex-col h-screen mt-32">
                {/* 로고 */}
                <BigLogo/>
                {/* 검색 바 */}
                <SearchBar searchWord={searchWord} onSearch={ handleSearch } searchHistory={searchHistory} />
            </div>
        )}
    else {  // 검색어가 있을 때
        return ( 
            <div className="flex-col items-start h-screen">
                <div className="flex items-center justify-start gap-5 w-screen m-5 ml-7">
                    {/* 로고 */}
                    <SmallLogo handleLogo={ handleLogo } />
                    {/* 검색 바 */}
                    <SearchBar searchWord={searchWord} onSearch={ handleSearch } searchHistory={searchHistory} />
                    
                </div>

                {/* 검색 결과 리스트 */}
                <MovieCardList searchWord={searchWord} />
            </div>
        )
    }
}

export default Home;