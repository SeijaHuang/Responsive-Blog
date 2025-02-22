import { NavLink } from 'react-router-dom';

export default (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">Brand</a>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="post list"
                to="/post-list"
              >
                Read
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="post list"
                to="/write-post"
              >
                Write
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="manage"
                to="/manage"
              >
                Management
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
