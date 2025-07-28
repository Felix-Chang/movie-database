import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Results.css";

export default function Results() {
    const [movieList, setMovieList] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    const apiKey = "39909455bd29b0abdae61f42f38b4206";
    const query = location.state?.query || localStorage.getItem("query");
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
        query
    )}`;

    const getMovies = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.results);
            setMovieList(data.results);
            localStorage.setItem("movieList", JSON.stringify(data.results));
            localStorage.setItem("query", query);
        } catch (err) {
            console.error("Fetch error:", err);
        }
    };

    useEffect(() => {
        const savedQuery = localStorage.getItem("query");
        const savedList = JSON.parse(localStorage.getItem("movieList"));

        if (savedList && savedQuery === query) {
            setMovieList(savedList);
        } else {
            getMovies();
        }
    }, [query]);

    return (
        <div>
            <h1 className="results-title">Search Results</h1>
            <Link to="/">
                <h4>Back</h4>
            </Link>
            <ul>
                {movieList.map((movie) => (
                    <li
                        key={
                            movie.original_title +
                            movie.release_date.split("-")[0]
                        }
                        className="listed-movie"
                    >
                        <Link
                            to={`/results/movie/${encodeURIComponent(
                                movie.original_title +
                                    movie.release_date.split("-")[0]
                            )}`}
                        >
                            <h3>
                                {`${movie.original_title} (${
                                    movie.release_date.split("-")[0]
                                })`}
                            </h3>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
