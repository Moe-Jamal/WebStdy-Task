export default defineNuxtPlugin(() => {
  const auth = authStore();
  auth.restoreAuth();
});
