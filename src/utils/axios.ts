import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://www.alphavantage.co/query",
  timeout: 20000,
  timeoutErrorMessage: "Connection is lost. Server not responded",
});

export default axios;
