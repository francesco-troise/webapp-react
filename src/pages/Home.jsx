import axios from "axios";
import { useEffect, useState } from "react";

import CardMovie from "../components/CardMovie";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/movies/").then((response) => {
      setMovies(response.data);
    });
  }, []);

  return (
    <>
      <div className="container mt-5">
        <div className="row g-4">
          {movies.map((movie) => {
            return <CardMovie key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </>
  );
}
