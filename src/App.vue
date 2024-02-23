<script setup lang="ts">
import Navbar from './components/Navbar/Navbar.vue'
// import HelloWorld from './components/HelloWorld.vue'

const logged = false;

</script>

<template>
  <div>
    <header v-if="logged">
      <Navbar />
    </header>
    <main>
      <router-view>

      </router-view>
    </main>
    <footer>

    </footer>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>

</style>
