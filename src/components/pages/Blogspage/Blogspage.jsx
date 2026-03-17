import { useEffect, useRef, useState } from "react";
import "./Blogspage.css";
import { getBlogs } from "../../api/blogsAPI";
import Blogcard from "../../Blogcard/Blogcard";
import { PulseLoader } from "react-spinners";

export default function Blogspage() {
	const [isBlogs, setIsBlogs] = useState([]);
	const [isOffset, setIsOffset] = useState(0);
	const [isLoading, setIsLoading] = useState(false);

	const loader = useRef(null);
	const limit = 10;

	const loadBlogs = async () => {
		if (isLoading) return;

		setIsLoading(true);

		try {
			const data = await getBlogs(limit, isOffset);

			setIsBlogs((prev) => {
				const filtered = data.filter(
					(blog) => !prev.some((item) => item.id === blog.id),
				);

				return [...prev, ...filtered];
			});

			// 👉 увеличиваем offset после загрузки
			setIsOffset((prev) => prev + limit);
		} catch (error) {
			console.error("Ошибка загрузки блогов:", error);
		}

		setIsLoading(false);
	};

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting && !isLoading) {
				loadBlogs();
			}
		});

		if (loader.current) {
			observer.observe(loader.current);
		}

		return () => observer.disconnect();
	}, [loadBlogs, isLoading]);

	return (
		<div className="blogspage">
			{isBlogs.map((blog) => (
				<Blogcard
					key={blog.id}
					id={blog.id}
					image={blog.image_url}
					title={blog.title}
					description={blog.summary}
				/>
			))}

			{isLoading && <PulseLoader color={"goldenrod"} />}
			<div ref={loader} className="loader" />
		</div>
	);
}
