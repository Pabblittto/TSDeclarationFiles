import axios from "axios";

axios.interceptors.request.use((config) => {
  // Dodanie tokenów
  config._tokenType;
  switch (config._tokenType) {
    case "admin":
      // Add admin token
      break;
    case "user":
    // Add user token
    default:
      // Do sth else
      break;
  }

  return config;
});
