import { ref, computed } from 'vue'

export const useCycleList = (list: any[]) => {
  const activeIndex = ref(0)
  const state = computed(() => list[activeIndex.value])

  function next() {
    if (activeIndex.value === list.length - 1) {
      activeIndex.value = 0
    } else {
      activeIndex.value++
    }
  }
  function prev() {
    if (activeIndex.value === 0) {
      activeIndex.value = list.length - 1
    } else {
      activeIndex.value--
    }
  }

  function go(index: number) {

    activeIndex.value = list.length - 1 >= index  ? index : index - activeIndex.value - 1
  }

  return {
    state,
    prev,
    next,
    go
  }
}
