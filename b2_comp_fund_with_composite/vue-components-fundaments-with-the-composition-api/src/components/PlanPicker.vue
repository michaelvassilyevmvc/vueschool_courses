<template>
  <div ref="plansWrapper" class="plans">
    {{ count }}
    <CoffeePlan
      v-for="plan in plans"
      :name="plan"
      :key="plan"
      :selected="plan === selectedCoffeePlan"
      @selected="handleSelectedCoffeePlan(plan)"
    />
  </div>
</template>

<script setup>
import CoffeePlan from '@/components/CoffeePlan.vue'

import { ref, onUnmounted } from 'vue'
const plans = ref(['The Single', 'The Curious', 'The Addict', 'The Hacker'])

const selectedCoffeePlan = ref()
function handleSelectedCoffeePlan(name) {
  selectedCoffeePlan.value = name
}

const count = ref(0)
const interval = setInterval(() => {
  count.value++
  console.log('hello')
}, 1000)
const plansWrapper = ref()

onUnmounted(() => {
  console.log('Bye bye plan picker')
  clearInterval(interval)
})
</script>

<style scoped></style>
