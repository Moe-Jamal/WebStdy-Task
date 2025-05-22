import { authStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware((to) => {
  const auth = authStore();
  const error = useError();
  if (import.meta.server) return;

  if (to.matched.length === 0 || error.value) {
    return;
  }
  if (to.path === "/") {
    return;
  }

  if (!auth.isLoggedIn) {
    return navigateTo("/");
  }
});
