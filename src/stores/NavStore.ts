import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNavStore = defineStore('navStore', () => {
    const isNavOpen = ref<Boolean>(false)
    const dropdownMenuActive = ref<Boolean>(false)

    // methods
    function closeIsNavOPen() {
        setTimeout(() => {
            dropdownMenuActive.value = false
            isNavOpen.value = false
        }, 400)
    }

    function toggleIsNavOpen() {
        if (dropdownMenuActive.value === true) {
            setTimeout(() => {
                dropdownMenuActive.value = false
                isNavOpen.value = false
            }, 500)
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
