<script setup lang="ts">
// Données inchangées
const skillGroups = [
    { label: 'Avancé', skills: ['Symfony', 'Flutter'] },
    { label: 'Maîtrisé', skills: ['Javascript', 'Laravel'] },
    { label: 'Notions', skills: ['Docker', 'Vue.js'] }
];

const languageGroups = [
    { label: "Natif", languages: ['Français'] },
    { label: "C1", languages: ['Anglais'] }
];
</script>

<template>
    <section class="side-section mt-lg-5 p-5">
        <div class="d-flex align-items-center mb-4">
            <div class="line me-3"></div>
            <span class="text-uppercase tracking-wider small fw-bold text-info">Mes compétences</span>
        </div>

        <div class="skill-container mb-4 shadow-sm">
            <div>
                <h3 class="text-uppercase tracking-wider small fw-bold text-info mb-4 skill-header">
                    <i class="bi bi-code-slash me-2"></i> Technologies
                </h3>

                <div v-for="group in skillGroups" :key="group.label" class="mb-3 ps-2">
                    <div class="project-title-preview text-uppercase mb-2 small fw-bold">
                        <span class="hash text-info">#</span> {{ group.label }}
                    </div>
                    <ul class="list-unstyled ms-3 d-flex flex-wrap gap-2">
                        <li v-for="skill in group.skills" :key="skill" class="badge px-3 py-2">
                            {{ skill }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="skill-container mb-4 shadow-sm">
            <div>
                <h3 class="text-uppercase tracking-wider small fw-bold text-info mb-4 skill-header">
                    <i class="bi bi-translate me-2"></i> Langues
                </h3>

                <div v-for="group in languageGroups" :key="group.label" class="mb-3 ps-2">
                    <div class="project-title-preview text-uppercase mb-2 small fw-bold">
                        <span class="hash text-info">#</span> {{ group.label }}
                    </div>
                    <ul class="list-unstyled ms-3 d-flex flex-wrap gap-2">
                        <li v-for="lang in group.languages" :key="lang" class="badge px-3 py-2">
                            {{ lang }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </section>
</template>

<style scoped>
.card {
    border-radius: 12px;
    transition: transform 0.2s ease-in-out;
}

.card:hover {
    transform: translateY(-5px);
}

.skill-container {
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    overflow: hidden;
    background: rgba(13, 27, 42, 0.3);
    transition: all 0.3s ease;
}

.skill-header {
    padding: 1rem 1.25rem;
    background: rgba(255, 255, 255, 0.05);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.line {
    height: 2px;
    width: 30px;
    background-color: var(--bs-info);
}

/* Style pour les badges personnalisés si tu n'utilises pas Bootstrap 5.3+ */
.bg-outline-info {
    background: transparent;
    color: #0dcaf0;
}
</style>