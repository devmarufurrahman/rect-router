import { NavLink } from "react-router-dom";

const Navbar = () => {
	const navActive = ({ isActive }) => {
		return {
			color: isActive ? "crimson" : null,
		};
	};

	return (
		<nav>
			<span className="logo">Router</span>
			<div className="links">
				<NavLink end to="/" style={navActive}>
					Home
				</NavLink>
				<NavLink to="/terminal" style={navActive}>
					Terminal
				</NavLink>
				<NavLink to="/about" style={navActive}>
					About
				</NavLink>
				<NavLink to="/contact" style={navActive}>
					Contact
				</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
