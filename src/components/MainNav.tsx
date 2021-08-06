import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../app/Routes/Routes";
const MainNav = () => {
  const navs = [
    { to: routes.home, label: "home" },
    { to: routes.user, label: "user" },
    { to: routes.NOT_FOUND, label: "404" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink activeClassName="active" to="/" className="navbar-brand">
          AppName
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {navs.map(({ label, to }) => (
              <li key={`nav-${label}`} className="nav-item">
                <NavLink activeClassName="active" to={to} className="nav-link">
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
