import fetchService from "./fetchService";

export type Credentials = {
  email: string;
  password: string;
	strategy: string;
};

export default {
	fetchUser(credentials: Credentials) {
		return fetchService({
			url: `${process.env.REACT_APP_BACKEND_URL as string}/authentication`,
			method: 'POST',
			data: credentials
		})
	}
};