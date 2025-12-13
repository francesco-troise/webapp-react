export default function CardDetailsMovie({ movie }) {
  return (
    <div
      className="p-4"
      style={{ backgroundColor: "#000", minHeight: "100vh" }}
    >
      <div className="d-flex align-items-start gap-4">
        {/*CARD IMMAGINE*/}
        <div style={{ width: "290px" }}>
          <div className="card">
            <div className="position-relative">
              <img
                src={`http://localhost:3000/movies_cover/${movie.image}`}
                className="card-img-top"
                alt={`${movie.title} poster`}
              />

              {/* Badge titolo */}
              <span
                className="position-absolute top-0 start-0 m-2 badge bg-dark"
                style={{ fontSize: "0.75rem" }}
              >
                {movie.title}
              </span>
            </div>
          </div>

          {/*BOX INFORMAZIONI FILM*/}
          <div
            className="p-3"
            style={{
              backgroundColor: "#222",
              borderRadius: "6px",
              marginTop: "30px",
              color: "#f5f5f5",
            }}
          >
            <div>
              <strong>Regista:</strong> {movie.director}
            </div>
            <div>
              <strong>Genere:</strong> {movie.genre}
            </div>
            <div>
              <strong>Anno:</strong> {movie.release_year}
            </div>
          </div>
        </div>

        {/*SEZIONE RECENSIONI*/}
        <div className="text-white">
          <h5 className="fw-bold mb-2">Recensioni</h5>

          <div className="dropdown mb-3">
            <button
              className="btn btn-outline-light dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              Mostra recensioni
            </button>

            <ul className="dropdown-menu p-2" style={{ minWidth: "400px" }}>
              {movie.reviews.map((review) => {
                return (
                  <li key={review.id} className="mb-2">
                    <strong>{review.name}</strong>{" "}
                    <span className="text-muted">({review.vote}/5)</span>
                    <p className="mb-1">{review.text}</p>
                    <hr className="my-1" />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
