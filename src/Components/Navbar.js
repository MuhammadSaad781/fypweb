import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid">
            <a
              class="navbar-brand"
              style={{ color: "white", marginLeft: 100 }}
              href="#"
            >
              Funderrr
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-end"
              style={{ marginRight: 50 }}
              id="navbarText"
            >
              <ul class="navbar-nav m-1">
                <li class="nav-item">
                  <Link
                    style={{
                      color: "white",
                      textDecoration: "none",
                      paddingRight: 20,
                    }}
                  >
                    How it works?
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    style={{
                      color: "white",
                      textDecoration: "none",
                      paddingRight: 20,
                    }}
                  >
                    Categories
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    style={{
                      color: "white",
                      textDecoration: "none",
                      paddingRight: 20,
                    }}
                  >
                    Sign In
                  </Link>
                </li>
                <li class="nav-item">
                  <Link style={{ color: "white", textDecoration: "none" }}>
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
