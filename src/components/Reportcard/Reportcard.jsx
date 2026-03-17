import "./Reportcard.css";

export default function Reportcard({ info }) {
	const { image_url, title, summary, published_at, updated_at, url } = info;

	const shortText = summary?.slice(0, 120) + "...";

	const publishedDate = new Date(published_at).toLocaleDateString();

	return (
		<article className="reportcard">
			<div className="reportcard-img">
				<img src={image_url} alt={title} />
			</div>

			<div className="reportcard-content">
				<h3 className="reportcard-title">{title}</h3>

				<p className="reportcard-text">{shortText}</p>

				<div className="reportcard-footer">
					<span className="reportcard-date">{publishedDate}</span>

					<a
						href={url}
						className="reportcard-link"
						target="_blank"
						rel="noopener noreferrer"
					>
						Read more →
					</a>
				</div>
			</div>
		</article>
	);
}
