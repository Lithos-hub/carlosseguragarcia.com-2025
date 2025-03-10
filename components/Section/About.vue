<template>
  <div class="About">
    <div class="About__inner">
      <div class="About__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nostrum
        tempore unde commodi assumenda nulla soluta quo fugit molestiae,
        similique optio? Animi nisi vero, fugit vitae non quos incidunt fugiat
        aspernatur voluptates et doloribus dolorum, eveniet quibusdam nostrum
        esse sit eaque rerum necessitatibus odit laborum adipisci ipsam omnis
        deleniti in!
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const startTime = ref(performance.now());

const { mountedTimes } = storeToRefs(useUiStore());

onMounted(() => {
  mountedTimes.value.about = Math.round(performance.now() - startTime.value);
});
</script>

<style lang="scss" scoped>
@use "@/styles/general.scss" as *;
.About {
  @apply relative flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-transparent to-black;

  &__inner {
    @apply px-[10vw];
  }

  &__content {
    @include corner-effect;
    @apply p-10 text-center text-xl text-stone-900 dark:text-white;
  }
}
</style>
