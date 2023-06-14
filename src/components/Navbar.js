import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
	margin: 0.5rem;
	color: white;
	background-color: #46b392;
	border-radius: 8px;
	&:hover {
		color: #46b392;
		background-color: #033d34;
	}
`;

const Navbar = () =>
{
	return (
		<nav className="navbar">
			<h1> Portfolio </h1>
			<div className="links">
				<StyledLink to="/" >Home</StyledLink>
				<StyledLink to="/" >Pokes</StyledLink>
			</div>
		</nav>
	);
};

export default Navbar;