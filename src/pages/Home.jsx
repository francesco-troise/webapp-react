import axios from "axios";
import { useEffect, useState } from "react";

//Import di useNavigate per gestire navigazione proggramatica
import { useNavigate } from "react-router-dom";

import CardMovie from "../components/CardMovie";

export default function Home() {
  //Stato per la dinamicità dei dati visualizzati nelle card
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  //handle: al click reindirizza alla card dettaglio, id dinamicizzato
  const handleClick = (movie) => {
    navigate(`/movie/${movie.id}`);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/movies/")
      .then((response) => {
        //ottenimento dati dei movies
        setMovies(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <div className="container mt-5">
        <div className="row g-4">
          {/*mapping dei dati per generazione card*/}
          {movies.map((movie) => {
            return (
              <CardMovie key={movie.id} movie={movie} onClick={handleClick} />
            );
          })}
        </div>
      </div>
    </>
  );
}
