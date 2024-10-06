const dev = process.env.NODE_ENV !== "production";
const url_api = dev
    ? "http://localhost:5050"
    : "https://dzairhistory.com"

export default url_api;