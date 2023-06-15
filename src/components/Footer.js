import { FaGithub } from 'react-icons/fa';
//import { FaGithubAlt } from 'react-icons/fa';

const Footer = () => {

	return (
		<div className="footer">
			<h6>This page was written by digidoor.</h6>
			<a href="https://github.com/digidoor">
				<FaGithub color="white" />
			</a>
		</div>
	);
}
 
export default Footer;