<template>
  <div>
    <h1>Projects Page</h1>
    <RouterLink :to="{name:'/'}">Go to home</RouterLink>
    <ul>
      <li v-for="project in projects" :key="project.id">
        {{project}}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'
import type { Tables } from '../../../database/types'

const projects = ref<Tables<'projects'>[] | null>(null);

;(async () => {
  const { data, error } = await supabase.from('projects').select()
  if (error) {
    console.log(error)
  }
  projects.value = data
  console.log('projects', projects)
})()
</script>

<style scoped></style>
