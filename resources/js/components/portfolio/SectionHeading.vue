<script setup lang="ts">
withDefaults(
    defineProps<{
        eyebrow: string;
        title: string;
        description?: string;
        align?: 'left' | 'center';
    }>(),
    { align: 'left', description: undefined },
);
</script>

<template>
    <div
        v-reveal
        :class="align === 'center' ? 'mx-auto max-w-2xl text-center' : ''"
    >
        <span
            class="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-xs font-semibold tracking-widest text-cyan-600 uppercase dark:border-white/10 dark:bg-white/[0.03] dark:text-cyan-400"
        >
            <span
                class="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
            />
            {{ eyebrow }}
        </span>
        <h2
            class="mt-4 text-3xl font-bold text-neutral-900 sm:text-4xl dark:text-neutral-50"
        >
            {{ title }}
        </h2>
        <p
            v-if="description"
            class="mt-4 max-w-2xl text-sm text-neutral-500"
            :class="align === 'center' ? 'mx-auto' : ''"
        >
            {{ description }}
        </p>
    </div>
</template>
