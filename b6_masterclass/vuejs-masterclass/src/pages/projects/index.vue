<template>
  <DataTable v-if="projects" :columns="columnsWithCollabs" :data="projects" />
</template>

<script setup lang="ts">
import { columns } from '@/utils/tableColumns/projectsColumns'
import { useProjectsStore } from '@/stores/loaders/projects'
import { useCollabs } from '@/composables/collabs'

usePageStore().pageData.title = 'Projects'

const projectsLoader = useProjectsStore()
const { projects } = storeToRefs(projectsLoader)
const { getProjects } = projectsLoader

await getProjects()

const { getGroupedCollabs, groupedCollabs } = useCollabs()
await getGroupedCollabs(projects.value)

console.log('TEST:: ', groupedCollabs.value)

const columnsWithCollabs = columns(groupedCollabs)

</script>

<style scoped></style>
