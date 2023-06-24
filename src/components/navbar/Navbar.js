import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex-row">
      <Link className="link app-name" to="/">
        MyForum
      </Link>
    </nav>
  );
}

export default Navbar;
