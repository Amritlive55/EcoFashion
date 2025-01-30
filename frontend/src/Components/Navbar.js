import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faEarthAmericas,
  faBook,
  faShoePrints,
  faPhone,
  faSun, faMoon 
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

export default function Navbar({ title, toggleMode, mode }) {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        background: "linear-gradient(90deg, #024f4f, #056060)",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        color: "white",
        padding: "2px 0"
      }}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="/"
          style={{
            color: "white",
            fontSize: "1.8rem",
            fontWeight: "bold",
          }}
        >
          {title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link hover-effect" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle hover-effect"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/shop">
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/shop">
                    Women's Fashion
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/shop">
                    Men's Fashion
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/shop">
                    Home & Kitchen
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/shop">
                    Sports & Fitness
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link hover-effect" to="/leaderboard">
                Leaderboard
              </Link>
            </li>
           
            <li className="nav-item">
   <Link className="nav-link hover-effect" to="/contact">
    <FontAwesomeIcon icon={faPhone} style={{ marginRight: "8px" }} /> 
  </Link>
</li>

            {/*<li className="nav-item">
              <Link className="nav-link hover-effect" to="/contact">
                Contact
              </Link>
            </li>*/}

            {/*<li className="nav-item">
              <Link className="nav-link hover-effect" to="/registration">
                Sign-up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link hover-effect" to="/signin">
                Login
              </Link>
            </li>
            */}
            <li className="nav-item">
              <Link className="nav-link" to="/saveEarth">
                <button type="button" className="btn btn-custom">
                  Join Us
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/premium">
                <button type="button" className="btn btn-custom">
                  Try Premium
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link hover-effect" to="/ecoimpacttracker">
                <FontAwesomeIcon icon={faEarthAmericas} />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link hover-effect" to="/sustainabilityblogs">
                <FontAwesomeIcon icon={faBook} style={{ color: "#63E6BE" }} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link hover-effect"
                to="/carbonfootprintcalculator"
              >
                <FontAwesomeIcon
                  icon={faShoePrints}
                  style={{ color: "#63E6BE" }}
                />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <FontAwesomeIcon icon={faCartShopping} />
              </Link>
            </li>
          </ul>

          <div className="form-check form-switch">
            
            {/*<input
              className="form-check-input"
              onClick={toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />


            {/*<label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
              style={{ color: "white" }}
            >
              {mode === "dark" ? "Light Mode" : "Dark Mode"}
               {darkMode ? "🌞" : "🌜"}
            </label>
*/}
        <button 
          className="mb-4 flex items-center justify-center h-10 w-10 bg-transparent rounded-lg hover:opacity-80 text-xl"
          onClick={toggleMode}
        >
        {mode === "dark" ? <FontAwesomeIcon icon={faSun} />  :  <FontAwesomeIcon icon={faMoon} />}
       
        </button>

          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "EcoFashion",
};