import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
	return (
		<div className="header">
			<Link to="/" className="logo">
				iSpace
			</Link>
			<nav>
				<Link to="/news" className="nav-link">
					News
				</Link>
				<Link to="/blogs" className="nav-link">
					Blogs
				</Link>
				<Link to="/requests" className="nav-link">
					Requests
				</Link>
			</nav>
		</div>
	);
}
