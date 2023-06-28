import axios from "axios";

const domainInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default domainInstance;
