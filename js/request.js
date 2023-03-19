
const request = axios.create({
  baseURL: ENDPOINT,
  timeout: 10000,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ` + localStorage.getItem(TOKEN),
  },
});