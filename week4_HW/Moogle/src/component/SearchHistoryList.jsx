import { FiSearch } from 'react-icons/fi';

const SearchHistoryList = ({ searchHistory, onClick }) => {
    if (!searchHistory || searchHistory.length === 0) return null;

    return(
        <ul className="absolute top-full left-0 w-full bg-white rounded-[24px] mt-1 max-h-100 overflow-y-auto z-10"
            style={{ boxShadow: "0 1px 6px 0 rgba(0,0,0,0.2)" }}>
                {searchHistory.map((item, idx) => (
                <li
                    key={idx}
                    className="mx-4 my-2 flex items-center gap-2 text-[16px] text-gray-800 placeholder:text-gray-400"
                    onClick={() => {
                        onClick(item)
                    }}
                >
                    <FiSearch className="text-slate-900 text-2xl font-semibold pl-2 cursor-pointer " />
                    {item}
                </li>
            ))}
        </ul>
    )
}
export default SearchHistoryList;