<script setup lang="ts">
import gsap from 'gsap';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { projects } from '../assets/data/projects';
import { useProjectStore } from '../store/globalStore';
import { storeToRefs } from 'pinia';


let transition: HTMLElement | null;
const { chosenProject } = storeToRefs(useProjectStore());

onMounted(() => {
    transition = document.getElementById('transition');
})

const triggerTransition = async (entering: number, callbackFn?: Function) => {
    if (entering === 0) {
        return;
    }
    if (entering === 1) {
        return gsap.fromTo(transition, {
            x: 0,
            display: "flex"
        }, {
            x: window.innerWidth,
            duration: 0.5,
            delay: 0.4,
        });
    }
    if (entering === 2) {
        return gsap.fromTo(transition, {
            x: 0,
            display: "flex"
        }, {
            x: -window.innerWidth,
            duration: 0.5,
            delay: 0.4,

        });
    }
    if (entering === -1) {
        return gsap.fromTo(transition, {
            x: window.innerWidth,
            display: "flex"
        }, {
            x: 0,
            duration: 0.5,
            delay: 0.4,
        });
    }
    if (entering === -2) {
        return gsap.fromTo(transition, {
            x: -window.innerWidth,
            display: "flex"
        }, {
            x: 0,
            duration: 0.5,
            delay: 0.4,
        });
    }
};

const router = useRouter();

router.afterEach(async (to, from) => {
    if (to.path.startsWith('/project') && from.name) {
        triggerTransition(2)
    }



    // Case 3: Navigating from a project
    if (from.path.startsWith('/project') && from.name) {
        triggerTransition(1);
    }
})

router.beforeEach(async (to, from, next) => {
    if (to.path.startsWith('/project') && from.name) {
        let { id: chosenProjectLink } = to.params;
        let projectData = projects.find((p) => p.link === chosenProjectLink);
        chosenProject.value = projectData?.titre || '';
        await triggerTransition(-1);
        return next();
    }




    // Case 3: Navigating from a project
    if (from.path.startsWith('/project') && from.name) {
        chosenProject.value = 'Projets';
        await triggerTransition(-2);
        return next();
    }

    return next();
})

</script>

<template>
    <div class="w-screen h-screen hidden items-center justify-center bg-black fixed z-20 top-0" id="transition">
        <p class="text-white uppercase font-bold text-xl">{{ chosenProject }}</p>
    </div>
    <slot></slot>
</template>