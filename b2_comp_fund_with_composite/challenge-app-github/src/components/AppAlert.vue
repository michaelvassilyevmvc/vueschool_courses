<template>
  <div role="alert" :class="`alert ${alertType}`" v-if="!closed">
    <component :is="icon"></component>
    <span><slot></slot></span>
    <button @click="close">&times;</button>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import IconInfo from '@/components/icons/IconInfo.vue'
import IconError from '@/components/icons/IconError.vue'
import IconWarning from '@/components/icons/IconWarning.vue'
import IconSuccess from '@/components/icons/IconSuccess.vue'

const props = defineProps({
  type: {
    type: String,
    default: 'info',
  },
})

const emit = defineEmits(['closed'])

const closed = ref(false)
function close() {
  closed.value = true
  emit('closed')
}

const alertType = computed(() => {
  return {
    info: 'alert-info',
    warning: 'alert-warning',
    error: 'alert-error',
    success: 'alert-success',
  }[props.type]
})

const icon = computed(() => {
  return {
    info: IconInfo,
    warning: IconWarning,
    error: IconError,
    success: IconSuccess,
  }[props.type]
})
</script>

<style scoped></style>
