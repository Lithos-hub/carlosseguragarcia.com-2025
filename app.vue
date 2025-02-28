<template>
  <div class="App">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
@use "@/styles/main.scss" as *;

* {
  @apply text-stone-700;
}

.blur-enter-active,
.blur-leave-active {
  transition: all 0.4s;
}

.blur-enter-from,
.blur-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.App {
  @apply bg-white dark:bg-slate-800;
}

// Debugging CSS
// * {
//   outline: 1px solid red;
// }
</style>
