import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useNavStore = defineStore('navStore', () => {
    const isNavOpen = ref<Boolean>(false)
    const dropdownMenuActive = ref<Boolean>(false)
    return {
        // things to return
        isNavOpen,
        dropdownMenuActive,
    }
})
