import { Link } from "react-router-dom";
const Navbar = () =>
{
    return (
        <nav className="navbar">
            <h1> Portfolio </h1>
            <nav className="links">
                <Link to="/" className="entry" style={{
                    color:"white",
                    backgroundColor: "#46b392",
                    borderRadius: "8px"
                }}>Home</Link>
                <a href="/create" style={{
                    color:"white",
                    backgroundColor: "#46b392",
                    borderRadius: "8px"
                }}>New Blog</a>
            </nav>
        </nav>
    );
}

export default Navbar;