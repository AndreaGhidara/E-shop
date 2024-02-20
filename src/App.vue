<script setup lang="ts">
import Navbar from './components/Navbar/Navbar.vue'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <header>
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
