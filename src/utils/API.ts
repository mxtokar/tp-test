import axios, { AxiosError, AxiosResponse } from 'axios';

const axiosConfig = {
	headers: { 'Content-Type': 'application/json' },
	baseURL: 'https://jsonplaceholder.typicode.com',
};

const instance = axios.create(axiosConfig);

instance.interceptors.response.use(
	(response: AxiosResponse) => response,
	async (error: AxiosError) => {
		const { response } = error;

		// Retry the request after a delay for status code 429 (Too Many Requests)
		if (response && response.status === 429) {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			return instance(axiosConfig);
		}

		return Promise.reject(error);
	}
);

export default instance;
