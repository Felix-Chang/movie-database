import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Results.css";
import useStore from "./store";

export default function Results() {
    const [movieList, setMovieList] = useState([]);

    const apiKey = "39909455bd29b0abdae61f42f38b4206";
    const query = useStore((state) => state.query);
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
        query
    )}`;

    const { setSelectedMovie } = useStore();

    const getMovies = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.results);
            setMovieList(data.results);
            localStorage.setItem("query", query);
        } catch (err) {
            console.error("Fetch error:", err);
        }
    };

    useEffect(() => {
        getMovies();
    }, [query]);

    return (
        <div className="background">
            <h1 className="results-title">Search Results</h1>
            <Link to="/">
                <h4 className="back-button">Back</h4>
            </Link>
            {movieList.map((movie) => (
                <div
                    key={
                        movie.original_title + movie.release_date.split("-")[0]
                    }
                    className="listed-movie-container"
                >
                    <img
                        src={
                            movie.poster_path
                                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                : "https://image.tmdb.org/t/p/w300_and_h450_bestv2/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
                        }
                        alt={`${movie.title} ${
                            movie.release_date.split("-")[0]
                        }`}
                        className="movie-poster"
                    />
                    <Link
                        to={`/results/movie/${encodeURIComponent(
                            movie.original_title +
                                movie.release_date.split("-")[0]
                        )}`}
                        onClick={() => setSelectedMovie(movie)}
                    >
                        <h3 className="movie-name">
                            {`${movie.original_title} (${
                                movie.release_date.split("-")[0]
                            })`}
                        </h3>
                    </Link>
                    <div className="movie-description">{movie.overview}</div>
                </div>
            ))}
        </div>
    );
}
