import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: '4ea5150f7e7a4bb4a13450b40a77829d',
  },
});
