<template>
  <TresCanvas window-size preset="realistic">
    <!-- Camera -->
    <TresPerspectiveCamera :position="[0, 0, 5]" />

    <!-- Lights -->
    <ThreejsObjectsAnimatedLight />

    <!-- Post-processing -->
    <EffectComposerPmndrs>
      <NoisePmndrs premultiply :blend-function="BlendFunction.SCREEN" />
    </EffectComposerPmndrs>

    <!-- Objects -->
    <ThreejsObjectsAnimatedBox />
  </TresCanvas>
</template>

<script setup lang="ts">
import { EffectComposerPmndrs } from "@tresjs/post-processing";

import { BlendFunction } from "postprocessing";
</script>
