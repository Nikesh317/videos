import axios from "axios";

const KEY = "AIzaSyDGOwQdnmUWXHRaHSA5ebm7IHo8olltn1o";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 50,
    key: KEY,
  },
});
