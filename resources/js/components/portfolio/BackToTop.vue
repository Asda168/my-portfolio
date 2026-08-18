<script setup lang="ts">
import { ArrowUp } from '@lucide/vue';
import { useWindowScroll } from '@vueuse/core';
import { computed } from 'vue';

const { y } = useWindowScroll();
const visible = computed(() => y.value > 640);

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<template>
    <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 translate-y-3 scale-90"
        enter-to-class="opacity-100 translate-y-0 scale-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0 scale-100"
        leave-to-class="opacity-0 translate-y-3 scale-90"
    >
        <button
            v-if="visible"
            type="button"
            aria-label="Back to top"
            v-magnetic
            class="fixed right-6 bottom-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/90 text-neutral-700 shadow-xl shadow-black/5 backdrop-blur-sm transition-colors hover:border-cyan-400/50 hover:text-cyan-500 sm:right-8 sm:bottom-8 dark:border-white/10 dark:bg-neutral-900/90 dark:text-neutral-200 dark:hover:text-cyan-400"
            @click="scrollToTop"
        >
            <ArrowUp class="h-5 w-5" />
        </button>
    </Transition>
</template>
