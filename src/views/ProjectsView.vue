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
                                <span v-for="tech in project.techs" :key="tech" class="tech-badge">
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

<style scoped lang="scss">
/* On garde les mêmes styles que précédemment */
$accent: #4cc9f0;

.projects-stack {
    perspective: 1000px;
}

.project-container {
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    overflow: hidden;
    background: rgba(13, 27, 42, 0.3);
    transition: all 0.3s ease;

    &:hover {
        border-color: rgba($accent, 0.3);
        transform: translateX(4px);
    }
}

.project-trigger {
    padding: 1rem 1.25rem;
    cursor: pointer;
    /* On enlève justify-content-between car tout est à gauche maintenant */
    justify-content: start;

    &:hover {

        /* On change l'effet de survol pour que la flèche bouge un peu */
        .arrow-icon:not(.rotated) {
            transform: translateX(3px);
            color: $accent;
        }
    }

    &.is-open {
        background: rgba(255, 255, 255, 0.05);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
}

.project-title-preview {
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 0.85rem;
    color: #adb5bd;
    transition: all 0.3s ease;
}

.is-open .project-title-preview {
    color: #fff;
    padding-left: 5px;
}

.arrow-icon {
    font-size: 1.1rem;
    /* Un peu plus petit pour le chevron */
    color: #778da9;
    display: inline-block;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    /* Rotation pour pointer vers le bas */
    &.rotated {
        transform: rotate(90deg);
        color: $accent;
    }
}

.card-inner {
    padding: 1.5rem;
}

.inner-title {
    font-size: 1.1rem;
    font-weight: 700;

    .hash {
        opacity: 0.3;
    }
}

.tech-badge {
    font-size: 0.65rem;
    padding: 3px 10px;
    border-radius: 4px;
    background: rgba($accent, 0.1);
    color: $accent;
    border: 1px solid rgba($accent, 0.1);
    font-weight: 600;
}

/* Animation fluide */
.expand-enter-active,
.expand-leave-active {
    transition: all 0.4s ease-in-out;
    max-height: 500px;
}

.expand-enter-from,
.expand-leave-to {
    max-height: 0;
    opacity: 0;
}
</style>