import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNavStore = defineStore('navStore', () => {
    const isNavOpen = ref<Boolean>(false)
    const dropdownMenuActive = ref<Boolean>(false)

    // methods
    function closeIsNavOPen() {
        dropdownMenuActive.value = false
        isNavOpen.value = false
    }

    function toggleIsNavOpen() {
        if (dropdownMenuActive.value === true) {
            dropdownMenuActive.value = false
            isNavOpen.value = false
        } else {
            dropdownMenuActive.value = true
            isNavOpen.value = true
        }
    }
    return {
        // things to return
        isNavOpen,
        dropdownMenuActive,
        toggleIsNavOpen,
        closeIsNavOPen,
    }
})
