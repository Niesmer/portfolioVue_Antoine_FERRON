<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';
import { RouterLink, RouterView } from 'vue-router';

const navItem = ref([]);
let blinkTimeline: any = null;

const handleMouseEnter = () => {
  blinkTimeline = gsap.timeline({ repeat: 0, });
  blinkTimeline.timeScale(2);
  blinkTimeline.to(navItem.value, {
    opacity: 0, // Fade out
    duration: 0.5, // Half a second for the blink
    ease: 'power1.inOut',
    stagger: 0.2, // 0.2 second delay between each item
  }).to(navItem.value, {
    opacity: 1, // Fade back in
    duration: 0.5,
    ease: 'power1.inOut',
    stagger: 0.2, // Stagger for fading back in
  });
};

// Function to stop the blinking animation
const handleMouseLeave = () => {
  if (blinkTimeline) {
    blinkTimeline.kill(); // Stop the animation when the mouse leaves
    blinkTimeline = null;

    // Ensure all items are reset to full opacity
    navItem.value.forEach((item: any) => {
      gsap.to(item, { opacity: 1, duration: 0 });
    });
  }
};

// Cleanup on component unmount
onBeforeUnmount(() => {
  if (blinkTimeline) {
    blinkTimeline.kill();
  }
});
</script>



<template>

  <body class="mt-6 px-4">
    <header class="p-2 mb-2 w-fit sticky ml-auto top-0 flex">
      <nav class="rounded-full underline uppercase px-4 flex gap-4">
        <a @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" class="grid grid-cols-2 gap-1 grid-rows-2">
          <div class="w-4 h-4 border-black border-2 rounded-sm" v-for="(item, index) in 4" :key="index" ref="navItem">
          </div>
        </a>
      </nav>
    </header>
    <RouterView />
  </body>

</template>


<style scoped>
.neflite {
  font-family: 'neflite';
}

/* Other styling as needed */
</style>
