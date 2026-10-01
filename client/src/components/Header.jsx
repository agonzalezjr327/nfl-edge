import {
  NavLink
} from "react-router-dom";


function Header() {

  return (

    <nav
      className="
        navbar
        navbar-expand-lg
        navbar-dark
        bg-dark
        shadow
      "
    >

      <div className="container">

        <NavLink
          className="
            navbar-brand
            fw-bold
          "
          to="/"
        >

          🏈 NFL EDGE

        </NavLink>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >

          <span
            className="navbar-toggler-icon"
          />

        </button>


        <div
          id="mainNav"
          className="
            collapse
            navbar-collapse
          "
        >

          <div
            className="
              navbar-nav
              ms-auto
            "
          >

            <NavLink
              className="nav-link"
              to="/"
            >
              Dashboard
            </NavLink>


            <NavLink
              className="nav-link"
              to="/games"
            >
              Games
            </NavLink>


            <NavLink
              className="nav-link"
              to="/suggestions"
            >
              Suggestions
            </NavLink>


            <NavLink
              className="nav-link"
              to="/parlay"
            >
              Parlay Builder
            </NavLink>


            <NavLink
              className="nav-link"
              to="/bets"
            >
              My Bets
            </NavLink>


            <NavLink
              className="nav-link"
              to="/performance"
            >
              Performance
            </NavLink>

          </div>

        </div>

      </div>

    </nav>

  );
}


export default Header;