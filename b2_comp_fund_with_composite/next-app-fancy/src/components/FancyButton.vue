<template>
  <button @mouseenter="hover = true" @mouseleave="hover = false">
    <slot name="icon" :hover="hover" >Default Value</slot>
    <slot></slot>
  </button>
  {{hover}}
</template>

<script setup>
import { ref } from 'vue'
const hover = ref(true)
</script>

<style scoped></style>
