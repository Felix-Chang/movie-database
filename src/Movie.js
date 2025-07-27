import { useEffect, useState } from "react";


export default function Movie() {
    const [movies, setMovies] = useState([]);
    const apiKey = "39909455bd29b0abdae61f42f38b4206";
    const query = 2
    const url =
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;

    const getMovie = () => {
        fetch(url)
            .then((res) => res.json())
            .then((json) => console.log(json));
    };

    useEffect(() => {
        getMovie();
    });

    return <div>Movie</div>;
}
