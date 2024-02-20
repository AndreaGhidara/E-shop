<script setup lang="ts">
import SkeletonCard from '../SkeletonCard/SkeletonCard.vue'

</script>

<template>
    <div class="container mx-auto my-5">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div v-for="n in 9" class="flex justify-center items-center">
                <SkeletonCard />
            </div>
            
        </div>
    </div>
</template>


<style scoped></style>