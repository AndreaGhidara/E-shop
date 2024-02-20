<script setup lang="ts">
import CardShop from '../CardShop/CardShop.vue'
import SkeletonCard from '../SkeletonCard/SkeletonCard.vue'

const logged = false

</script>

<template>
    <div class="container mx-auto my-5">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

            
                <div v-if="!logged" v-for="n in 9" class="flex justify-center items-center">
                    <SkeletonCard />
                </div>
            
                <div v-else v-for="n in 9" class="flex justify-center items-center">
                    <CardShop />
                </div>
            

        </div>
    </div>
</template>


<style scoped></style>