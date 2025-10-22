<script setup>
import './assets/main.css'
import {ref} from 'vue'

const header = ref('Shopping List App')
const items = ref({
  'item-1': {id: 1, label: "10 party hats"},
  'item-2': {id: 2, label: "2 board games"},
  'item-3': {id: 3, label: "20 cups}"}
})
const newItem = ref('')
const newItemPriority = ref('low')
const iceCreamFavors = ref([])
</script>


<template>
  <div>
    <h1>{{ header }}</h1>
    <input type="text" v-model.trim="newItem" placeholder="Add an item"/>
    Priority:
    <select v-model="newItemPriority">
      <option value="low">low</option>
      <option value="high">high</option>
    </select>
    <br>
    {{ newItemPriority}}
    <br>
    <label>
      <input type="checkbox" value="vanilla" v-model="iceCreamFavors">
      Vanilla
    </label>
    <label>
      <input type="checkbox" value="chocolate" v-model="iceCreamFavors">
      Chocolate
    </label>
    <label>
      <input type="checkbox" value="strawberry" v-model="iceCreamFavors">
      Strawberry
    </label>
    <br>
    {{ iceCreamFavors}}
    <ul>
      <li v-for="({id, label},key) in items" :key="id">
        {{ label }}
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
