<template>
  <TresCanvas v-bind="gl" window-size shadows alpha preset="realistic">
    <!-- Camera -->
    <TresPerspectiveCamera :fov="25" :position="[0, 0, TRIANGLE_SIZE * 10]" />

    <!-- Scroll controls -->
    <ScrollControls v-model="tubularSegments" htmlScroll />

    <!-- Grid -->
    <Grid
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
    />

    <!-- Post-processing -->
    <EffectComposerPmndrs>
      <!-- Noise -->
      <NoisePmndrs premultiply :blend-function="BlendFunction.SCREEN" />
      <!-- Chromatic Aberration -->
      <ChromaticAberrationPmndrs
        :offset
        radial-modulation
        :modulation-offset="0"
      />
      <!-- Bloom -->
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
    <!-- <Levioso>
      <TresMesh
        ref="triangleBlackRef"
        :position="[0, TRIANGLE_Y_OFFSET, 1]"
        :rotation="[0, 0, Math.PI / 2]"
      >
        <TresTorusGeometry :args="[TRIANGLE_SIZE, 0.5, 3, 3]" />
        <TresMeshPhysicalMaterial
          :reflectivity="1"
          :roughness="0"
          :specular="1"
          :metalness="0"
          color="gold"
        />
      </TresMesh>

      <TresMesh
        ref="triangleInsideLightRef"
        :position="[0, TRIANGLE_Y_OFFSET, 1]"
        :rotation="[0, 0, Math.PI / 2]"
      >
        <TresTorusGeometry :args="[TRIANGLE_SIZE - 0.4, 0.1, 3, 3]" />
        <TresMeshBasicMaterial color="white" />
      </TresMesh>

      <TresMesh
        ref="triangleOutsideLightRef"
        :position="[0, TRIANGLE_Y_OFFSET, 1]"
        :rotation="[0, 0, Math.PI / 2]"
      >
        <TresTorusGeometry :args="[TRIANGLE_SIZE + 0.4, 0.1, 3, 3]" />
        <TresMeshBasicMaterial color="white" />
      </TresMesh>
    </Levioso> -->

    <!-- Plane (wall - top left) -->
    <TresMesh :position="[-20.25, 10, 0]" :rotation="[0, 0, 0]">
      <TresPlaneGeometry :args="[40, 15]" />
      <TresMeshPhysicalMaterial
        color="red"
        :roughness="0.8"
        :metalness="0.2"
        :reflectivity="0.5"
      />
    </TresMesh>
    <!-- Plane (wall - top right) -->
    <TresMesh :position="[20.25, 10, 0]" :rotation="[0, 0, 0]">
      <TresPlaneGeometry :args="[40, 15]" />
      <TresMeshPhysicalMaterial
        color="red"
        :roughness="0.8"
        :metalness="0.2"
        :reflectivity="0.5"
      />
    </TresMesh>

    <!-- Plane (wall - bottom) -->
    <TresMesh :position="[0, -8, 0]" :rotation="[0, 0, 0]">
      <TresPlaneGeometry :args="[50, 20]" />
      <TresMeshPhysicalMaterial
        color="red"
        :roughness="0.8"
        :metalness="0.2"
        :reflectivity="0.5"
      />
    </TresMesh>

    <!-- Plane (light - background) -->
    <TresMesh :position="[0, 0, -20]" :rotation="[0, 0, 0]">
      <TresPlaneGeometry :args="[100, 100]" />
      <TresMeshBasicMaterial color="white" />
    </TresMesh>

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
import { Grid, ScrollControls } from "@tresjs/cientos";
import type { TresInstance } from "@tresjs/core";
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
const TRIANGLE_Y_OFFSET = 3;
const tubularSegments = ref(3);

const triangleBlackRef = shallowRef<TresInstance>();
const triangleInsideLightRef = shallowRef<TresInstance>();
const triangleOutsideLightRef = shallowRef<TresInstance>();

const gl = {
  toneMapping: NoToneMapping,
  multisampling: 8,
};

const offset = new Vector2(0.002, 0.002);

const { onLoop } = useRenderLoop();

onLoop(({ elapsed, delta }) => {
  if (
    triangleBlackRef.value &&
    triangleInsideLightRef.value &&
    triangleOutsideLightRef.value
  ) {
    triangleBlackRef.value.geometry.args[2] = tubularSegments.value;
    triangleInsideLightRef.value.geometry.args[2] = tubularSegments.value;
    triangleOutsideLightRef.value.geometry.args[2] = tubularSegments.value;
  }
});
</script>
