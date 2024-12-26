import axios from "axios";

const API_KEY = import.meta.env.VITE_CAT_API_KEY;
import { BASE_URL } from "../constants";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "x-api-key": API_KEY,
  },
});

export const uploadCat = (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  return api.post("/images/upload", formData);
};

export const fetchCats = () => api.get("/images?limit=20");

export const favouriteCat = (imageId: string) =>
  api.post("/favourites", { image_id: imageId });

export const unfavouriteCat = (favouriteId: string) =>
  api.delete(`/favourites/${favouriteId}`);

export const voteCat = (imageId: string, value: number) =>
  api.post("/votes", { image_id: imageId, value });

export const fetchVotes = (imageId: string) => api.get(`/images/${imageId}`);
