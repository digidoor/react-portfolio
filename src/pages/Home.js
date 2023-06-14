import Project from '../components/Project';
import {useState } from 'react';

const Home = () => {
	const [projects] = useState([
		{
			name: 'coding-quiz',
			description: 'A Vanilla Javascript Quiz',
			repo: "https://github.com/digidoor/coding-quiz",
			link: "https://digidoor.github.io/coding-quiz/"
		},
		{
			name: 'password-generator',
			description: 'Generate Passwords with Javascript',
			repo: "https://github.com/digidoor/password-generator",
			link: "https://digidoor.github.io/password-generator"
		},
		{
			name: 'notedV2',
			description: 'A Multi-Feature React App With a MongoDB Backend',
			repo: "https://github.com/digidoor/notedV2",
			link: "https://boiling-reef-62224.herokuapp.com/"
		},
	]);

	return (
		<div className="content">
			<h1>Portfolio</h1>
			{projects.map((project, idx) => (
				<Project
					project={project}
					key={"project" + idx}
				/>
			))}
		</div>
	);
}

export default Home;