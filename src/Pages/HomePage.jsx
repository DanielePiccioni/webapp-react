import { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/movies")
            .then(res => {
                console.log("Film ottenuti dal server:", res.data);
                setMovies(res.data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <h1>Lista Meowilm</h1>

            {movies.map(movie => (
                <div key={movie.id}>
                    <h3>{movie.title}</h3>
                </div>
            ))}
        </>
    );
}
