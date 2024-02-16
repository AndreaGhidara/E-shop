<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="bg-red-400">
    <h1>count is {{ count }}</h1>

    <button class="btn-primary" @click="count++">
      {{ msg ? msg : "Button" }}
    </button>
  </div>
</template>

<style scoped></style>
