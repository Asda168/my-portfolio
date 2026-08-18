<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue';
import BrandIcon from '@/components/portfolio/BrandIcon.vue';

const year = new Date().getFullYear();

const socials = [
    { name: 'github' as const, label: 'GitHub', href: 'https://github.com' },
    {
        name: 'linkedin' as const,
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/asda-ouk-27039336a?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    },
    {
        name: 'telegram' as const,
        label: 'Telegram',
        href: 'https://t.me/Asda_Ourk',
    },
];

const links = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
];
</script>

<template>
    <footer class="px-6 pb-10">
        <div
            v-reveal="{ variant: 'scale' }"
            class="relative mx-auto flex max-w-6xl flex-col items-center gap-6 overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-br from-cyan-500/10 via-black/[0.02] to-purple-500/10 px-8 py-14 text-center dark:border-white/10 dark:via-white/[0.02]"
        >
            <div
                class="bg-grid absolute inset-0 opacity-60"
                aria-hidden="true"
            />
            <h2
                class="relative text-2xl font-bold text-neutral-900 sm:text-3xl dark:text-neutral-50"
            >
                Got an idea? Let's ship it.
            </h2>
            <p
                class="relative max-w-md text-sm text-neutral-600 dark:text-neutral-400"
            >
                I'm currently open to new opportunities and freelance
                collaborations. Reach out and let's talk about your project.
            </p>
            <a
                v-magnetic
                href="#contact"
                class="group relative inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-3 text-sm font-semibold text-neutral-950 shadow-lg shadow-cyan-500/20 transition-transform hover:scale-105"
            >
                Start a conversation
                <ArrowUpRight
                    class="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
            </a>
        </div>

        <div
            class="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-6 border-t border-black/5 pt-8 sm:flex-row dark:border-white/5"
        >
            <p class="text-sm text-neutral-500">
                &copy; {{ year }} Ourk Asda. Built with Laravel &amp; Vue.
            </p>

            <ul class="flex flex-wrap items-center justify-center gap-6">
                <li v-for="link in links" :key="link.href">
                    <a
                        :href="link.href"
                        class="text-sm text-neutral-500 transition-colors hover:text-cyan-500 dark:hover:text-cyan-400"
                    >
                        {{ link.label }}
                    </a>
                </li>
            </ul>

            <div class="flex gap-3">
                <a
                    v-for="social in socials"
                    :key="social.name"
                    v-magnetic
                    :href="social.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    :aria-label="social.label"
                    class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 p-2 text-neutral-500 transition-colors hover:border-cyan-400/40 hover:text-cyan-500 dark:border-white/10 dark:hover:text-cyan-400"
                >
                    <BrandIcon :name="social.name" />
                </a>
            </div>
        </div>
    </footer>
</template>
