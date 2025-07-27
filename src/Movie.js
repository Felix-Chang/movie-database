import { useEffect, useState } from "react";

export default function Movie() {
    const [movies, setMovies] = useState([]);

    const getMovie = () => {
        fetch(
            "https://api.themoviedb.org/3/search/movie?api_key=39909455bd29b0abdae61f42f38b4206"
        )
            .then((res) => res.json())
            .then((json) => console.log(json));
    };

    useEffect(() => {
        getMovie();
    });

    return <div>Movie</div>;
}
