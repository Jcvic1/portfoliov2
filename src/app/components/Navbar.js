import React, { useState } from "react";
import { Link } from "react-scroll";
import useTheme from "../hooks/useTheme";
import animation from "./animation";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [icon, setIcon] = useState(theme === "dark" ? "bi-sun" : "bi-moon");
  const handleSetTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setIcon(icon === "bi-sun" ? "bi-moon" : "bi-sun");
  };
  return (
    <header className="sticky-top bg-secondary">
      <div className="container-xl">
        <div className="d-flex justify-content-between pt-3">
          <div className="fs-3 animated">Obobo Victor</div>
          <div className="d-flex ">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "#adb5bd" }}
              >
                <span>en</span>
                <i id="language" className="bi bi-globe"></i>
              </button>

              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item" href="../index.html">
                    en
                  </button>
                </li>
                {/* <li>
                  <button className="dropdown-item" href="../ru/index.html">
                    ru
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" href="../es/index.html">
                    es
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" href="../fr/index.html">
                    fr
                  </button>
                </li> */}
              </ul>
            </div>

            <button
              className="btn ms-1"
              onClick={handleSetTheme}
              style={{ color: "#adb5bd" }}
            >
              <i id="color-mode-icon" className={`bi ${icon}`}></i>
            </button>
          </div>
        </div>
        <nav className="navbar">
          <div className="d-flex ms-auto">
            <Link
              to="home"
              className="nav-link m-2 btn p-1 rounded-pill"
              smooth={true}
              duration={100}
              offset={-120}
            >
              Home
            </Link>
            <Link
              to="expertise"
              className="nav-link m-2 btn p-1 rounded-pill"
              smooth={true}
              duration={100}
              offset={-120}
            >
              Expertise
            </Link>
            <Link
              to="projects"
              className="nav-link m-2 btn p-1 rounded-pill"
              smooth={true}
              duration={100}
              offset={-120}
            >
              Projects
            </Link>
            <Link
              to="contacts"
              className="nav-link m-2 btn p-1 rounded-pill"
              smooth={true}
              duration={100}
              offset={-120}
            >
              Contacts
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default animation(Navbar, ["bounce-left"], [".animated"]);
