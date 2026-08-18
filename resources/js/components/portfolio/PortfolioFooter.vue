<script setup lang="ts">
import BrandIcon from '@/components/portfolio/BrandIcon.vue';

const year = new Date().getFullYear();

const socials = [
    { name: 'github' as const, label: 'GitHub', href: 'https://github.com' },
    {
        name: 'linkedin' as const,
        label: 'LinkedIn',
        href: 'https://linkedin.com',
    },
    { name: 'telegram' as const, label: 'Telegram', href: 'https://t.me' },
];
</script>

<template>
    <footer class="border-t border-white/5 px-6 py-10">
        <div
            class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row"
        >
            <p class="text-sm text-neutral-500">
                &copy; {{ year }} Ourk Asda. All rights reserved.
            </p>

            <div class="flex gap-3">
                <a
                    v-for="social in socials"
                    :key="social.name"
                    :href="social.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    :aria-label="social.label"
                    class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 p-2 text-neutral-500 transition-colors hover:border-cyan-400/40 hover:text-cyan-400"
                >
                    <BrandIcon :name="social.name" />
                </a>
            </div>
        </div>
    </footer>
</template>
