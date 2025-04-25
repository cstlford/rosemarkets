const config = {
  apiBaseUrl:
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
      ? "http://localhost:5750"
      : "https://your-api-domain.herokuapp.com",
};

export default config;
