export default function TableMoviesAdmin({ movies }) {
  return (
    <>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Director</th>
            <th>Genre</th>
            <th>Release Year</th>
            <th>Abstract</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.director}</td>
              <td>{movie.genre}</td>
              <td>{movie.release_year}</td>
              <td>{movie.abstract}</td>
              <td>
                <button className="btn btn-sm btn-primary me-2">
                  Modifica
                </button>
                <button className="btn btn-sm btn-danger">Elimina</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
