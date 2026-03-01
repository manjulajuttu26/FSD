import { Link,useNavigate } from 'react-router-dom';
import './Login.css';
function Login() {
  const navigate = useNavigate();
  return (
    <>
    
    <form id="loginform">
      <div className="page">
      <label>Username:</label>
      <input type="text" id="Username" placeholder="Enter Your username"></input><br></br>
      <label>Password:</label>
      <input type="password" id="Password" placeholder="Enter the password"></input> 
    </div>
    <div className="buttons"> 
    {/* <Link to="/login"> */}
    <button type="button"onClick={() =>
    {   
      alert("Login Successful!");
      navigate("/home");
    }}>Login</button><br/><br/>
    {/* </Link> */}
    <Link to="/register">
    <button type="button">Register</button>
    </Link>
    </div>
  </form>
  </>
  ); 
}
export default Login;