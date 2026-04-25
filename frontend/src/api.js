import axios from "axios";
const API = axios.create({
baseURL: "http://localhost:5005/api/items"
});
export default API;

