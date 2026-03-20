<script setup lang="ts">
const experiences = [
    { year: '2023', title: 'Bac général', desc: 'Options Maths NSI' },
    { year: '2025', title: 'Stage de développement mobile', desc: 'Découverte des frameworks Flutter et Laravel' }
];
</script>

<template>
    <section class="side-section mt-lg-5 p-5">
        <div class="d-flex align-items-center mb-4">
            <div class="line me-3"></div>
            <span class="text-uppercase tracking-wider small fw-bold text-info">Mon parcours</span>
        </div>

        <div class="experience-stack">
            <div v-for="(exp, index) in experiences" :key="index" :style="{ animationDelay: `${index * 0.15}s` }"
                class="fade-item">
                <span class="info-badge">{{ exp.year }}</span>
                <span class="project-title-preview">{{ exp.title }}</span>
                <p class="description-text">{{ exp.desc }}</p>
            </div>
        </div>
    </section>
</template>