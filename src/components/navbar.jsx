import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "./logo";
import { useAuth } from "../context/auth.context";
import { useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

function NavBar({ darkMode, setDarkMode }) {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  return (
    <nav
      className={`navbar navbar-expand-md shadow-sm ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
      aria-label="Main navigation"
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <Logo />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample04">
          <div className="d-md-flex justify-content-between align-items-center w-100">
            <ul className="navbar-nav mb-2 mb-md-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  ABOUT
                </NavLink>
              </li>

              {user && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/favorites">
                    FAV CARDS
                  </NavLink>
                </li>
              )}

              {(user?.biz || user?.role === "admin") && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/my-cards">
                    MY CARDS
                  </NavLink>
                </li>
              )}

              {user?.role === "admin" && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/sandbox">
                    SANDBOX
                  </NavLink>
                </li>
              )}
            </ul>

            <ul className="navbar-nav mb-2 mb-md-0">
              <li className="nav-item">
                <form
                  className="d-flex align-items-center"
                  onSubmit={(e) => {
                    e.preventDefault();
                    navigate(`/search?query=${searchTerm}`);
                  }}
                >
                  <div className="input-group">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search"
                      aria-label="Search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <span className="input-group-text bg-white border-start-0">
                      <i className="bi bi-search"></i>
                    </span>
                  </div>
                </form>
              </li>

              <li className="nav-item">
                <button
                  className="btn btn-link text-decoration-none ms-2"
                  onClick={() => setDarkMode(!darkMode)}
                >
                  {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
                </button>
              </li>

              {user ? (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/sign-out">
                    SIGNOUT
                  </NavLink>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/sign-up">
                      SIGNUP
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/sign-in">
                      LOGIN
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
