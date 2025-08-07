import { BiArrowBack } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Results.css";
import RenderPageButtons from "./RenderPageButtons";
import useStore from "./store";
import noPoster from "../assets/no-poster.png";

export default function Results() {
    const [movieList, setMovieList] = useState([]);

    const apiKey = "39909455bd29b0abdae61f42f38b4206";
    const query = useStore((state) => state.query);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const url = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${encodeURIComponent(
        query
    )}&page=${currentPage}`;

    const { setSelectedMovie } = useStore();

    const getMovies = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setMovieList(data.results);
            setTotalPages(data.total_pages);
        } catch (err) {
            console.error("Fetch error:", err);
        }
    };

    useEffect(() => {
        getMovies();
    }, [query, currentPage]);

    return (
        <div className="results-page">
            <h1 className="results-title">
                Search results for{" "}
                <span className="query-display">"{query}"</span>
            </h1>
            <Link to="/" className="back-button">
                <BiArrowBack className="arrow-back" />
                <h4>Back</h4>
            </Link>
            <div className="listed-movie-container-grid">
                {movieList
                    .filter(
                        (movie) =>
                            movie.media_type === "movie" ||
                            movie.media_type === "tv"
                    )
                    .map((movie) => {
                        const title = movie.title || movie.name;
                        const year =
                            movie.release_date?.split("-")[0] ||
                            movie.first_air_date?.split("-")[0] ||
                            "N/A";

                        return (
                            <Link
                                to={`/results/movie/${encodeURIComponent(
                                    title + year
                                )}`}
                                onClick={() => setSelectedMovie(movie)}
                                className="listed-movie-card"
                            >
                                <div className="gradient-overlay" />
                                <img
                                    src={
                                        movie.poster_path
                                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                            : noPoster
                                    }
                                    alt={title}
                                    className="movie-poster"
                                />
                                <div className="movie-title">
                                    {title} ({year})
                                </div>
                            </Link>
                        );
                    })}
            </div>
            <RenderPageButtons
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}
