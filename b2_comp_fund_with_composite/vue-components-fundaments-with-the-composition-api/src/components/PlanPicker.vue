<template>
  <div class="plans">
    {{ selectedCoffeePlan}}
    <CoffeePlan
      v-for="plan in plans"
      :name="plan"
      :key="plan"
      :selected="plan === selectedCoffeePlan"
      @click="handleSelectedCoffeePlan(plan)"
    />
  </div>
</template>

<script setup>
import CoffeePlan from '@/components/CoffeePlan.vue'

import { ref } from 'vue'
const plans = ref(['The Single', 'The Curious', 'The Addict', 'The Hacker'])

const selectedCoffeePlan = ref()
function handleSelectedCoffeePlan(name){
  selectedCoffeePlan.value = name
}
</script>

<style scoped></style>
