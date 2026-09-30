import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/dashboard">Dashboard </Link>

      <Link to="/applications">Applications</Link>
    </nav>
  );
}

export default Navbar;