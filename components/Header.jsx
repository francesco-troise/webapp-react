import Logo from "../src/assets/loghi/Logo-webapp.png";
import Logo_name from "../src/assets/loghi/logo_name.png";

import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="bg-dark py-2">
        {/* Top header */}
        <div className="d-flex justify-content-between align-items-center px-3">
          <img
            src={Logo}
            alt="Logo Word-films"
            className="img-fluid"
            style={{
              height: "40px",
              opacity: 0.5,
              backgroundColor: "transparent",
            }}
          />
          <img
            src={Logo_name}
            alt="Logo_name Word-films"
            className="img-fluid"
            style={{ height: "40px" }}
          />
        </div>

        {/* Bottom header */}
        <div className="bot-header mt-2 px-3">
          <ul className="list-unstyled d-flex mb-0">
            <li className="me-3">
              <NavLink to="/" className="text-light text-decoration-none">
                Home
              </NavLink>
            </li>
            <li className="me-3">
              <NavLink
                to="/about-us"
                className="text-light text-decoration-none"
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className="text-light text-decoration-none"
              >
                Contact us
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
