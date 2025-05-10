import { useState, useRef,useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import SearchHistoryList from './SearchHistoryList'; // 최근 검색어 컴포넌트

const SearchBar = ({ searchWord, onSearch, searchHistory}) => {
  const [input, setInput] = useState(searchWord || ''); // 검색어 상태
  const [isComposing, setIsComposing] = useState(false); // 한글 조합 중 여부
  const [showHistory, setShowHistory] = useState(false);
  const inputRef = useRef(null);

  const handleSearch = () => {
    if (input.trim()) {
      onSearch(input.trim());
    }
  };

  const handleKeyDown = (e) => {
    if (!isComposing && e.key === 'Enter') handleSearch();
  };

  const handleOutsideClick = (e) => {
    if (!inputRef.current?.contains(e.target)) {
      setShowHistory(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleHistoryClick = (item) => {
    setInput(item);
    onSearch(item);
    setShowHistory(false);
  };

  return (
    <div className="relative w-[746px]" ref={inputRef}>
      <div className="flex items-center gap-2.5 px-4 py-2 w-[746px] h-[48px] bg-white rounded-[24px] border-none"
      style={{ boxShadow: "0 1px 6px 0 rgba(0,0,0,0.2)" }}>
        <FiSearch className="text-slate-900 text-2xl font-semibold pl-2 cursor-pointer " />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShowHistory(true)}
          onKeyDown={handleKeyDown}
          onCompositionStart={() => setIsComposing(true)}
          onCompositionEnd={() => setIsComposing(false)}
          placeholder="영화 또는 프로그램명을 입력해주세요"
          className="flex-1 bg-transparent outline-none text-gray-800 placeholder:text-gray-400 text-[16px]"
        />
        <div className=" h-[28.5938px] w-0 border-l border-l-[1px] border-l-[#dadce0]"></div>

        <FiSearch
          onClick={handleSearch}
          className="text-slate-900 text-4xl font-semibold px-2 cursor-pointer" />
      </div>

      {showHistory && (
        <SearchHistoryList searchHistory={searchHistory} onClick={handleHistoryClick} />
      )}

    </div>
    
  );

};

export default SearchBar;
