<script setup>
// import GithubCard from '@/components/GithubCard.vue'
import AppAlert from '@/components/AppAlert.vue'

function handleClose() {
  console.log('closed')
}
</script>

<template>
  <div class="p-5">
    <AppAlert @close="handleClose" type="info">New software update available.</AppAlert>
    <AppAlert @close="handleClose" type="success">Your purchase has been confirmed!</AppAlert>
    <AppAlert @close="handleClose" type="warning">Warning: Invalid email address!</AppAlert>
    <AppAlert @close="handleClose" type="error" >Error! Task failed successfully</AppAlert>
  </div>

  <!--  GithubCard-->
  <!--  <GithubCard username="danielkellyio"></GithubCard>-->
  <!--  <GithubCard username="hootlex"></GithubCard>-->
  <!--  <GithubCard username="MooseSaeed"></GithubCard>-->
</template>

<style scoped></style>
