import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
            <section className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Movies Remeows</h1>
                    <p className="col-md-8 fs-4">WHO IS THAT POKEMON??</p>
                    <button className="btn btn-primary btn-lg" type="button">Pokemon</button>
                </div>
            </section>
            <section className="my-4 py-3">
                <div className="container">
                    <div className="row">
                        {movies.map((movie) => (
                            <div className="col-md-4 mb-4" key={movie.id}>
                                <div className="card h-100 shadow-sm">
                                    <img src={movie.image} className="card-img-uniform" alt={movie.title} />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{movie.title}</h5>
                                        <p className="card-text flex-grow-1">
                                            {movie.abstract?.slice(0, 110)}...
                                        </p>
                                        <Link to={`/movie/${movie.id}`} className="btn btn-dark mt-auto">
                                            Clicca per vedere il pokemon o FILM
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
