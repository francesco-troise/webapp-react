import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function DetailsMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/movies/${id}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="container mt-5">
      <h1>{movie.title}</h1>
      <p>{movie.abstract}</p>
      <div>
        <h3>Recensioni:</h3>
        <ul>
          {movie.reviews.map((review) => (
            <li key={review.id}>{review.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
