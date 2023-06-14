import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
	color: Red;
	margin: 1rem;
`;

const Navbar = () =>
{
	return (
		<nav className="navbar">
			<h1> Portfolio </h1>
			<nav className="links">
				<StyledLink to="/" className="entry" style={{
					color:"white",
					backgroundColor: "#46b392",
					borderRadius: "8px"
				}}>Home</StyledLink>
				<StyledLink to="/" className="entry" style={{
					color:"white",
					backgroundColor: "#46b392",
					borderRadius: "8px"
				}}>Pokes</StyledLink>
			</nav>
		</nav>
	);
};

export default Navbar;