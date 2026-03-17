import { useParams } from "react-router-dom";
import { getNewsById } from "../../api/newsAPI";
import { useEffect, useState } from "react";
import "./Newscardpage.css";

export default function Newscardpage() {
	const [isNews, setIsNews] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		getNewsById(id).then(setIsNews);
	}, [id]);

	if (!isNews) return <div className="loading">Loading...</div>;

	const author = isNews.authors?.[0]?.name || "Unknown author";
	const date = new Date(isNews.published_at).toLocaleDateString();

	return (
		<div className="newscardpage">
			<h1 className="title">{isNews.title}</h1>

			<div className="meta">
				<span>{author}</span>
				<span>{date}</span>
				<span>{isNews.news_site}</span>
			</div>

			<div className="image-wrapper">
				<img src={isNews.image_url} alt={isNews.title} />
			</div>

			<p className="summary">{isNews.summary}</p>

			<a
				href={isNews.url}
				target="_blank"
				rel="noopener noreferrer"
				className="readmore"
			>
				Read full news
			</a>
		</div>
	);
}
