import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CardMovie from "../components/CardMovie";

export default function DetailsMovie() {
  //Recupero id dinamico
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      //Chiamata ajax con id dinamico
      .get(`http://localhost:3000/movies/${id}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  //movie inzialmente vuoto, attedi l'azione del "setMovie"
  if (!movie) return <p>Loading...</p>;

  //Movie riceve dati corretti: id assicura congruenza click => dati voluti
  return <CardMovie movie={movie} />;
}
