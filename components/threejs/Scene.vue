<template>
  <TresCanvas v-bind="gl" window-size shadows alpha preset="realistic">
    <!-- Camera -->
    <TresPerspectiveCamera
      :fov="65"
      :position="[0, 0, 30]"
      :rotation="[0, 0, 0]"
    />

    <!-- Ambient Light -->
    <TresAmbientLight :intensity="1" />

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
        :radius="0.2"
        :intensity="0.4"
        :luminance-threshold="0.5"
        :luminance-smoothing="1"
        mipmap-blur
      />

      <!-- Vignette -->
      <VignettePmndrs
        :darkness="0.8"
        :offset="0.4"
        :blend-function="BlendFunction.SCREEN"
      />
      <!-- Noise -->
      <NoisePmndrs premultiply :blend-function="BlendFunction.SCREEN" />
    </EffectComposerPmndrs>
    <!-- GLTF model (Triangle) -->
    <Suspense>
      <ThreejsObjectsTriangle />
    </Suspense>

    <!-- Floor -->
    <!-- <Suspense>
      <ThreejsObjectsFloorWithLight />
    </Suspense> -->
    <!-- <Suspense>
      <ThreejsObjectsFloorWithCircuits />
    </Suspense> -->
  </TresCanvas>
</template>

<script setup lang="ts">
import {
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
