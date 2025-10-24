<script setup>
import FancyButton from '@/components/FancyButton.vue'
</script>

<template>
  <div class="content">
    <FancyButton>
      <template #icon="{hover}">
        {{ hover }}
      </template>
      <template #default> Submit </template>
    </FancyButton>
  </div>
</template>

<style scoped></style>
