import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";

function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const scrolling = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", scrolling);
  }, []);
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg fixed-top  secondrycolor ${
          scroll ? "srollednav" : ""
        }`}
      >
        <div className="container p-3 ">
          <Link
            className="navbar-brand fs-2 text-white text-uppercase fw-bolder"
            to={"/home"}
          >
            start framework
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item text-uppercase fw-bold mt-3 mt-md-0 px-2">
                <NavLink
                  className="nav-link text-white"
                  aria-current="page"
                  to={"/about"}
                >
                  about
                </NavLink>
              </li>
              <li className="nav-item text-uppercase fw-bold mt-3 mt-md-0 px-2">
                <NavLink className="nav-link text-white" to={"/portfolio"}>
                  portfolio
                </NavLink>
              </li>
              <li className="nav-item text-uppercase fw-bold mt-3 mt-md-0 px-2">
                <NavLink className="nav-link text-white" to={"/contact"}>
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
