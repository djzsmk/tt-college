import { Link } from "react-router-dom";

function Navbar () {
    return (
        <nav>
            <Link to= "/">Home</Link>
            <Link to="/create">Character Creator</Link>
            <Link to="/character">Character</Link>
            <Link to="/adventure">Adventure</Link>
        </nav>
    )
}

export default Navbar;