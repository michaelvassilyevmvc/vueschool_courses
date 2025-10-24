<template>
  <div class="plan" :class="{ 'active-plan': selected }">
    <div class="description">
      <span class="title">{{ name }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    default: 'Default Plan',
  },
  selected: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped></style>
