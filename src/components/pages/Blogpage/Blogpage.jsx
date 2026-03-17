import { useEffect, useState } from "react";
import { getBlogById } from "../../api/blogsAPI";
import "./Blogpage.css";
import { useParams } from "react-router-dom";
import { div } from "three/src/nodes/math/OperatorNode.js";

export default function Blogpage() {
	const [isBlog, setIsBlog] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		getBlogById(id).then(setIsBlog);
	}, [id]);

	if (!isBlog) return <div className="loading">Loading...</div>;

	const author = isBlog.authors?.[0]?.name || "Unknown author";
	const date = new Date(isBlog.published_at).toLocaleDateString();

	return (
		<div className="blogpage">
			<h1 className="title">{isBlog.title}</h1>

			<div className="meta">
				<span>{author}</span>
				<span>{date}</span>
				<span>{isBlog.news_site}</span>
			</div>

			<div className="image-wrapper">
				<img src={isBlog.image_url} alt={isBlog.title} />
			</div>

			<p className="summary">{isBlog.summary}</p>

			<a
				href={isBlog.url}
				target="_blank"
				rel="noopener noreferrer"
				className="readmore"
			>
				Read full blog
			</a>
		</div>
	);
}
