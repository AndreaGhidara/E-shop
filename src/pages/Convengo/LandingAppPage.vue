<script setup lang="ts">
import { ref } from 'vue';
const showFillEffect = ref(false);

const scrollToBottom = () => {
    showFillEffect.value = true;
    setTimeout(() => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }, 100);
}
</script>

<template>
    <div class="w-full bg-red-300 h-screen flex justify-center items-center relative gap-20">
        <div class="flex flex-col justify-center items-center">
            <div class="-translate-y-32">LOGO</div>
            <div class="w-[200px] h-[200px] bg-green-300"></div>
        </div>
        <div class="w-full h-[100px] bg-blue-400 flex justify-center absolute bottom-0" :class="showFillEffect">
            <button class="btn btn-primary -translate-y-5" @click="scrollToBottom">
                Welcome to Convengo
            </button>
        </div>
        <transition name="fill-effect">
            <div v-if="showFillEffect" class="fill-effect">
                <div>
                    Prova
                </div>
            </div>
        </transition>
    </div>
</template>

<style scoped>
.fill-effect {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: #60A5FA;
    z-index: 999;
    animation: fillEffectAnimation 1.5s ease-in-out forwards;
}

@keyframes fillEffectAnimation {
    0% {
        height: 0;
    }

    100% {
        height: 100%;
    }
}
</style>