import { useNavigate } from "react-router-dom";

const BusCounter = () => {
	const navigate = useNavigate();

	const toHome = () => {
		navigate("/");
	};

	return (
		<div>
			<h1>Welcome to bus counter</h1>
			<button onClick={toHome}>Go to home </button>
		</div>
	);
};

export default BusCounter;
