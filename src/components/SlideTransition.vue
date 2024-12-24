<script setup lang="ts">
import gsap from 'gsap';
import { onMounted } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';

const props = defineProps<{ projectTitle?: string; entering: boolean }>();

onMounted(() => {
    const transition = document.getElementById('transition');
    if (!transition) {
        return;
    }
    if (!props.entering) {
        gsap.to(transition, {
            x: -window.innerWidth,
            duration: 0.8,
            ease: 'power2.inOut',
            delay: 0.5,
            onComplete: () => {
                transition.style.display = 'none';
            }
        });
    } else if (props.entering) {
        transition.style.display = 'flex';
        gsap.to(transition, {
            x: 0,
            duration: 0.8,
            ease: 'power2.inOut',
            delay: 0.5,
        });
    }
});

onBeforeRouteLeave(()=>{
    const transition = document.getElementById('transition');
    if (!transition) {
        return;
    }
    transition.style.display = 'flex';
    gsap.to(transition, {
        x: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        delay: 0.5,
    });
})
</script>

<template>
    <div class="w-screen translate-x-full h-screen flex items-center justify-center bg-black fixed z-20 top-0"
        id="transition">
        <p class="text-white uppercase font-bold text-xl">{{ props.projectTitle }}</p>
    </div>
</template>