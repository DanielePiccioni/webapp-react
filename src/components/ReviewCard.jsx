export default function ReviewCard({ review }) {
    return (
        <div className="card m-2 p-2">
            <h4>{review.name}</h4>
            <p>{review.text}</p>
            <small>Voto: {review.vote}</small>

            {review.image && (
                <img
                    src={`http://localhost:3000${review.image}`}
                    alt={review.name}
                    className="review-img mt-2"
                />
            )}
        </div>
    );
}
