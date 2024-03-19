import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('generalStore', {
    state: () => {
        return { count: 0 }
    },
    actions: {
        increment() {
            this.count++
        },
    },
})