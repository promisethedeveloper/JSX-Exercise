const App = () => {
	return (
		<div>
			<Tweet
				username="SoftOloye"
				name="Promise Morka"
				date={new Date().toDateString()}
				message="I will get better at this"
			/>
			<Tweet
				username="Benjy"
				name="Benjamin Kennedy"
				date={new Date().toDateString()}
				message="It is well"
			/>
			<Tweet
				username="Dave"
				name="David Ben"
				date={new Date().toDateString()}
				message="Never give up!"
			/>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
