<script setup lang="ts">
import { useWindowScroll, useWindowSize } from '@vueuse/core';
import { computed } from 'vue';

const { y } = useWindowScroll();
const { height: windowHeight } = useWindowSize();

const progress = computed(() => {
    if (typeof document === 'undefined') {
        return 0;
    }

    const scrollable =
        document.documentElement.scrollHeight - windowHeight.value;

    if (scrollable <= 0) {
        return 0;
    }

    return Math.min(100, Math.max(0, (y.value / scrollable) * 100));
});
</script>

<template>
    <div
        class="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent"
        aria-hidden="true"
    >
        <div
            class="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 transition-[width] duration-150 ease-out"
            :style="{ width: `${progress}%` }"
        />
    </div>
</template>
