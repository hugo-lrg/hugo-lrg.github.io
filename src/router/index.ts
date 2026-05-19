import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import ExperienceView from '../views/ExperienceView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import SkillsView from '@/views/SkillsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: AboutView
    },
    {
      path: '/parcours',
      name: 'experience',
      component: ExperienceView
    },
    {
      path: '/competences',
      name: 'skills',
      component: SkillsView
    },
    {
      path: '/projets',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/projets/:id',
      name: 'ProjectDetails',
      component: () => import('@/views/ProjectDetailsView.vue')
    }
  ]
})

export default router
