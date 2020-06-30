import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
      <a className="navbar-brand" href="/">
        Search Books
      </a>
      <a className="navbar-brand" href="/saved">
        Saved Books
      </a>
    </nav>
  );
}

export default Nav;