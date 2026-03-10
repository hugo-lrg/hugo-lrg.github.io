<script setup lang="ts">
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'simple-icons-font/font/simple-icons.css'
</script>
<link rel="stylesheet" href="assets/css/style.scss">
</link>

<template>
  <div class="main-container">
    <div class="container pt-5">
      <div class="row gy-5">

        <main class="col-lg-4 col-md-12 py-lg-5 d-flex flex-column min-vh-lg-80">
          <div class="sticky-lg-top">
            <p class="subtext fw-bold mb-1">COMPUTER SCIENCE STUDENT</p>
            <h1 class="display-4 fw-bold mb-4">Hugo <span class="text-white">LERGES</span></h1>

            <nav class="nav flex-column gap-3 mt-5 custom-nav">
              <router-link to="/" class="nav-link-custom">À PROPOS</router-link>
              <router-link to="/parcours" class="nav-link-custom">PARCOURS</router-link>
              <router-link to="/competences" class="nav-link-custom">COMPÉTENCES</router-link>
              <router-link to="/projets" class="nav-link-custom">PROJETS</router-link>
            </nav>
          </div>

          <div class="mt-auto pt-5 social-links d-flex gap-4">
            <a href="#" class="social-icon"><i class="bi bi-github"></i></a>
            <a href="#" class="social-icon"><i class="bi bi-linkedin"></i></a>
            <a href="#" class="social-icon"><i class="bi bi-envelope-at-fill"></i></a>
          </div>
        </main>

        <aside class="col-lg-8 col-md-12 py-lg-5 ps-lg-5 position-relative border-custom-left">
          <router-view />

          <footer class="mt-5 pt-5 border-top border-secondary border-opacity-25 text-white-50 small">
            <div class="d-flex justify-content-between align-items-center">
              <p class="mb-0">© 2026 — Hugo Lerges</p>
              <div class="tech-stack-mini d-flex gap-3">
                <i class="si si-symfony" title="Symfony"></i>

                <i class="si si-javascript" title="JavaScript"></i>

                <i class="si si-flutter" title="Flutter"></i>

                <i class="si si-laravel" title="Laravel"></i>
              </div>
            </div>
          </footer>
        </aside>

      </div>
    </div>
  </div>
</template>

<style scoped>
/* Le dégradé sur toute la hauteur */
.main-container {
  background: radial-gradient(circle at top right, #1b263b, #0d1b2a);
  min-height: 100vh;
  color: #e0e1dd;
  /* Un blanc légèrement cassé pour moins fatiguer les yeux */
  font-family: 'Inter', sans-serif;
  /* Assure-toi d'avoir une police moderne */
  position: relative;
  overflow: hidden;
  /* Pour que le cercle ne dépasse pas */
}

.main-container::after {
  content: "";
  position: absolute;
  bottom: -150px;
  right: -150px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(76, 201, 240, 0.15) 0%, transparent 70%);
  pointer-events: none;
  /* Ne bloque pas les clics */
}

/* Style "Turquoise" plus pro */
.subtext {
  color: #4cc9f0;
  letter-spacing: 2px;
  font-size: 0.9rem;
}

/* Navigation personnalisée */
.custom-nav .nav-link-custom {
  color: #778da9;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
}

/* Effet de barre horizontale au survol */
.nav-link-custom::before {
  content: "";
  width: 0;
  height: 2px;
  background-color: #4cc9f0;
  margin-right: 0;
  transition: all 0.3s ease;
}

.nav-link-custom:hover,
.router-link-active {
  color: #ffffff !important;
  padding-left: 10px;
}

.router-link-active::before {
  width: 30px;
  margin-right: 15px;
}

/* Supprime les marges du body au niveau global (si nécessaire dans App.vue) */
:global(body) {
  margin: 0;
  background-color: #0d1b2a;
}

@media (min-width: 992px) {

  /* S'applique uniquement sur Desktop */
  aside {
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    /* Ligne très fine et subtile */
    /* Optionnel : ajoutez un léger halo pour un effet néon */
    box-shadow: -1px 0 0 rgba(76, 201, 240, 0.1);
  }
}

/* Sur mobile, on peut enlever la bordure ou la mettre en haut */
@media (max-width: 991px) {
  aside {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: 2rem;
    padding-top: 3rem;
  }
}

.tech-stack-mini i {
  font-size: 1.2rem;
  color: #778da9;
  /* Gris bleuté par défaut pour rester discret */
  transition: all 0.3s ease;
  cursor: pointer;
}

/* Couleurs officielles au survol */
.si-symfony:hover {
  color: #ffffff !important;
}

.si-javascript:hover {
  color: #f7df1e !important;
}

.si-flutter:hover {
  color: #02569b !important;
}

.si-laravel:hover {
  color: #ff2d20 !important;
}

/* Petit effet de mouvement */
.tech-stack-mini i:hover {
  transform: translateY(-3px);
}
</style>