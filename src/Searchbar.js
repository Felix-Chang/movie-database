import { AiOutlineSearch } from "react-icons/ai";

export default function Searchbar({ value, onChange, onSubmit }) {
    return (
        <form className="searchbar-container">
            <input
                type="text"
                value={value}
                onChange={(e) => {
                    onChange(e.target.value);
                }}
                placeholder="Search movie..."
                className="searchbar-input-field"
            />
            <button>
                <AiOutlineSearch />
            </button>
        </form>
    );
}
