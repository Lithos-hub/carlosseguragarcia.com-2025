<template>
  <TresCanvas v-bind="gl" window-size shadows alpha preset="realistic">
    <!-- Camera -->
    <TresPerspectiveCamera :fov="25" :position="[0, 0, 15]" />

    <!-- Grid -->
    <Grid
      :args="[10, 10]"
      cell-color="#82dbc5"
      :cell-size="0.6"
      :cell-thickness="0.5"
      section-color="#fbb03b"
      :section-size="2"
      :section-thickness="1.3"
      :infinite-grid="true"
      :fade-from="0"
      :fade-distance="12"
      :fade-strength="1"
    />
    <TresAmbientLight :intensity="0.5" color="white" />

    <!-- Post-processing -->
    <EffectComposerPmndrs>
      <!-- Noise -->
      <NoisePmndrs premultiply :blend-function="BlendFunction.SCREEN" />
      <!-- Blob -->
      <NoisePmndrs premultiply :blend-function="BlendFunction.SCREEN" />
      <!-- Chromatic Aberration -->
      <ChromaticAberrationPmndrs
        :offset
        radial-modulation
        :modulation-offset="0"
      />
      <BloomPmndrs
        :radius="0.1"
        :intensity="2"
        :luminance-threshold="0.1"
        :luminance-smoothing="1"
        mipmap-blur
      />
      <!-- Vignette -->
      <VignettePmndrs :darkness="1" :offset="0.4" />
    </EffectComposerPmndrs>

    <!-- Triangles -->
    <TresMesh
      ref="triangleBlackRef"
      :position="[0, 0, 1]"
      :rotation="[0, 0, Math.PI / 2]"
    >
      <TresTorusGeometry :args="[TRIANGLE_SIZE, 0.5, 3, 3]" />
      <TresMeshPhysicalMaterial color="black" />
    </TresMesh>

    <TresMesh
      ref="triangleInsideLightRef"
      :position="[0, 0, 0]"
      :rotation="[0, 0, Math.PI / 2]"
    >
      <TresTorusGeometry :args="[TRIANGLE_SIZE - 0.01, 0.5, 3, 3]" />
      <TresMeshBasicMaterial color="white" />
    </TresMesh>

    <TresMesh
      ref="triangleOutsideLightRef"
      :position="[0, 0, 0]"
      :rotation="[0, 0, Math.PI / 2]"
    >
      <TresTorusGeometry :args="[TRIANGLE_SIZE + 0.55, 0.1, 3, 3]" />
      <TresMeshBasicMaterial color="white" />
    </TresMesh>
  </TresCanvas>
</template>

<script setup lang="ts">
import { Grid } from "@tresjs/cientos";
import { type TresInstance } from "@tresjs/core";
import {
  BloomPmndrs,
  ChromaticAberrationPmndrs,
  EffectComposerPmndrs,
  NoisePmndrs,
  VignettePmndrs,
} from "@tresjs/post-processing";
import { BlendFunction } from "postprocessing";
import { NoToneMapping, Vector2 } from "three";

const starsRef = shallowRef<TresInstance>();
const { onLoop } = useRenderLoop();

const TRIANGLE_SIZE = 1;
onLoop(({ elapsed }) => {
  if (starsRef.value) {
    starsRef.value.rotation.y = elapsed * 0.01;
  }
});

const gl = {
  toneMapping: NoToneMapping,
  multisampling: 8,
};

const offset = new Vector2(0.002, 0.002);
</script>
