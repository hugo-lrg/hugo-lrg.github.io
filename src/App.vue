<script setup lang="ts"></script>

<template>

  <div class="container container-fluid mt-5">
    <div class="row">
      <main class="col-md-4 py-4">
        <p>Computer science student</p>
        <h1>Hugo LERGES</h1>
        <nav class="nav flex-column mt-5">
          <router-link to="/">À propos</router-link>
          <router-link to="/parcours">Parcours</router-link>
          <router-link to="/projets">Projets</router-link>
        </nav>
      </main>

      <aside class="col-md-8 py-4 bg-white">
        <router-view />
      </aside>
    </div>


  </div>
</template>

<style scoped></style>