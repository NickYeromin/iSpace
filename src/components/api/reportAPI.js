export const getRequests = async (limit) => {
	const res = await fetch(
		`https://api.spaceflightnewsapi.net/v4/reports/?format=json&limit=${limit}`,
	);
	const data = await res.json();
	return data.results;
};