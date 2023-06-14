import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
	margin: 0.5rem;
	color: white;
	background-color: #46b392;
	border-radius: 8px;
	&:hover { background-color: #033d34; }
`;

const Navbar = () =>
{
	return (
		<nav className="navbar">
			<h1> Portfolio </h1>
			<nav className="links">
				<StyledLink to="/" >Home</StyledLink>
				<StyledLink to="/" >Pokes</StyledLink>
			</nav>
		</nav>
	);
};

export default Navbar;