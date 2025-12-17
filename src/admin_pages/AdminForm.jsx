import axios from "axios";
import { useState } from "react";

export default function AdminForm() {
  const [formData, setFormData] = useState({
    title: "",
    director: "",
    genre: "",
    release_year: "",
    abstract: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      //Se è proprio un typo: file allora
      setFormData({
        ...formData,
        image: files[0],
      });
    } else {
      // se invece è un input di testo/numero/textarea
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  //prevenzione dell'evento di refresh
  const handleSubmit = (e) => {
    e.preventDefault();
    //Utilizzo di un'istanza di "FromData", un fromato in cui è possibile per "multer(lato backend)" accettare file
    const data = new FormData();
    data.append("title", formData.title);
    data.append("director", formData.director);
    data.append("genre", formData.genre);
    data.append("release_year", formData.release_year);
    data.append("abstract", formData.abstract);
    data.append("image", formData.image);

    axios
      //axios in "post" accetta l'endpoin e i data da inviare
      .post("http://localhost:3000/movies", data)

      .then(() => {
        //Reset dello stato contenenti i dati del form(dopo l'invio di questi)
        setFormData({
          title: "",
          director: "",
          genre: "",
          release_year: "",
          abstract: "",
          image: null,
        });
        //Reset del FROM
        e.target.reset();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div className="container mt-5">
        <h2 className="mb-4">Aggiungi un nuovo film al tuo catalogo</h2>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {/*TITLE*/}
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Titolo
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              onChange={handleChange}
              required
            />
          </div>

          {/*DIRECTOr*/}
          <div className="mb-3">
            <label htmlFor="director" className="form-label">
              Regista
            </label>
            <input
              type="text"
              className="form-control"
              id="director"
              name="director"
              onChange={handleChange}
              required
            />
          </div>

          {/*GENRE*/}
          <div className="mb-3">
            <label htmlFor="genre" className="form-label">
              Genere
            </label>
            <input
              type="text"
              className="form-control"
              id="genre"
              name="genre"
              onChange={handleChange}
              required
            />
          </div>

          {/*RELEASE_YEAR*/}
          <div className="mb-3">
            <label htmlFor="release_year" className="form-label">
              Anno di uscita
            </label>
            <input
              type="number"
              className="form-control"
              id="release_year"
              name="release_year"
              onChange={handleChange}
              required
            />
          </div>

          {/*ABSTRACT*/}
          <div className="mb-3">
            <label htmlFor="abstract" className="form-label">
              Descrizione
            </label>
            <textarea
              className="form-control"
              id="abstract"
              name="abstract"
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/*IMAGE*/}
          <div className="mb-4">
            <label htmlFor="image" className="form-label">
              Immagine del film
            </label>
            <input
              className="form-control"
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              required
            />
          </div>

          {/*SUBMIT*/}
          <button type="submit" className="btn btn-primary">
            Salva film
          </button>
        </form>
      </div>
    </>
  );
}
