export default function ReviewCard({ review }) {
    return (
        <div className="card m-2 p-2">
            <h4>{review.name}</h4>
            <p>{review.text}</p>
            <small>Voto: {review.vote}</small>
        </div>
    );
}
