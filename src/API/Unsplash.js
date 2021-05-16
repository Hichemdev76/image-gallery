import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		//Authorization: "Client-ID UuXbBgjoQasIkgUk_cVYCEOIObvZmaAsXzLHpoViILI",
		Authorization:`Client-ID ${process.env.REACT_APP_API_CONFIG}`,
	},
});
