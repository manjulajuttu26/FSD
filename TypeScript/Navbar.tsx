

const Navbar: React.FC = () => {
  return (
    <>
    <nav className="navbar">
      <h2>My Website</h2>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/Services"><li>Services</li></Link>
        <Link to="/Contact"><li>Contact Us</li></Link>
      </ul>
    </nav>
    </>
  );
}

export default Navbar;
