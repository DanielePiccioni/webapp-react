import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReviewList from "../components/ReviewList";
import ReviewForm from "../components/ReviewForm";


export default function MovieDetailPage() {

    const { id } = useParams();     // Ottengo id dalla URL
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/movies/${id}`)
            .then(res => {
                console.log("Film dettagli:", res.data);
                setMovie(res.data);
            })
            .catch(err => console.error(err));
    }, [id]);

    if (!movie) {
        return <p>Caricamento...</p>;
    }

    return (
        <>
            <div>
                <h1>{movie.movie.title}</h1>
                <p>{movie.movie.abstract}</p>
                <p>Genere: {movie.movie.genre}</p>
                <p>Anno: {movie.movie.release_year}</p>
                <p>Regista: {movie.movie.director}</p>
                <ReviewList reviews={movie.reviews} />
                <ReviewForm
                    movieId={id}
                    onReviewAdded={(newReview) => {
                        setMovie((prevMovie) => ({
                            ...prevMovie,
                            reviews: [...(prevMovie.reviews || []), newReview]
                        }));
                    }}
                />


            </div>
        </>
    );
}
