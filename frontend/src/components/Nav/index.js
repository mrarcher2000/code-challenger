import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from '../../utils/auth'


function Nav() {
  const [showModal, setShowModal] = useState(false);
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <nav>
      <div>
        <Link to="/">
          <h1>Code Challenger</h1>
        </Link>
      </div>
      <div className="nav-content">
            <Link to="/profile">Your Profile</Link>
            <a href="/" onClick={logout}>
              Logout
            </a>
      </div>
    </nav>
  );
}

export default Nav;
