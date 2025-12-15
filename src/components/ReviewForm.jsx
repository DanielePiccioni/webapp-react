import { useState } from "react";
import axios from "axios";

export default function ReviewForm({ movieId, onReviewAdded }) {

    const [form, setForm] = useState({
        name: "",
        text: "",
        vote: 1,
        image: null,
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleFile = (e) => {
        setForm({
            ...form,
            image: e.target.files[0] || null
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("FORM INVIATO");

        const formData = new FormData();
        formData.append("name", form.name);
        formData.append("text", form.text);
        formData.append("vote", form.vote);
        if (form.image) {
            formData.append("image", form.image);
        }

        try {
            const res = await axios.post(
                `http://localhost:3000/movies/${movieId}/reviews`,
                formData,
                { headers: { "Content-Type": "multipart/form-data" } }
            );

            onReviewAdded(res.data.review);

            setForm({
                name: "",
                text: "",
                vote: 1,
                image: null
            });

        } catch (error) {
            console.error("Errore durante l'invio della recensione:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4 border p-3 rounded">
            <h4>Aggiungi una recensione</h4>

            <input
                type="text"
                name="name"
                placeholder="Il tuo nome"
                className="form-control mb-2"
                value={form.name}
                onChange={handleChange}
                required
            />

            <textarea
                name="text"
                placeholder="Scrivi la recensione..."
                className="form-control mb-2"
                rows="3"
                value={form.text}
                onChange={handleChange}
                required
            />

            <select
                name="vote"
                className="form-select mb-2"
                value={form.vote}
                onChange={handleChange}
            >
                <option value="1">1 ⭐</option>
                <option value="2">2 ⭐⭐</option>
                <option value="3">3 ⭐⭐⭐</option>
                <option value="4">4 ⭐⭐⭐⭐</option>
                <option value="5">5 ⭐⭐⭐⭐⭐</option>
            </select>

            <input
                type="file"
                name="image"
                className="form-control mb-3"
                onChange={handleFile}
            />

            <button className="btn btn-primary w-100">Invia recensione</button>
        </form>
    );
}
