import "./Newscard.css";

export default function Newscard({ id, image, title, description }) {
	return (
		<div className="news-card">
			<img src={image} alt="" />
			<div className="other">
				<span className="title">{title}</span>
				<span className="description">{description.slice(0, 210)}...</span>
				<a className="read-news" href={`/news/${id}`}>
					Read more
				</a>
			</div>
		</div>
	);
}
