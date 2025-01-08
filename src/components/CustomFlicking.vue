<script setup>
import Flicking from '@egjs/vue3-flicking';


defineProps({
  images: {
    type: Array,
    required: true
  },
  perspective: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <Flicking class="z-0 overflow-visible my-2" :options="{ align: 'center', circular: true }" :plugins="perspective">
    <div class="flicking-panel max-h-fit h-52 w-1/3 justify-center flex select-none lg:h-fit" v-for="image in images"
      :key="image.src">
      <img class="select-none object-contain text-center self-center" draggable="false" :src="image.src" :alt="image.alt" />
    </div>
  </Flicking>
</template>