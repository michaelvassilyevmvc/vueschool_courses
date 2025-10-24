<script setup>
import './assets/main.css'
import {ref} from 'vue'

const header = ref('Shopping List App')
const editing = ref(false)
const items = ref([
  {id: 1, label: "10 party hats", purchased: true, highPriority: false},
  {id: 2, label: "2 board games", purchased: true, highPriority: false},
  {id: 3, label: "20 cups", purchased: false, highPriority: true}
])
const newItem = ref('')
// const newItemPriority = ref('low')
const newItemHighPriority = ref(false)
const saveItem = () => {
  items.value.push({
    id: items.value.length + 1,
    label: newItem.value,
    highPriority: newItemHighPriority.value});
  newItem.value = ''
  newItemHighPriority.value = false

}
const doEdit = (e) => {
  editing.value = e
  newItem.value = ""
  newItemHighPriority.value = false
}
const togglePurchased = (item) => {
  item.purchased = !item.purchased;
}
</script>


<template>
  <div class="header">
    <h1>{{ header }}</h1>
    <button v-if="editing" @click="doEdit(false)" class="btn">Cancel</button>
    <button v-else @click="doEdit(true)" class="btn btn-primary">Add Item</button>

  </div>
  <div>
    <form class="add-item-form"
          v-if="editing"
          @submit.prevent="saveItem"
    >
      <input
          type="text"
          v-model.trim="newItem"
          placeholder="Add an item"/>
<!--      <select v-model="newItemPriority">-->
<!--        <option value="low">low</option>-->
<!--        <option value="high">high</option>-->
<!--      </select>-->
      <label style="padding-right:20px; display: inline-block;"> High Priority:
      <input type="checkbox" v-model="newItemHighPriority" />
      </label>
      <br>
      <button type="submit"
              class="btn btn-primary">Save Item
      </button>
    </form>
    <ul>
      <li v-for="item in items"
          @click="togglePurchased(item)"
          :key="item.id"
          class="static-class"
          :class="{strikeout: item.purchased, priority: item.highPriority}"
      >
        {{ item.label }}
      </li>
    </ul>
    <p v-if="!items.length">
      Nothing to see here
    </p>
  </div>
</template>

<style scoped>

</style>
