import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Home.css";
import Searchbar from "./components/Searchbar.js";
import useStore from "./components/store.js";

function Home() {
    const setGlobalQuery = useStore((state) => state.setQuery);
    const [inputValue, setInputValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const handleSearchbarUpdate = (input) => {
        setErrorMessage("");
        setInputValue(input);
        // console.log(searchbarText);
    };

    const handleSearchEnter = (e) => {
        e.preventDefault();
        const searchName = inputValue.trim();

        if (!searchName) {
            setErrorMessage("Invalid search: Please enter a movie name");
        } else {
            setGlobalQuery(inputValue);
            navigate("/results");
        }
    };

    return (
        <div className="title">
            <div>
                <h1 className="app-title">Movie database</h1>
                {errorMessage && <h2 className="error">{errorMessage}</h2>}
                <Searchbar
                    value={inputValue}
                    onChange={(input) => handleSearchbarUpdate(input)}
                    onSearch={handleSearchEnter}
                />
            </div>
        </div>
    );
}

export default Home;
