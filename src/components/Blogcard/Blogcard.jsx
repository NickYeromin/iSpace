import "./Blogcard.css";

export default function Blogcard({ id,image, title, description }) {
	return (
		<div className="blog-card">
			<img src={image} alt="" />
			<span className="title">{title}</span>
			<span className="description">{description.slice(0, 100)}...</span>
			<a className="read-blog" href={`/blog/${id}`}>
				Read more
			</a>
		</div>
	);
}
