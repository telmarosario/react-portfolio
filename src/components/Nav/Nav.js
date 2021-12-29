import logo from "./nav-image.png";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="" width="100" height="100" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link det-nav" href="#introduction">
                About me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link det-nav" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link det-nav" href="#contacts">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
