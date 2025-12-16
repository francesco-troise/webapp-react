import { NavLink } from "react-router-dom";

export default function HeaderAdmin() {
  return (
    <>
      <header className="bg-white py-4">
        <div className="container text-center">
          <h1 className="text-dark mb-4">
            Aggiungi, elimina o modifica un film nel tuo catalogo
          </h1>

          <nav>
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <NavLink className="nav-link text-dark" to="/catalogo">
                  Catalogo
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-dark" to="/form-film">
                  Form Film
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      ;
    </>
  );
}
