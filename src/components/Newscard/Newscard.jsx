import "./Newscard.css";
import { Link } from "react-router-dom";

export default function Newscard({ id, image, title, description }) {
	return (
		<div className="news-card">
			<img src={image} alt="" />
			<div className="other">
				<span className="title">{title}</span>
				<span className="description">{description.slice(0, 210)}...</span>
				<Link className="read-news" to={`/news/${id}`}>
					Read more
				</Link>
			</div>
		</div>
	);
}
