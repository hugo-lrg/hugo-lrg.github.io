<template>
    <section class="about-section mt-lg-5 p-3">
        <div class="d-flex align-items-center mb-4">
            <div class="line me-3"></div>
            <span class="text-uppercase tracking-wider small fw-bold text-info">Présentation</span>
        </div>

        <p class="lead-text mb-4">
            Actuellement étudiant en <strong>BUT Informatique</strong> à l'IUT Lyon 1,
            j'apprends à développer des applications web complètes et intuitives.
        </p>

        <div class="description-text">
            <p>
                Durant mes études de développement <strong>web full-stack</strong>, j'ai eu l'occasion d'utiliser des
                frameworks robustes tels que <span class="tech-tag">Symfony</span>, <span
                    class="tech-tag">Laravel</span> et <span class="tech-tag">Vue.js</span>.
            </p>
            <p>
                Je possède également des compétences en <strong>développement mobile</strong> avec le framework
                <span class="tech-tag">Flutter</span>, une technologie que j'ai pu apprendre
                lors de mon stage de deuxième année pour créer une application multiplateforme
                dans le cadre d'un stage de 10 semaines (voir Ropach dans la section Projets).
            </p>
        </div>
    </section>
</template>

<style scoped>
/* L'accroche avec la ligne bleue */
.line {
    width: 40px;
    height: 2px;
    background-color: #4cc9f0;
}

.tracking-wider {
    letter-spacing: 0.15em;
}

/* Texte principal plus grand et plus clair */
.lead-text {
    font-size: 1.25rem;
    color: #f8f9fa;
    line-height: 1.6;
    font-weight: 300;
}

/* Texte secondaire avec une opacité maîtrisée */
.description-text {
    font-size: 1.05rem;
    color: #adb5bd;
    /* Un gris plus lisible que white-50 */
    line-height: 1.8;
}

/* Mise en avant subtile des technologies */
.tech-tag {
    color: #e0e1dd;
    font-weight: 500;
    border-bottom: 1px solid rgba(76, 201, 240, 0.3);
}

strong {
    color: #ffffff;
    font-weight: 600;
}

/* Animation d'entrée simple */
.about-section {
    animation: fadeIn 0.8s ease-out;
    background: linear-gradient(rgba(0, 19, 11, 0.5), rgba(0, 37, 85, 0));

}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>