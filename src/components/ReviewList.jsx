import ReviewCard from "./ReviewCard";

export default function ReviewList({ reviews }) {
    return (
        <div>
            <h3>Recensioni</h3>

            {reviews.length === 0 && <p>Nessuna recensione disponibile.</p>}

            {reviews.map(review => (
                <ReviewCard key={review.id} review={review} />
            ))}
        </div>
    );
}
