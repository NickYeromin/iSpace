import "./Header.css";

export default function Header() {
	return (
		<div className="header">
			<a href="/" className="logo">iSpace</a>
			<nav>
				<a href="/news">News</a>
				<a href="/blogs">Blogs</a>
				<a href="/requests">Requests</a>
			</nav>
		</div>
	);
}
