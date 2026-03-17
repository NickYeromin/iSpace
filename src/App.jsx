import { useEffect, useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/pages/Homepage/Homepage";
import Notfoundpage from "./components/pages/Notfoundpage/Notfoundpage";
import Header from "./components/Header/Header";
import Newscard from "./components/Newscard/Newscard";
import Blogcard from "./components/Blogcard/Blogcard";
import Newspage from "./components/pages/Newspage/Newspage";
import Blogspage from "./components/pages/Blogspage/Blogspage";
import Scene3D from "./components/Scene3D/Scene3D";
import Newscardpage from "./components/pages/Newscardpage/Newscardpage";
import Blogpage from "./components/pages/Blogpage/Blogpage";
import Reportspage from "./components/pages/Reportspage/Reportspage";
import ToUp from "./components/ToUp/ToUp";
// import rocket from "./3Dobjects/Rocket.glb";

function App() {
	const [isScrollY, setIsScrollY] = useState(0);
	const [isBtnUp, setIsBtnUp] = useState(false);

	useEffect(() => {
		const handleScroll = () => setIsScrollY(window.scrollY);
		// console.log(isScrollY)
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isScrollY]);


	return (
		<>
			<Header />
			<ToUp scrollY={isScrollY} />

			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/news" element={<Newspage />} />
				<Route path="/blogs" element={<Blogspage />} />

				<Route path="/news/:id" element={<Newscardpage />} />
				<Route path="/blog/:id" element={<Blogpage />} />
				<Route path="/requests" element={<Reportspage />} />

				<Route path="*" element={<Notfoundpage />} />
			</Routes>
		</>
	);
}

export default App;
