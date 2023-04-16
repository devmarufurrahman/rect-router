import { useNavigate } from "react-router-dom";

const Terminal = () => {
	const navigate = useNavigate();

	const handleCounter = () => {
		navigate("/bus-counter");
	};

	return (
		<div>
			<h1>Terminal</h1>

			<button onClick={handleCounter}>Go to the bus counter</button>
		</div>
	);
};

export default Terminal;
