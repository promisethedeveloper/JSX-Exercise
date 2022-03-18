const App = () => {
	return (
		<div>
			<FirstComponent />
			<NamedComponent name="Promise" />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"))
