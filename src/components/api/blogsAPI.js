export const getBlogs = async (limit = 10, offset = 0) => {
	const res = await fetch(
		`https://api.spaceflightnewsapi.net/v4/blogs/?format=json&limit=${limit}&offset=${offset}`,
	);
	const data = await res.json();
	return data.results;
};

export const getBlogById = async (id) => {
	const res = await fetch(
		`https://api.spaceflightnewsapi.net/v4/blogs/${id}/?format=json`,
	);
	const data = await res.json();
	return data;
};
