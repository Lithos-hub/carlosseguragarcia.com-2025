<template>
  <TresCanvas v-bind="gl" window-size shadows alpha preset="realistic">
    <!-- Camera -->
    <TresPerspectiveCamera :fov="25" :position="[0, 0, TRIANGLE_SIZE * 10]" />

    <!-- Grid -->
    <!-- <Grid
      :args="[100, 100]"
      :position="[0, -3, 0]"
      :rotation="[0, Math.PI / 2, 0]"
      cell-color="green"
      :cell-size="0.6"
      :cell-thickness="0.5"
      section-color="cyan"
      :section-size="2"
      :section-thickness="1.3"
      :infinite-grid="true"
      :fade-from="0"
      :fade-distance="100"
      :fade-strength="1"
    /> -->

    <!-- Post-processing -->
    <EffectComposerPmndrs>
      <!-- Chromatic Aberration -->
      <ChromaticAberrationPmndrs
        :offset
        radial-modulation
        :modulation-offset="0"
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
      <VignettePmndrs :darkness="1" :offset="0.4" />
      <!-- Noise -->
      <NoisePmndrs premultiply :blend-function="BlendFunction.SCREEN" />
    </EffectComposerPmndrs>

    <!-- GLTF model (Triangle) -->
    <Suspense>
      <ThreejsObjectsTriangle />
    </Suspense>

    <!-- Plane (wall - top left) -->
    <!-- <TresMesh :position="[-20.25, 10, 0]" :rotation="[0, 0, 0]">
      <TresPlaneGeometry :args="[40, 15]" />
      <TresMeshPhysicalMaterial
        color="red"
        :roughness="0.8"
        :metalness="0.2"
        :reflectivity="0.5"
      />
    </TresMesh> -->
    <!-- Plane (wall - top right) -->
    <!-- <TresMesh :position="[20.25, 10, 0]" :rotation="[0, 0, 0]">
      <TresPlaneGeometry :args="[40, 15]" />
      <TresMeshPhysicalMaterial
        color="red"
        :roughness="0.8"
        :metalness="0.2"
        :reflectivity="0.5"
      />
    </TresMesh> -->

    <!-- Plane (wall - bottom) -->
    <!-- <TresMesh :position="[0, -8, 0]" :rotation="[0, 0, 0]">
      <TresPlaneGeometry :args="[50, 20]" />
      <TresMeshPhysicalMaterial
        color="red"
        :roughness="0.8"
        :metalness="0.2"
        :reflectivity="0.5"
      />
    </TresMesh> -->

    <!-- Plane (light - background) -->
    <!-- <TresMesh :position="[0, 0, -20]" :rotation="[0, 0, 0]">
      <TresPlaneGeometry :args="[100, 100]" />
      <TresMeshBasicMaterial color="white" />
    </TresMesh> -->

    <!-- Oniric Building -->
    <!-- <TresMesh
      ref="buildingRef1"
      :position="[0, -5, 0]"
      :rotation="[0, 0, -Math.PI / 0.5]"
    >
      <TresBoxGeometry :args="[2, 10, 2]" />
      <TresMeshPhysicalMaterial color="black" />
    </TresMesh> -->
  </TresCanvas>
</template>

<script setup lang="ts">
import {
  BloomPmndrs,
  ChromaticAberrationPmndrs,
  EffectComposerPmndrs,
  NoisePmndrs,
  VignettePmndrs,
} from "@tresjs/post-processing";
import { BlendFunction } from "postprocessing";
import { NoToneMapping, Vector2 } from "three";

const TRIANGLE_SIZE = 5;

const gl = {
  toneMapping: NoToneMapping,
  multisampling: 8,
};

const offset = new Vector2(0.002, 0.002);

const { onLoop } = useRenderLoop();
</script>
