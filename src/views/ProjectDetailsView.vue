<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps<{
    id: string
}>()

const route = useRoute()
const router = useRouter()

const project = computed(() => {
    return history.state?.project || null
})

const goBack = () => router.push('/projets')
</script>

<template>
    <section class="side-section mt-lg-5 p-5" v-if="project">

        <button @click="goBack" class="back-btn d-flex align-items-center gap-2 mb-5">
            <i class="bi bi-arrow-left"></i>
            <span>Retour aux projets</span>
        </button>

        <div class="d-flex align-items-center mb-2">
            <div class="line me-3"></div>
            <span class="text-uppercase tracking-wider small fw-bold text-info">Projet</span>
        </div>

        <div class="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-4">
            <h2 class="project-detail-title m-0">
                <span class="hash">#</span> {{ project.title }}
            </h2>
            
            <a v-if="project.gitLink" 
               :href="project.gitLink" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="git-btn d-inline-flex align-items-center gap-2">
                <i class="bi bi-github"></i>
                <span>Repository Git</span>
            </a>
        </div>

        <div class="d-flex flex-wrap gap-2 mb-5">
            <span v-for="tech in project.techs" :key="tech" class="badge info-badge">
                {{ tech }}
            </span>
        </div>

        <div class="detail-block mb-5">
            <div class="block-header d-flex align-items-center gap-2 mb-3">
                <i class="bi bi-file-text text-info"></i>
                <span class="block-label text-uppercase fw-bold small">Description</span>
            </div>
            <p class="detail-text" v-html="project.details"></p>
        </div>

        <div class="detail-divider mb-5"></div>

        <div class="detail-block mb-5">
            <div class="block-header d-flex align-items-center gap-2 mb-3">
                <i class="bi bi-check2-square text-info"></i>
                <span class="block-label text-uppercase fw-bold small">Tâches réalisées</span>
            </div>
            <ul class="detail-list">
                <li v-for="(task, index) in project.tasks" :key="index" class="detail-list-item">
                    <span class="list-dot"></span>
                    {{ task }}
                </li>
            </ul>
        </div>

        <div class="detail-divider mb-5"></div>

        <div class="detail-block">
            <div class="block-header d-flex align-items-center gap-2 mb-3">
                <i class="bi bi-stars text-info"></i>
                <span class="block-label text-uppercase fw-bold small">Compétences acquises</span>
            </div>
            <ul class="detail-list">
                <li v-for="(skill, index) in project.skills" :key="index" class="detail-list-item">
                    <span class="list-dot"></span>
                    {{ skill }}
                </li>
            </ul>
        </div>

    </section>

    <section class="side-section mt-lg-5 p-5" v-else>
        <p class="text-white-50">Projet introuvable.</p>
        <button @click="goBack" class="back-btn d-flex align-items-center gap-2 mt-3">
            <i class="bi bi-arrow-left"></i>
            <span>Retour aux projets</span>
        </button>
    </section>
</template>

<style scoped>
.project-detail-title {
    font-size: 1.8rem;
    font-weight: 700;
    color: #e0e1dd;
    letter-spacing: 1px;
}

.hash {
    color: #4cc9f0;
}

.back-btn {
    background: none;
    border: none;
    color: #778da9;
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    padding: 0;
    transition: all 0.3s ease;
}

.back-btn:hover {
    color: #e0e1dd;
    transform: translateX(-4px);
}

.block-header {
    color: #778da9;
}

.block-label {
    letter-spacing: 1.5px;
    color: #778da9;
}

.detail-text {
    color: #a8b2c1;
    font-size: 0.95rem;
    line-height: 1.8;
}

.detail-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.detail-list-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: #a8b2c1;
    font-size: 0.95rem;
}

.list-dot {
    flex-shrink: 0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #4cc9f0;
}

.detail-divider {
    height: 1px;
    background: rgba(255, 255, 255, 0.07);
}

.info-badge {
    background-color: rgba(76, 201, 240, 0.1);
    color: #4cc9f0;
    border: 1px solid rgba(76, 201, 240, 0.25);
    font-weight: 500;
    font-size: 0.78rem;
    padding: 0.3rem 0.7rem;
    border-radius: 4px;
    letter-spacing: 0.5px;
}

.line {
    width: 30px;
    height: 2px;
    background-color: #4cc9f0;
}


.git-btn {
    text-decoration: none;
    padding: 6px 14px;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #4cc9f0;
    background: rgba(76, 201, 240, 0.03);
    border: 1px solid rgba(76, 201, 240, 0.3);
    border-radius: 4px;
    transition: all 0.3s ease;
    cursor: pointer;
}

.git-btn i {
    font-size: 1.05rem;
}

.git-btn:hover {
    color: #ffffff;
    background: rgba(76, 201, 240, 0.15);
    border-color: #4cc9f0;
    box-shadow: 0 0 12px rgba(76, 201, 240, 0.25);
    transform: translateY(-1px);
}

.git-btn:active {
    transform: translateY(0);
}
</style>