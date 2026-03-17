import { useEffect, useState } from "react";
import Reportcard from "../../Reportcard/Reportcard";
import Requestcard from "../../Reportcard/Reportcard";
import "./Reportspage.css";
import { getRequests } from "../../api/reportAPI";

export default function Reportspage() {
	const [isReports, setIsReports] = useState([]);

	useEffect(() => {
		getRequests(10).then(setIsReports);
	}, []);

	if (!isReports) return <div>Loading ...</div>;

	return (
		<div className="reportspage">
			{isReports.map((report) => (
				<Reportcard key={report.id} info={report} />
			))}
		</div>
	);
}
