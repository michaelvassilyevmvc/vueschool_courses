<template>
  <div v-if="user" class="card card-side bg-base-100 shadow-sm mx-auto p-10">
    <figure>
      <img :src="user.avatar_url" :alt="user.login" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ user.name }}</h2>
        <p>Followers: {{ user.followers }}</p>
        <p>Followers: {{ user.following }}</p>
      <div class="card-actions justify-end">
        <a :href="user.html_url" class="btn btn-primary">View profile</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import axios from 'axios'

const props = defineProps({
  userName: {
    type: String,
    required: true,
  },
})

const user = ref()

onMounted(() => {
  axios
    .get(userLink.value)
    .then(async (response) => {
      user.value = await response.data
    })
    .catch((error) => {
      console.erro(error)
    })
})

const userLink = computed(() => {
  return `https://api.github.com/users/${props.userName}`
})
</script>

<style scoped></style>
