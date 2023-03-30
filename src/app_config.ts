export interface AppConfig {
	github_access_token: string;
	widgets: {
		id: string;
		repository_url: string;
	}[];
}

export const config: AppConfig = {
	github_access_token: process.env.REACT_APP_GITHUB_ACCESS_TOKEN as string,
	widgets: [
		{
			id: "8e35c69a-c42d-45b2-90b2-a538664bf436",
			repository_url: "https://github.com/alejandrososa/mower"
		},
		{
			id: "6c57a193-d230-434a-98f9-643967f28f94",
			repository_url: "https://github.com/alejandrososa/discounts"
		},
		{
			id: "b988be1d-e26d-4d3a-b538-1cbb4eac0e80",
			repository_url: "https://github.com/alejandrososa/dockbox"
		},
	]
};
