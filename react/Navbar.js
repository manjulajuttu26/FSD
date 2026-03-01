import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";
// import "./Login";


function Navbar() {
  return (
    <>
    <h2 className="logo">Teddy Bears</h2>
      <nav className="navbar">
        {/* <ul className="nav-links"> */}
        <ul>
          {/* <li><Link to="/">Landing</Link></li> */}
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          {/* <li><Link to="/login">Login</Link></li> */}
        </ul>
      </nav>

      {/* Renders the page content below Navbar */}
      <Outlet />
    </>
  );
}

export default Navbar;