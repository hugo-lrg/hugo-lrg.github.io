<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

interface Project {
    id: number;
    title: string;
    description: string;
    details: string;
    techs: string[];
    tasks: string[];
    skills: string[];
}

const projects: Project[] = [
    {
        id: 1,
        title: "Ropach mobile",
        description: "Ropach est une application web de gestion des cantines scolaires développée par la société DAHST. Mon objectif a été de développer une solution mobile pour cette application.",
        details: "Ce projet a été réalisé dans le cadre d'un stage de 10 semaines entre le 14 avril 2025 et le 20 Juin 2025 dans l'entreprise DAHST (holding des sociétés RPC et SER).<br>En 2016, RPC a développé un logiciel de gestion des cantines scolaires appelé Ropach. Cette application permet d'automatiser et de faciliter la réservation des repas, le pointage des présences ainsi que la facturation des familles. Elle est utilisée par 180 clients et plus de 30 000 familles.<br>Ropach comprend 2 parties : une partie destinée aux parents d'élèves, leur permettant d'ajouter leurs enfants sur le site et de les inscrire aux prestations de l'établissement scolaire de ceux-ci, ainsi qu'une partie administrateur, utilisée par les cantinières des écoles et par le personnel de RPC afin de réserver les repas pour les enfants et les employés.<br>L'objectif du stage est de concevoir en partenariat avec le service informatique une solution d'application mobile compatible Android et IOS pour la partie destinée aux parents d'élèves de ce site web.",
        techs: ["Flutter", "Laravel"],
        tasks: [
            "Développement du front-end de l'application mobile",
            "Développement du back-end de l'application mobile",
            "Développement d'une API pour récupérer les données"
        ],
        skills: [
            "1ère expérience professionnelle",
            "Découverte des frameworks Flutter et Laravel",
            "Gain en autonomie"
        ]
    },
    {
        id: 2,
        title: "EnseignantSup",
        description: "L'objectif de ce projet était de développer une application permettant d'aider les professeurs à l'évaluation qualitative des dossiers Parcoursup.",
        details: "Un dossier Parcoursup est un dossier contenant toutes les informations sur un étudiant lorsqu'il postule dans un établissement d'études supérieures, dont ses notes, ses appréciations et sa lettre de motivation. Pour un professeur, évaluer les dossiers Parcoursup des étudiants est un processus qui peut être long et fastidieux.<br>L'objectif principal de ce projet était de créer une application permettant d'aider les professeurs à l'évaluation qualitative des dossiers Parcoursup, principalement en se basant sur une étude sur les statistiques du dossier tel que les occurrences de certains mots ou bien la longueur en nombre de mots de la lettre de motivation.",
        techs: ["Node.js", "Electron", "Javascript", "HTML", "CSS"],
        tasks: [
            "Développement du front-end de l'application",
            "Implémentation d'un lecteur de PDF avec PDF.js"
        ],
        skills: [
            "Développement de mes connaissances en Javascript",
            "Découverte du framework Electron",
            "Amélioration de mes capacités à travailler en équipe"
        ]
    },
    {
        id: 3,
        title: "GASC",
        description: "GASC est l'application web de gestion des activités scolaires et culturelles utilisée par l'IUT. Ma mission sur ce projet fut d'améliorer le site web et son API.",
        details: "L'IUT Lyon dispose d'un site web de gestion des activités sportives permettant aux étudiants de s'inscrire à des activités et aux professeurs de gérer les absences, donner des notes, etc.",
        techs: ["Symfony", "API Platform"],
        tasks: [
            "Mise à niveau de l'application de Symfony 6.3 à 6.4",
            "Développement d'un éditeur WYSIWYG avec l'aide de CKEditor5",
            "Amélioration du système d'absences du site",
            "Reprogrammation du planning",
            "Amélioration de l'API"
        ],
        skills: [
            "Découverte d'API Platform",
            "Approfondissement de mes compétences en Symfony"
        ]
    },
    {
        id: 4,
        title: "Festival de Cannes",
        description: "Durant ma 3ème année de BUT j'ai eu l'occasion de reprendre une application de gestion du festival de Cannes développée par un groupe d'anciens étudiants et de la transformer en un site web complet.",
        details: "Le Festival de Cannes, créé en 1946, est un événement majeur du cinéma. Chaque année, pendant deux semaines du mois de mai, il rassemble des professionnels du monde entier.<br>Une équipe a été chargée de développer une application séparée en 3 modules : un module VIP pour faciliter la communication entre le staff et les VIPs, un module Hébergement pour permettre aux hébergeurs de lister leurs services et assigner les VIPs à un hébergement, et un module Planning pour mettre en place un planning de séances de visionnage.<br>Cependant, l'application était très incomplète, avec des modules non-fonctionnels et des fonctionnalités manquantes. L'objectif de notre équipe était donc d'améliorer l'application existante, notamment en fusionnant les 3 modules en une seule application.",
        techs: ["Symfony", "SASS", "intl"],
        tasks: [
            "Migration du projet de PHP natif vers Symfony",
            "Fusion des modules de l'application",
            "Incorporation de SASS dans l'application web"
        ],
        skills: [
            "Amélioration de mes compétences en Symfony",
            "Amélioration de mes capacités à travailler en équipe"
        ]
    }
]

const route = useRoute()
const router = useRouter()

const project = computed(() =>
    projects.find(p => p.id === Number(route.params.id))
)

const goBack = () => router.push('/projets')
</script>

<template>
    <section class="side-section mt-lg-5 p-5" v-if="project">

        <!-- Bouton retour -->
        <button @click="goBack" class="back-btn d-flex align-items-center gap-2 mb-5">
            <i class="bi bi-arrow-left"></i>
            <span>Retour aux projets</span>
        </button>

        <!-- En-tête -->
        <div class="d-flex align-items-center mb-2">
            <div class="line me-3"></div>
            <span class="text-uppercase tracking-wider small fw-bold text-info">Projet</span>
        </div>

        <h2 class="project-detail-title mb-4">
            <span class="hash">#</span> {{ project.title }}
        </h2>

        <!-- Badges techs -->
        <div class="d-flex flex-wrap gap-2 mb-5">
            <span v-for="tech in project.techs" :key="tech" class="badge info-badge">
                {{ tech }}
            </span>
        </div>

        <!-- Description détaillée -->
        <div class="detail-block mb-5">
            <div class="block-header d-flex align-items-center gap-2 mb-3">
                <i class="bi bi-file-text text-info"></i>
                <span class="block-label text-uppercase fw-bold small">Description</span>
            </div>
            <p class="detail-text" v-html="project.details"></p>
        </div>

        <!-- Séparateur -->
        <div class="detail-divider mb-5"></div>

        <!-- Tâches réalisées -->
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

        <!-- Séparateur -->
        <div class="detail-divider mb-5"></div>

        <!-- Compétences acquises -->
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

    <!-- Fallback projet introuvable -->
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

/* Bouton retour */
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

/* Blocs de contenu */
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

/* Liste personnalisée */
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

/* Séparateur */
.detail-divider {
    height: 1px;
    background: rgba(255, 255, 255, 0.07);
}

/* Badges */
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

/* Ligne décorative */
.line {
    width: 30px;
    height: 2px;
    background-color: #4cc9f0;
}
</style>