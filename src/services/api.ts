import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "3cf1b6ae02d5d9906778ae2272fb1b0b",
    language: "pt-BR",
    includes_adult: false,
  },
});
