import axios from "axios";
import url_api from "../config/URL";
export async function getPost() {
    try {
        const res = await axios.get(`${url_api}/api/articles`, {
            headers: { "Accept": "application/json" },
            withCredentials: true
        });
        return res.data;
    } catch (error) {
        console.error("Erreur lors du chargement des articles:", error);
        return null;
    }
}