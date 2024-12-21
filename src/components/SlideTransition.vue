<script setup>
/**
 * @type {{ projectTitle: string | null, state: int }}
 */
const props = defineProps();

onMounted(() => {
    const transition = document.getElementById('transition');
    if (!transition) {
        return;
    }
    if (props.entering === 1) {
        gsap.to(transition, {
            x: -window.innerWidth,
            duration: 0.8,
            ease: 'power2.inOut',
            delay: 0.5,
            onComplete: () => {
                transition.style.display = 'none';
            }
        })
    } else if (props.entering === 2) {
        transition.style.display = 'block';
        gsap.to(transition, {
            x: 0,
            duration: 0.8,
            ease: 'power2.inOut',
            delay: 0.5,
        })
    }

})
</script>

<template>
    <div class="w-screen translate-x-full h-screen flex items-center justify-center bg-black fixed z-20 top-0"
        id="transition">
        <p class="text-white uppercase font-bold text-xl">{{ props.projectTitle }}</p>
    </div>
</template>