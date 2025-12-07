import '../navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Wanderly</div>

      <ul className="nav-menu">
        <li>Home</li>
        <li>Tours</li>
        <li>Destination</li>
        <li>Blog</li>
        <li>Pages</li>
        <li>Contact</li>
      </ul>

      <div className="nav-right">
        <button className="book-now">Book Now</button>
        <span className="icon">🔍</span>
      </div>
    </nav>
  );
}

export default Navbar;
