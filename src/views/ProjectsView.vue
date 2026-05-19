<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const openProject = (id: number) => router.push(`/projets/${id}`)

interface Project {
    id: number;
    title: string;
    description: string;
    details: string;
    techs: string[];
    tasks: string[];
    skills: string[];
}

const projects = ref<Project[]>([
    {
        id: 1,
        title: "Ropach mobile",
        description: "Ropach est une application web de gestion des cantines scolaires développée par la société DAHST. \
        Mon objectif a été de développer une solution mobile pour cette application.",
        details: "Ce projet a été réalisé dans le cadre d'un stage de 10 semaines entre le 14 avril 2025 et le 20 Juin 2025 dans l'entreprise DAHST (holding des sociétés RPC et SER).<br>\
        En 2016, RPC a développé un logiciel de gestion des cantines scolaires appelé Ropach. Cette application permet d'automatiser et de faciliter la réservation des repas, le pointage des présences ainsi que la facturation des familles. Elle est utilisée par 180 clients et plus de 30 000 familles.<br>\
        Ropach comprend 2 parties : une partie destinée aux parents d'élèves, leur permettant d'ajouter leurs enfants sur le site et de les inscrire aux prestations de l'établissement scolaire de ceux-ci, ainsi qu'une partie administrateur, utilisée par les cantinières des écoles et par le personnel de RPC afin de réserver les repas pour les enfants et les employés.<br>\
        L'objectif du stage est de concevoir en partenariat avec le service informatique une solution d'application mobile compatible Android et IOS pour la partie destinée aux parents d'élèves de ce site web, par suite des demandes de ceux-ci. Le but principal de cette mission est donc d'améliorer les services fournis par RPC en permettant aux parents d'accéder plus facilement à cette application.",
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
        description: "L'objectif de ce projet était de développer une application permettant d'aider les professeurs à \
        l'évaluation qualitative des dossiers Parcoursup.",
        details: "Un dossier Parcoursup est un dossier contenant toutes les informations sur un étudiant lorsqu'il postule dans un établissement d'études supérieures, dont ses notes, ses appréciations et sa lettre de motivation. Pour un professeur, évaluer les dossiers Parcoursup des étudiants est un processus qui peut être long et fastidieux.<br>\
        L'objectif principal de ce projet était de créer une application permettant d'aider les professeurs à l'évaluation qualitative des dossiers Parcoursup, principalement en se basant sur une étude sur les statistiques du dossier tel que les occurrences de certains mots ou bien la longueur en nombre de mots de la lettre de motivation. Cet outil aurait pu également utiliser une IA pour attribuer les notes en fonction des scores des dossiers.",
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
        description: "GASC est l'application web de gestion des activités scolaires et culturelles utilisée par l'IUT. \
        Ma mission sur ce projet fut d'améliorer le site web et son API.",
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
        description: "Durant ma 3ème année de BUT j'ai eu l'occasion de reprendre une application de gestion du festival \
        de Cannes développée par un groupe d'anciens étudiants et de la transformer en un site web complet.",
        details: "Le Festival de Cannes, créé en 1946, est un événement majeur du cinéma. Chaque année, pendant deux semaines du mois de mai, il rassemble des professionnels du monde entier. Organiser un tel événement nécessite une gestion précise.<br>\
        Une équipe a été chargée de développer une application séparée en 3 modules : un module VIP pour faciliter la communication entre le staff et les VIPs, un module Hébergement pour permettre aux hébergeurs de lister leurs services et assigner les VIPs à un hébergement, et un module Planning pour mettre en place un planning de séances de visionnage.<br>\
        Cependant, l'application était très incomplète, avec des modules non-fonctionnels et des fonctionnalités manquantes. L'objectif de notre équipe était donc d'améliorer l'application existante, notamment en fusionnant les 3 modules en une seule application.",
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

                            <div class="d-flex flex-wrap gap-2 mb-3">
                                <span v-for="tech in project.techs" :key="tech" class="badge info-badge">
                                    {{ tech }}
                                </span>
                            </div>
                            <a @click="openProject(project.id)">Voir plus</a>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </section>
</template>