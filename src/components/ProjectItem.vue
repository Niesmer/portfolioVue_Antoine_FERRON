<template>
    <li class="w-full text-white p-6 rounded-xl bg-black block">
        <p class="flex justify-between w-full border-b-2 border-white">
            {{ project.titre }}
            <span class="font-thin">{{ project.annee }}</span>
        </p>
        <div ref="content" class="h-0 grid gap-6 overflow-hidden">
            <p class="pt-4">{{ project.description }}</p>
            <RouterLink class="justify-self-center bg-gray-400 p-2 rounded-xl" :to="'project/' + project.link || '/'">Voir plus</RouterLink>
        </div>
    </li>
</template>

<script setup lang="ts">
import type { ProjectInterface } from '@/data/projects';
import gsap from 'gsap';
import { ref, watch } from 'vue';

const props = defineProps<{
    project: ProjectInterface,
    isExpanded: boolean
}>();

const content = ref<HTMLElement | null>(null);

watch(() => props.isExpanded, (newVal) => {
    if (content.value) {
        if (newVal) {
            enter(content.value);
        } else {
            leave(content.value);
        }
    }
});

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