import axios from "axios"

export const requestApi = {
	get: async (url) => {
		const { data } = await axios.get(url)
		return data;

	}
}