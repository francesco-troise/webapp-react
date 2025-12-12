export default function CardMovie({ movie, onClick }) {
  return (
    <div className="col-4" key={movie.id}>
      <div className="card h-100">
        <div className="position-relative">
          <img
            src={`http://localhost:3000/movies_cover/${movie.image}`}
            className="card-img-top"
            alt={`${movie.title} poster`}
            onClick={() => onClick(movie)}
          />

          <h5 className="position-absolute top-0 start-0 m-2 text-white bg-dark bg-opacity-75 p-1 rounded">
            {movie.title}
          </h5>
        </div>

        <div className="card-footer bg-light">
          {/* Riga con Regista e Autore */}
          <div className="d-flex justify-content-between mb-2">
            <span className="fw-bold">Regista</span>
            <span className="text-muted">{movie.director}</span>
          </div>

          <p className="card-text">{movie.abstract}</p>
        </div>
      </div>
    </div>
  );
}
