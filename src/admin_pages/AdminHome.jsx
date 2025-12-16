import axios from "axios";
import { useState, useEffect } from "react";
import TableMoviesAdmin from "../admin_components/TableMoviesAdmin";

export default function AdminHome() {
  const [movies_list, setMovieList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/movies/")
      .then((response) => {
        //ottenimento dati dei movies
        setMovieList(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <div className="container mt-5">
        <h2 className="mb-4">Gestione Film</h2>

        <TableMoviesAdmin movies={movies_list} />
      </div>
    </>
  );
}
