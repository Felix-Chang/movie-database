import { AiOutlineSearch } from "react-icons/ai";
import "./Searchbar.css"

export default function Searchbar({ value, onChange, onSearch }) {
    return (
        <form className="searchbar-container" onSubmit={onSearch}>
            <input
                type="text"
                value={value}
                onChange={(e) => {
                    onChange(e.target.value);
                }}
                placeholder="Search movie..."
                className="searchbar-input-field"
            />
            <button className="searchbar-button">
                <AiOutlineSearch />
            </button>
        </form>
    );
}
