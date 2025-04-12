<template>
  <Text3D
    text="Carlos Segura García"
    font="/threejs-fonts/Rajdhani_Regular.json"
    :position="[0, 1, 2]"
    :bevel-thickness="0.0001"
    :bevel-size="0.00001"
    :size="1"
  >
    <TresMeshBasicMaterial color="white" />
  </Text3D>
  <Text3D
    text="Front-end Developer"
    font="/threejs-fonts/Rajdhani_Regular.json"
    :position="[0, -1, 2]"
    :bevel-thickness="0.0001"
    :bevel-size="0.00001"
    :size="0.4"
  >
    <TresMeshBasicMaterial color="white" />
  </Text3D>
</template>

<script setup lang="ts">
import { Text3D } from "@tresjs/cientos";
</script>
