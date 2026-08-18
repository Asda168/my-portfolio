<script setup lang="ts">
import { Moon, Sun } from '@lucide/vue';
import { onMounted, ref } from 'vue';
import { useAppearance } from '@/composables/useAppearance';

const { updateAppearance } = useAppearance();

const isDark = ref(true);

onMounted(() => {
    isDark.value = document.documentElement.classList.contains('dark');
});

function toggle() {
    isDark.value = !isDark.value;
    updateAppearance(isDark.value ? 'dark' : 'light');
}
</script>

<template>
    <button
        type="button"
        role="switch"
        :aria-checked="isDark"
        aria-label="Toggle light and dark theme"
        class="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-black/10 text-neutral-500 transition-colors hover:border-cyan-400/40 hover:text-cyan-500 dark:border-white/10 dark:text-neutral-400 dark:hover:text-cyan-400"
        @click="toggle"
    >
        <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="-rotate-90 scale-0 opacity-0"
            enter-to-class="rotate-0 scale-100 opacity-100"
            leave-active-class="absolute transition duration-300 ease-in"
            leave-from-class="rotate-0 scale-100 opacity-100"
            leave-to-class="rotate-90 scale-0 opacity-0"
            mode="out-in"
        >
            <Sun v-if="isDark" key="sun" class="h-4.5 w-4.5" />
            <Moon v-else key="moon" class="h-4.5 w-4.5" />
        </Transition>
    </button>
</template>
