import Logo_name from "../src/assets/loghi/logo_name.png";

import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="d-flex justify-content-between align-items-center bg-dark text-light py-3 px-4">
        {/* Left footer */}
        <div className="left-footer">
          <img
            src={Logo_name}
            alt="Logo_name of Word-films"
            className="img-fluid"
            style={{ height: "40px" }}
          />
        </div>

        {/* Right footer */}
        <div className="right-footer">
          <ul className="list-unstyled text-end mb-0">
            <li className="mb-2">
              <NavLink to="/" className="text-light text-decoration-none">
                Home
              </NavLink>
            </li>
            <li className="mb-2">
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
      </footer>
    </>
  );
}
