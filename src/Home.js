import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Home.css";
import Searchbar from "./Searchbar.js";

function Home() {
    const [query, setQuery] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const handleSearchbarUpdate = (input) => {
        setErrorMessage("");
        setQuery(input);
        // console.log(searchbarText);
    };

    const handleSearchEnter = (e) => {
        e.preventDefault();
        const searchName = query.trim();

        if (!searchName) {
            setErrorMessage("Invalid search: Please enter a movie name");
        } else {
            navigate("/results", { state: { query } });
        }
    };

    return (
        <div className="title">
            <div>
                <h1 className="app-title">Movie database</h1>
                {errorMessage && <h2 className="error">{errorMessage}</h2>}
                <Searchbar
                    value={query}
                    onChange={(input) => handleSearchbarUpdate(input)}
                    onSearch={handleSearchEnter}
                />
            </div>
        </div>
    );
}

export default Home;
