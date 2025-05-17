export default defineNuxtRouteMiddleware((to) => {
  console.log("Running onboarding middleware...");

  if (import.meta.client) {
    const hasSeenOnboarding =
      localStorage.getItem("hasSeenOnboarding") === "true";

    if (!hasSeenOnboarding && to.path !== "/onboarding") {
      return navigateTo("/onboarding");
    }
  }
});
