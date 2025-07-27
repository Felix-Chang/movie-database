import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./Home.css";
import Searchbar from "./Searchbar.js";

function Home() {
    const [searchbarText, setSearchbarText] = useState("");

    const handleSearchbarUpdate = (input) => {
        setSearchbarText(input);
        console.log(searchbarText);
    };

    const handleSearch = (searchbarText) => {

    };

    return (
        <div className="title">
            <div>
                <h1 className="app-title">Movie database</h1>
                <Searchbar
                    value={searchbarText}
                    onChange={(input) => handleSearchbarUpdate(input)}
                    onSubmit={(searchbarText)=>{}}
                />
            </div>
        </div>
    );
}

export default Home;
