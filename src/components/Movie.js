import { useEffect, useState } from "react";
import useStore from "./store";
import "./Movie.css";

export default function Movie() {
    const { selectedMovie } = useStore();

    return (
        <div>
            <h1 className="movie-title">
                {`${selectedMovie.original_title} (${
                    selectedMovie.release_date.split("-")[0]
                })`}
            </h1>
            <img
                src={
                    selectedMovie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`
                        : "https://image.tmdb.org/t/p/w300_and_h450_bestv2/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
                }
            />
        </div>
    );
}
