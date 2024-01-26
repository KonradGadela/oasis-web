import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from  '../redux/actions/userActions';

const NavBar = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };
//Added admin dashboard user messages
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand">
          <Link to="/" className="custom-link">
            OASIS HOTEL
          </Link>
        </a>

        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page">
              <Link to="/rooms" className="custom-link">
                Rooms
              </Link>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#ServicesAll">
              Services
            </a>
          </li>

          <li className="nav-item">
            <span className="nav-link">
              Welcome, {user ? user.name : 'Guest'}!
            </span>
          </li>
          {user && user.role === '2' && (
            <li class="nav-item">
              <a class="nav-link" aria-current="page">
                <Link to="/admin" className="custom-link">
                  Admin Dashboard
                </Link>
              </a>
            </li>
          )}
          <li class="nav-item">
            {user ? (
              <button type="button" class="btn btn-primary" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <button type="button" class="btn btn-success">
                <Link to="/SignIn" className="custom-link">
                  Sign In
                </Link>
              </button>
            )}
          </li>
          

        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
