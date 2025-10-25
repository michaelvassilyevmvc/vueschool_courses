<script setup lang="ts">
import { useCycleList } from '@/composables/useCycleList.ts'
// import { ref } from 'vue'
// const animals = ref(['Dog', 'Cat', 'Bird', 'Iguana'])
// const { state, prev, next } = useCycleList(animals)
const { state, prev, next } = useCycleList(['Dog', 'Cat', 'Bird', 'Iguana'])

</script>

<template>
  <div>
    {{ state }}
    <br />
      <button @click="prev">Previous</button>
      <button @click="next">Next</button>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
