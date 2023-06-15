import { FaGithub } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {

	return (
		<div className="footer">
			<h6>This page was written by digidoor.</h6>
			<a href="https://github.com/digidoor">
				<FaGithub color="#46b392" />
			</a>&nbsp;&nbsp;&nbsp;&nbsp;
			<a href="https://www.linkedin.com/in/alan-busovaca-236a43212/">
				<BsLinkedin color="#46b392" />
			</a>
		</div>
	);
}
 
export default Footer;