import "./Blogcard.css";
import { Link } from "react-router-dom";

export default function Blogcard({ id,image, title, description }) {
	return (
		<div className="blog-card">
			<img src={image} alt="" />
			<span className="title">{title}</span>
			<span className="description">{description.slice(0, 100)}...</span>
			<Link className="read-blog" to={`/blog/${id}`}>
				Read more
			</Link>
		</div>
	);
}
