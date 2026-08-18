<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3';
import { Download, Menu, X } from '@lucide/vue';
import { ref } from 'vue';
import { dashboard } from '@/routes';

const links = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
];

const mobileOpen = ref(false);
const page = usePage();
</script>

<template>
    <header
        class="sticky top-0 z-50 border-b border-white/5 bg-neutral-950/70 backdrop-blur-lg"
    >
        <nav
            class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        >
            <a
                href="#home"
                class="text-lg font-bold tracking-tight text-neutral-50"
                @click="mobileOpen = false"
            >
                Ourk<span class="text-cyan-400">.</span>Asda
            </a>

            <ul class="hidden items-center gap-8 md:flex">
                <li v-for="link in links" :key="link.href">
                    <a
                        :href="link.href"
                        class="text-sm font-medium text-neutral-400 transition-colors hover:text-cyan-400"
                    >
                        {{ link.label }}
                    </a>
                </li>
            </ul>

            <div class="hidden items-center gap-3 md:flex">
                <Link
                    v-if="page.props.auth.user"
                    :href="dashboard()"
                    class="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-neutral-200 transition-colors hover:border-cyan-400/50 hover:text-cyan-400"
                >
                    Dashboard
                </Link>
                <a
                    href="/cv.pdf"
                    download
                    class="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-neutral-200 transition-colors hover:border-cyan-400/50 hover:text-cyan-400"
                >
                    <Download class="h-4 w-4" />
                    Resume
                </a>
            </div>

            <button
                type="button"
                class="text-neutral-300 md:hidden"
                :aria-expanded="mobileOpen"
                aria-label="Toggle navigation menu"
                @click="mobileOpen = !mobileOpen"
            >
                <Menu v-if="!mobileOpen" class="h-6 w-6" />
                <X v-else class="h-6 w-6" />
            </button>
        </nav>

        <div
            v-if="mobileOpen"
            class="border-t border-white/5 bg-neutral-950 px-6 py-4 md:hidden"
        >
            <ul class="flex flex-col gap-4">
                <li v-for="link in links" :key="link.href">
                    <a
                        :href="link.href"
                        class="block text-sm font-medium text-neutral-300 hover:text-cyan-400"
                        @click="mobileOpen = false"
                    >
                        {{ link.label }}
                    </a>
                </li>
                <li>
                    <a
                        href="/cv.pdf"
                        download
                        class="inline-flex items-center gap-2 text-sm font-medium text-cyan-400"
                    >
                        <Download class="h-4 w-4" />
                        Download Resume
                    </a>
                </li>
            </ul>
        </div>
    </header>
</template>
