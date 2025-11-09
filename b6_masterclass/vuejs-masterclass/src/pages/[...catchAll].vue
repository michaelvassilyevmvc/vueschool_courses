<script setup lang="ts">
import AppErrorPage from '@/components/AppError/AppErrorPage.vue'</script>

<template>
  <AppErrorPage />
</template>
<script setup lang="ts">
import { useErrorStore } from '@/stores/error'

useErrorStore().setError({ error: 'Page not found', customCode: 404 })
</script>
