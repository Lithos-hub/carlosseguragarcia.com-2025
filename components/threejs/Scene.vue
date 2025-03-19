<template>
  <TresCanvas v-bind="gl" window-size shadows alpha preset="realistic">
    <!-- Camera -->
    <TresPerspectiveCamera :fov="80" :position="[0, 0, 100]" />

    <!-- Post-processing -->
    <EffectComposerPmndrs>
      <!-- Chromatic Aberration -->
      <ChromaticAberrationPmndrs
        :offset
        radial-modulation
        :modulation-offset="0.5"
      />
      <!-- Bloom -->
      <BloomPmndrs
        :radius="0.6"
        :intensity="0.1"
        :luminance-threshold="0.2"
        :luminance-smoothing="1"
        mipmap-blur
      />
      <!-- Vignette -->
      <VignettePmndrs :darkness="0.8" :offset="0.3" />
      <!-- Noise -->
      <NoisePmndrs premultiply :blend-function="BlendFunction.SCREEN" />
    </EffectComposerPmndrs>

    <!-- GLTF model (Triangle) -->
    <!-- <Suspense>
      <ThreejsObjectsTriangle />
    </Suspense> -->

    <!-- Floor -->
    <!-- <ThreejsObjectsFloorWithLight /> -->

    <!-- GLTF model (Geonodes) -->
    <Suspense>
      <ThreejsObjectsGeonodes />
    </Suspense>
  </TresCanvas>
</template>

<script setup lang="ts">
import {
  BloomPmndrs,
  EffectComposerPmndrs,
  NoisePmndrs,
  VignettePmndrs,
} from "@tresjs/post-processing";
import { BlendFunction } from "postprocessing";
import { NoToneMapping, Vector2 } from "three";

const gl = {
  toneMapping: NoToneMapping,
  multisampling: 8,
};

const offset = new Vector2(0.002, 0.002);
</script>
