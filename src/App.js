import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Terminal from "./components/Terminal";
import BusCounter from "./components/BusCounter";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="contact" element={<Contact />} />
				<Route path="terminal" element={<Terminal />} />
				<Route path="/bus-counter" element={<BusCounter />} />
			</Routes>
		</div>
	);
}

export default App;
