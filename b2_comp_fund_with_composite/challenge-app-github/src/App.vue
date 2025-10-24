<script setup>
// import GithubCard from '@/components/GithubCard.vue'
import AppAlert from '@/components/AppAlert.vue'
import { ref } from 'vue'

const alerts = ref([
  {id:1, type: 'info', message: 'New software update available.'},
  {id:2, type: 'success', message: 'Your purchase has been confirmed!'},
  {id:3, type: 'warning', message: 'Warning: Invalid email address!'},
  {id:4, type: 'error', message: 'Error! Task failed successfully'},
])
// function handleClose() {
//   console.log(this.alerts.value)
//   console.log(id)
//   // alerts.value = alerts.value.filter(alert => alert.value.id !== id)
//   // console.log(alerts.value)
// }
</script>

<template>
  <div class="p-5">
    <AppAlert v-for="alert in alerts"
              @closed="alerts = alerts.filter(a => a.id !== alert.id)"
              :key="alert.id"
              :type="alert.type">
      {{alert.message}}
    </AppAlert>
  </div>
  <pre>{{ alerts }}</pre>


<!--  GithubCard-->
<!--  <GithubCard username="danielkellyio"></GithubCard>-->
<!--  <GithubCard username="hootlex"></GithubCard>-->
<!--  <GithubCard username="MooseSaeed"></GithubCard>-->
</template>

<style scoped></style>
