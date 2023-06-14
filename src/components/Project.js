import caca from '../assets/caca.png';

const Project = ({project}) => {
	const { name, repo, link, description } = project;

	return (
		<div className="content project" key={name}>
			{/* <img src={require(`../assets/${name}.png`).default} /> */}
			<img src={require(`../assets/${name}.png`)} />
			{/* <img src={require("../assets/" + name + ".png").default} /> */}
			<img src={require("../assets/" + name + ".png")} />
			<img src={require(`../assets/${name}.png`)} />
			<p>test</p>
			<img src={caca}/>
		</div>
	);
}
 
export default Project;