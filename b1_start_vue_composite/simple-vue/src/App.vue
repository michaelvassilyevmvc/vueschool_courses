<script setup>
import './assets/main.css'
import {ref} from 'vue'

const header = ref('Shopping List App')
const items = ref({
  'item-1': {id: 1, label: "10 party hats"},
  'item-2': {id: 2, label: "2 board games"},
  'item-3': {id: 3, label: "20 cups}"}
})
</script>

<template>
  <div class="shadow-deep">
    <h1>{{ header }}</h1>
    <ul>
      <li v-for="({id, label},key) in items" :key="id">
        {{ key }} - {{ label }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.shadow-deep {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15),
  0 4px 6px rgba(0, 0, 0, 0.1);
  background: #fff;
  border-radius: 10px;
  padding: 20px;
}

li {
  list-style: none;
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
