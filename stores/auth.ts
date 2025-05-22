import { defineStore } from "pinia";

export const authStore = defineStore("auth", {
  state: () => ({
    isLoggedIn: false,
    role: null as string | null,
  }),

  actions: {
    login(email: string, password: string) {
      if (email === "admin" && password === "admin") {
        this.isLoggedIn = true;
        this.role = "admin";
        localStorage.setItem(
          "loginState",
          JSON.stringify({ isLoggedIn: true, role: "admin" })
        );
        return true;
      } else {
        return false;
      }
    },

    logout() {
      this.isLoggedIn = false;
      this.role = null;
      localStorage.removeItem("loginState");
    },

    restoreAuth() {
      const authState = localStorage.getItem("loginState");
      if (authState) {
        const data = JSON.parse(authState);
        this.isLoggedIn = data.isLoggedIn;
        this.role = data.role;
      }
    },
  },
});
