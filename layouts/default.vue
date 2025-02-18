<template>
  <div class="flex h-screen w-screen flex-col overflow-hidden">
    <LayoutTopBar />
    <div class="flex flex-1">
      <LayoutLeftColumn class="hidden lg:block" />
      <div class="h-full flex-1">
        <slot />
      </div>
      <LayoutRightColumn class="hidden lg:block" />
    </div>
    <LayoutBottomBar />
  </div>
</template>
