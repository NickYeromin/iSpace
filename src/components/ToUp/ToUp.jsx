import { useState, useEffect } from "react";
import "./ToUp.css";
import { IoMdRocket } from "react-icons/io";

export default function ToUp({ scrollY }) {
	const [isClicked, setIsClicked] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	const handleClick = () => {
		setIsClicked(true);
		window.scrollTo({ top: 0, behavior: "smooth" }); // плавний скрол
	};

	useEffect(() => {
		if (!isClicked) return;
		const timer = setTimeout(() => {
			setIsClicked(false);
		}, 1000); // кнопка "розчиняється" за 1 секунду
		return () => clearTimeout(timer);
	}, [isClicked]);

	useEffect(() => {
		if (scrollY > 300) setIsVisible(true);
	}, [scrollY]);

	return isVisible ? (
		<a
			href="#"
			className={`toup ${isClicked ? "toup-active" : ""}`}
			onClick={handleClick}
			onAnimationEnd={() => setIsVisible((prev) => !prev)}
		>
			<IoMdRocket />
		</a>
	) : null;
}
