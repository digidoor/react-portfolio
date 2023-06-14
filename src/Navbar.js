const Navbar = () =>
{
    return (
        <nav className="navbar">
            <h1> Test Blog</h1>
            <div className="link">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color:"white",
                    backgroundColor: "#46b392",
                    borderRadius: "8px"
                }}>New Blog</a>
            </div>
        </nav>
    );
}

export default Navbar;