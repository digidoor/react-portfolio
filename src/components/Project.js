//import caca from '../assets/caca.png';

const Project = ({project}) => {
	const { name, repo, link, description } = project;

	return (
		<div className={`content project`} key={name}>
			<h3>{description}</h3>
			<img src={require(`../assets/${name}.png`)} />
			<p className="project">test</p>
			{/* <img src={caca}/> */}
		</div>
	);
}
 
export default Project;