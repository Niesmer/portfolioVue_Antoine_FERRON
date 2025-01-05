<template>
    <li @mouseenter="!isExpanded && popAnimation($refs.button)" ref="button" class=" w-full text-white select-none p-6 rounded-xl bg-black block lg:cursor-pointer">
        <p class="flex justify-between w-full border-b-2 border-white">
            {{ project.titre }}
            <span class="font-thin">{{ project.annee }}</span>
        </p>
        <div ref="content" class="h-0 font-normal grid gap-6 overflow-hidden">
            <p class="pt-4">{{ project.description }}</p>
            <RouterLink @click.stop="" class="justify-self-center bg-slate-800 p-2 font-bold rounded-xl"
                :to="'project/' + project.link || '/'">En apprendre plus</RouterLink>
        </div>
    </li>
</template>

<script setup lang="ts">
import type { ProjectInterface } from '../assets/data/projects';
import gsap from 'gsap';
import { ref, watch } from 'vue';

const props = defineProps<{
    project: ProjectInterface,
    isExpanded: boolean,
}>();

const content = ref<HTMLElement | null>(null);
const button = ref<HTMLElement | null>(null);

watch(() => props.isExpanded, (newVal) => {
    if (content.value) {
        if (newVal) {
            popAnimation(button.value);
            enter(content.value);
        } else {
            popAnimation(button.value);
            leave(content.value);
        }
    }
});

const popAnimation = (el: Element | null) => {
    if (window.innerWidth < 768) {
        gsap.fromTo(el, {
            scale: 1
        }, {
            scale: 1.03,
            duration: 0.1,
            repeat: 1,
            yoyo: true
        });
    } else {
        gsap.fromTo(el, {
            scale: 1
        }, {
            scale:1.015,
            duration: 0.1,
            repeat: 1,
            yoyo: true
        });
    }
}

const enter = (el: Element) => {
    gsap.to(el, {
        opacity: 1,
        height: 'auto',
        duration: 0.5,
        ease: 'back.inOut'
    })
}

const leave = (el: Element) => {
    gsap.to(el, {
        opacity: 0,
        height: 0,
        duration: 0.3
    });
}
</script>