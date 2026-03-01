import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Login from "./Login";
import Register from "./Register";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
// import Login from "./Login";
// import Register from "./Register";
function Link() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* Pages WITHOUT Navbar */}
        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Navbar" element={<Navbar/>}/>
        {/* Pages WITH Navbar */}
        {/* <Route element={<Navbar />}> */}
          <Route path="/Home" element={<><Navbar/><Home /></>} />
          <Route path="/About" element={<><Navbar/><About /></>} />
          {/* <Route path="/about" element={} /> */}
          <Route path="/Contact" element={<><Navbar/><Contact /></>}  />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default Link;