const App = () => {
	return (
		<div>
			<Person
				name="Oloye"
				age={25}
				hobbies={["Writting codes", "Playing drums", "Watching football"]}
			/>
			<Person
				name="Jack"
				age={18}
				hobbies={["Playing PS5", "Reading books", "Bike racing"]}
			/>
			<Person
				name="Phillip"
				age={30}
				hobbies={["Going to the gym", "Watching shows", "Writting songs"]}
			/>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
