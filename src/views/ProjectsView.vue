<script setup lang="ts">
import { ref } from 'vue'

// 1. On définit le type pour plus de sécurité (TypeScript)
interface Project {
    id: number;
    title: string;
    description: string;
    techs: string[];
}

// 2. Le tableau de tes projets
const projects = ref<Project[]>([
    {
        id: 1,
        title: "Ropach mobile",
        description: "Ropach est une application web de gestion des cantines scolaires développée par la société DAHST. \
        Mon objectif a été de développer une solution mobile pour cette application.",
        techs: ["Flutter", "Laravel"]
    },
    {
        id: 2,
        title: "EnseignantSup",
        description: "L'objectif de ce projet était de développer une application permettant d’aider les professeurs à \
        l’évaluation qualitative des dossiers Parcoursup.",
        techs: ["Node.js", "Electron", "Javascript", "HTML", "CSS"]
    },
    {
        id: 3,
        title: "GASC",
        description: "GASC est l'application web de gestion des activités scolaires et culturelles utilisée par l'IUT. \
        Ma mission sur ce projet fut d'améliorer le site web et son API.",
        techs: ["Symfony", "API Platform"]
    },
    {
        id: 4,
        title: "Festival de Cannes",
        description: "Durant ma 3ème année de BUT j'ai eu l'occasion de reprendre une application de gestion du festival \
        de Cannes développée par un groupe d'anciens étudiants et de la transformer en un site web complet.",
        techs: ["Symfony"]
    }
]);

// 3. Gestion de l'état (on stocke l'ID du projet ouvert)
const activeProjectId = ref<number | null>(null);

const toggleProject = (id: number) => {
    activeProjectId.value = activeProjectId.value === id ? null : id;
}
</script>

<template>
    <section class="side-section mt-lg-5 p-5">
        <div class="d-flex align-items-center mb-4">
            <div class="line me-3"></div>
            <span class="text-uppercase tracking-wider small fw-bold text-info">Mes Projets</span>
        </div>

        <div class="projects-stack d-flex flex-column gap-3">
            <div v-for="project in projects" :key="project.id" class="project-container">
                <div @click="toggleProject(project.id)" class="project-trigger d-flex align-items-center"
                    :class="{ 'is-open': activeProjectId === project.id }">

                    <div class="arrow-wrapper me-3">
                        <i class="bi bi-chevron-right arrow-icon"
                            :class="{ 'rotated': activeProjectId === project.id }">
                        </i>
                    </div>

                    <span class="project-title-preview text-uppercase">{{ project.title }}</span>
                </div>

                <transition name="expand">
                    <div v-if="activeProjectId === project.id" class="project-content">
                        <div class="card-inner">
                            <h3 class="inner-title text-info mb-3">
                                <span class="hash">#</span> {{ project.title }}
                            </h3>

                            <p class="description-text mb-4">
                                {{ project.description }}
                            </p>

                            <div class="d-flex flex-wrap gap-2">
                                <span v-for="tech in project.techs" :key="tech" class="badge info-badge">
                                    {{ tech }}
                                </span>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </section>
</template>