import { Link } from "react-router-dom";
import "./Landing.css";
// import "./Navbar";

export default function Landing() {
  return (
  <>
  <div className="manju">
    <h1>MK Paradise Zoo</h1>
    <img src="https://i.pinimg.com/originals/04/b6/92/04b692c767dc911a0b03d78035388a50.jpg"height="400"width="500"></img>
    <img src="C:\Users\ASUS\Downloads.png"height="400"width="500"></img>
    <Link to="/login">
    <button id="login">Login</button>{"/"}
    </Link>
    <Link to="/register">
      <button id="register">Register</button>
    </Link>
    </div>
  </>
  );
}