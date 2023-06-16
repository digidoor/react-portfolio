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
		{
			name: 'work-day-scheduler',
			description: 'A Simple Web-Based Schedule Utility Using jQuery',
			repo: "https://github.com/digidoor/work-day-scheduler",
			link: "https://digidoor.github.io/work-day-scheduler"
		},
		{
			name: 'weather-dashboard',
			description: 'Check and Save Weather Fetched Through an API',
			repo: "https://github.com/digidoor/weather-dashboard",
			link: "https://digidoor.github.io/weather-dashboard"
		},
		{
			name: 'readme-generator',
			description: 'Generate README.md files automatically via Node.js',
			repo: "https://github.com/digidoor/readme-generator",
			link: ""
		},
	]);

	return (
		<div className="content">
			<h1 className="portfolio">Portfolio</h1>
			<p>Below are a few of the projects I have completed using various 
				web technologies. Note that this website is itself a modular React
				App using modern web development principles and dynamic rendering.
			</p><p>&nbsp;</p>
			<p>The source for this website can be found <a href=
			"https://github.com/digidoor/react-portfolio">here</a>.</p>
			{projects.map((project, idx) => (
				<Project
					project={project}
					key={"project" + idx}
				/>
			))}
			<p> Also, here's a gist I wrote: <a href="https://gist.github.com/digidoor/17a6b1f74f9baf65e0387070da56a3b9">Link</a></p>
		</div>
	);
}

export default Home;