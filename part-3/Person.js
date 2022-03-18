const Person = ({ name, age, hobbies }) => {
	return (
		<div>
			<p>
				Learn some more information about this person <b>{name}</b>
			</p>
			<p>Name: {name.length > 8 ? name.slice(0, 6) : name}</p>
			<h3>{age > 18 ? "Please go vote" : "You must be 18"}</h3>
			<h3>Hobbies:</h3>
			<ul>
				{hobbies.map((hobby) => (
					<li>{hobby}</li>
				))}
			</ul>
		</div>
	);
};
