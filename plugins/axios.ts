import axios from "axios";

export default defineNuxtPlugin(() => {
  const instance = axios.create({
    baseURL: "https://api.escuelajs.co",
  });

  return {
    provide: {
      axios: instance,
    },
  };
});
