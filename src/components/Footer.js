import { FaGithub } from 'react-icons/fa';
//import { FaGithubAlt } from 'react-icons/fa';

const Footer = () => {
	//var name  = "fab fa-github";
	
	//-brands fa-github fa-2xs
	return (
		<div className="footer">
			<h6>This page was written by digidoor.</h6>
			<a href="https://github.com/digidoor">
				<FaGithub />
			</a>
		</div>
	);
}
 
export default Footer;