//import caca from '../assets/caca.png';

const Project = ({project}) => {
	const { name, repo, link, description } = project;

	return (
		<div className={`content project`} key={name}>
			<h3>{description}</h3>
			<img src={require(`../assets/${name}.png`)} />
			<p><a href={`https://github.com/digidoor/${name}`}>Link to Repo</a></p>
			{ link ? (<p><a href={`${link}`}>Live Deploy</a></p>)
				: <p>*This project is not deployed live. Please visit the repo for more info.</p> }
			
			{/* <p className="project">test</p> */}
			{/* <img src={caca}/> */}
		</div>
	);
}
 
export default Project;