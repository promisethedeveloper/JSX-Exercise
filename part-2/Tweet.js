const Tweet = (props) => {
	return (
		<div>
			<p>Username: @{props.username}</p>
			<p>Name: {props.name}</p>
			<p>Message: {props.message}</p>
		</div>
	);
};
