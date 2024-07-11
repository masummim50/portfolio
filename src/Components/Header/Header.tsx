import {
  faBookOpen,
  faEnvelope,
  faFileAlt,
  faHome,
  faProjectDiagram,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Header = () => {
  // const toggleShow = () => {
  //   if (document != undefined) {
  //     document.getElementById("expand").setAttribute("aria-expanded", false);
  //     document.getElementById("navbarNav").classList.toggle("show");
  //   }
  // };
  return (
    <div>
      <header className="sticky-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <a className="navbar-brand w-25" href="#">
                <img className="w-75" src="icons/logo.png" alt="" />
              </a>
              <button
                id="expand"
                className="navbar-toggler bg-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon bg-white"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNav"
              >
                <ul  className="navbar-nav my-nav-style">
                  <li className="nav-item ms-1">
                    <Link href="/home" className="nav-link text-white">
                      <span>
                        <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                      </span>{" "}
                      Home
                    </Link>
                  </li>
                  <li className="nav-item ms-1">
                    <Link href="/home" className="nav-link text-white">
                      <span>
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                      </span>{" "}
                      About Me
                    </Link>
                  </li>
                  <li className="nav-item ms-1">
                    <Link href="/home" className="nav-link text-white">
                      <span>
                        <FontAwesomeIcon icon={faFileAlt}></FontAwesomeIcon>
                      </span>{" "}
                      Resume
                    </Link>
                  </li>
                  <li className="nav-item ms-1">
                    <Link href="/home" className="nav-link text-white">
                      <span>
                        <FontAwesomeIcon
                          icon={faProjectDiagram}
                        ></FontAwesomeIcon>
                      </span>{" "}
                      Projects
                    </Link>
                  </li>
                  <li className="nav-item ms-1">
                    <Link href="/home" className="nav-link text-white">
                      <span>
                        <FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>
                      </span>{" "}
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item ms-1">
                    <Link href="/home" className="nav-link text-white">
                      <span>
                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                      </span>{" "}
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
