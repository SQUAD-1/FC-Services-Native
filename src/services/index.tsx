import axios from "axios";

export const api = axios.create({
	baseURL: "https://fc-services-server.onrender.com/",
});