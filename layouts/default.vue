<template>
  <div class="flex h-screen w-screen flex-col overflow-hidden">
    <LayoutTopBar />
    <div class="flex flex-1">
      <LayoutLeftColumn />
      <div class="h-full flex-1">
        <slot />
      </div>
      <LayoutRightColumn />
    </div>
    <LayoutBottomBar />
  </div>
</template>
