import { useEffect, useState } from "react";
import "./Homepage.css";
import { getNews } from "../../api/newsAPI";
import Newspage from "../Newspage/Newspage";
import Newscard from "../../Newscard/Newscard";

function Homepage() {
	const [isNews, setIsNews] = useState([]);

	useEffect(() => {
		getNews(3).then(setIsNews);
	}, []);

	return (
		<div className="homepage">
			<h1>Latest news</h1>
			{isNews.map((news) => (
				<Newscard
					key={news.id}
					id={news.id}
					image={news.image_url}
					title={news.title}
					description={news.summary}
				/>
			))}
		</div>
	);
}

export default Homepage;
