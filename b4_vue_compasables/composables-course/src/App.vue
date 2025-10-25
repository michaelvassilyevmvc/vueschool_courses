<script setup lang="ts">
import { useCycleList } from '@/composables/useCycleList.ts'
import { ref } from 'vue'
const goIndex = ref(0)
const { state, prev, next,go } = useCycleList(['Dog', 'Cat', 'Bird', 'Iguana'])

const goTo = () => go(goIndex.value)
</script>

<template>
  <div>
    {{ state }}
    <br />
      <button @click="prev">Previous</button>
      <button @click="next">Next</button>
      <input type="number" @keyup.enter.prevent="goTo" v-model="goIndex" />
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
