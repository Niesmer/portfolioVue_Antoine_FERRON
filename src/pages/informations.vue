<template>
    <div class="bg-[#FFF1E4] min-h-screen flex flex-col py-10 px-4">
        <div class="">
            <h2 class="w-fit text-2xl font-semibold text-black border-b-2 border-[#D75A00]">À Propos</h2>
            <p class="mt-2 text-gray-600">
                Curieux et sérieux, je découvre et maîtrise de nouvelles technologies pour réaliser des projets en
                DevOps, développement web et applications interactives.
            </p>
        </div>
        <div class="mt-6">
            <h2 class="w-fit text-2xl font-semibold text-black border-b-2 border-[#D75A00]">Compétences</h2>
            <ul class="mt-2 text-gray-600 list-disc list-inside">
                <li>DevOps et intégration continue</li>
                <li>Développement front-end (React, Vue.js)</li>
                <li>Développement back-end (Node.js, Symfony)</li>
            </ul>
        </div>
        <div class="mt-6">
            <h2 class="w-fit text-2xl font-semibold text-black border-b-2 border-[#D75A00]">Projets Récents</h2>
            <ul class="mt-2 text-gray-600 space-y-3">
                <li>
                    <span class="font-semibold">Win Your Star</span>:
                    Un serious game en Symfony et React, reliant coachs et participants.
                </li>
                <li>
                    <span class="font-semibold">Laval Patrimoine</span>:
                    Une application mobile et VR pour découvrir l'histoire des halles de Laval.
                </li>
                <li>
                    <span class="font-semibold">REPLIK Podcast</span>:
                    Une série dédiée à la pop culture et au cinéma.
                </li>
            </ul>
        </div>
        <div class="mt-6">
            <h2 class="w-fit text-2xl font-semibold text-black border-b-2 border-[#D75A00]">Contact</h2>
            <p class="mt-2 text-gray-600">
                Mobile partout en France.
            </p>
            <div class="flex flex-col sm:flex-row sm:space-x-4 mt-4">
                <a href="mailto:antoine.ferron.pro@proton.me" target="_blank"
                    class="w-full sm:w-auto bg-[#D75A00] text-white py-2 px-4 rounded shadow text-center hover:bg-[#c95400] transition-colors">
                    Envoyer un Email
                </a>
                <a href="https://www.linkedin.com/in/ferron-antoine" target="_blank"
                    class="w-full sm:w-auto mt-2 sm:mt-0 bg-[#D75A00] text-white py-2 px-4 rounded shadow text-center hover:bg-[#c95400] transition-colors">
                    Mon LinkedIn
                </a>
            </div>
        </div>
    </div>
</template>
