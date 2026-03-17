import { useEffect, useRef, useState } from "react";
import { getNews } from "../../api/newsAPI";
import Newscard from "../../Newscard/Newscard";
import { PulseLoader } from "react-spinners";
import "./Newspage.css";

export default function Newspage() {
	const [isNews, setIsNews] = useState([]);
	const [isOffset, setIsOffset] = useState(0);
	const [isLoading, setIsLoading] = useState(false);

	const loader = useRef(null);
	const limit = 10;

	const loadNews = async () => {
		if (isLoading) return;

		setIsLoading(true);

		try {
			const data = await getNews(limit, isOffset);

			setIsNews((prev) => {
				const filtered = data.filter(
					(news) => !prev.some((item) => item.id === news.id),
				);

				return [...prev, ...filtered];
			});

			// 👉 увеличиваем offset после загрузки
			setIsOffset((prev) => prev + limit);
		} catch (error) {
			console.error("Error load news:", error);
		}

		setIsLoading(false);
	};

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting && !isLoading) {
				loadNews();
			}
		});

		if (loader.current) {
			observer.observe(loader.current);
		}

		return () => observer.disconnect();
	}, [loadNews, isLoading]);

	// useEffect(() => {
	// 	getNews(10).then(setIsNews);
	// }, []);

	return (
		<>
			{isNews.map((news) => (
				<Newscard
					key={news.id}
					id={news.id}
					image={news.image_url}
					title={news.title}
					description={news.summary}
				/>
			))}
			{isLoading && <PulseLoader color={"goldenrod"} />}
			<div ref={loader} className="loader" />
		</>
	);
}
