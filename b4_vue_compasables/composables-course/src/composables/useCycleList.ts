import { ref, computed, toRef, type MaybeRefOrGetter } from 'vue'

export const useCycleList = (list: MaybeRefOrGetter<any[]>) => {
  const activeIndex = ref(0)
  const _list = toRef(list)
  const state = computed({
    get() {
      return _list.value[activeIndex.value]
    },
    set(value) {
      const foundIndex = _list.value.indexOf(value)
      if (foundIndex >= 0) {
        activeIndex.value = foundIndex
      } else {
        throw Error(
          `${value} is not found in the useCycleList list and cannot be set with state.value === ''`,
        )
      }
    },
  })

  function next() {
    if (activeIndex.value === _list.value.length - 1) {
      activeIndex.value = 0
    } else {
      activeIndex.value++
    }
  }
  function prev() {
    if (activeIndex.value === 0) {
      activeIndex.value = _list.value.length - 1
    } else {
      activeIndex.value--
    }
  }

  return {
    state,
    prev,
    next,
    go: () => {},
  }
}
