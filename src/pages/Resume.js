const Resume = () => {
	return (
		<div className={`content resume`}>
			<h1>Resume</h1>
			<h3>Front-end Proficiencies</h3>
			<ul className="skills">
				<li>HTML</li>
				<li>CSS</li>
				<li>JavaScript</li>
				<li>React</li>
			</ul>
			<h3>Back-end Proficiencies</h3>
			<ul className="skills">
				<li>APIs</li>
				<li>Node</li>
				<li>Express</li>
				<li>MySQL, Sequelize</li>
				<li>MongoDB, Mongoose</li>
				<li>REST</li>
				<li>GraphQL</li>
			</ul>
			<h3>Non-WebDev Proficiencies</h3>
			<ul className="skills">
				<li>C</li>
				<li>C++</li>
				<li>LISP</li>
				<li>Scheme</li>
			</ul>
		</div>
	);
};

export default Resume;