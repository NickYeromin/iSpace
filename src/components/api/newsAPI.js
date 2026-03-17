export const getNews = async (limit = 10, offset = 10) => {
	const res = await fetch(
		`https://api.spaceflightnewsapi.net/v4/articles/?format=json&limit=${limit}&offset=${offset}`,
	);
	const data = await res.json();
	return data.results;
};

export const getNewsById = async (id) => {
	const res = await fetch(
		`https://api.spaceflightnewsapi.net/v4/articles/${id}/?format=json`,
	);
	const data = await res.json();
	return data;
};
