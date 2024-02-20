<script setup lang="ts">
import Footer from '../components/Footer/Footer.vue'
import ProductTopList from '../components/ProductTopList/ProductTopList.vue'
import Banner from '../components/Banner/Banner.vue'
import Hero from '../components/Hero/Hero.vue'

</script>


<template>
    <section>
        <div class="py-10">
            <Hero />
        </div>
        <div class="py-10">
            <Banner />
        </div>
        <div class="py-10">
            <ProductTopList />
        </div>
        <div class="pt-10">
            <Footer></Footer>
        </div>
    </section>
</template>


<style scoped></style>