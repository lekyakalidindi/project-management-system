function Navbar({ history }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-brand">Project Management System</div>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav d-flex justify-content-end w-100 me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={
                  history.location.pathname === "/"
                    ? "nav-link active"
                    : "nav-link"
                }
                aria-current="page"
                href="/"
              >
                Project
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  history.location.pathname === "/requirements"
                    ? "nav-link active"
                    : "nav-link"
                }
                href="/requirements"
              >
                Requirements
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  history.location.pathname === "/resources"
                    ? "nav-link active"
                    : "nav-link"
                }
                href="/resources"
              >
                Resources
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
