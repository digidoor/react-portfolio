import Project from '../components/Project';
import {useState } from 'react';

const Home = () => {
	const [projects] = useState([
		{
			name: 'coding-quiz',
			description: 'MERN Stack',
			repo: "https://github.com",
			link: "https://github.com"
		},
	]);

	return (
		<div className="content">
			<h2>Portfolio</h2>
			{projects.map((project, idx) => (
				<Project
					project={project}
					key={"project" + idx}
				/>
			))}
			<h3>Here's the Project 3 deployed link: <a href="https://boiling-reef-62224.herokuapp.com/">boiling-reef-62224.herokuapp.com</a></h3>
		</div>
	);
}

export default Home;