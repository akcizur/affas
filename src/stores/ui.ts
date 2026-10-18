import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useUIStore = defineStore('ui', () => {
  const leftSidebarOpen = ref(false)
  const rightSidebarOpen = ref(false)
  const toggleLeft = () => { leftSidebarOpen.value = !leftSidebarOpen.value }
  const toggleRight = () => { rightSidebarOpen.value = !rightSidebarOpen.value }
  const closeAll = () => { leftSidebarOpen.value = false; rightSidebarOpen.value = false }
  return { leftSidebarOpen, rightSidebarOpen, toggleLeft, toggleRight, closeAll }
})
