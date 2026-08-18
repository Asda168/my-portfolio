<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3';
import { ArrowUpRight, Download, Menu, X } from '@lucide/vue';
import { useWindowScroll } from '@vueuse/core';
import { computed, ref, watch } from 'vue';
import ThemeToggle from '@/components/portfolio/ThemeToggle.vue';
import { useScrollSpy } from '@/composables/useScrollSpy';
import { dashboard } from '@/routes';

const links = [
    { href: '#about', id: 'about', label: 'About' },
    { href: '#experience', id: 'experience', label: 'Experience' },
    { href: '#education', id: 'education', label: 'Education' },
    { href: '#projects', id: 'projects', label: 'Projects' },
    { href: '#contact', id: 'contact', label: 'Contact' },
];

const mobileOpen = ref(false);
const page = usePage();

const { y } = useWindowScroll();
const scrolled = computed(() => y.value > 24);

const { activeId } = useScrollSpy(['home', ...links.map((l) => l.id)]);

watch(mobileOpen, (open) => {
    document.documentElement.classList.toggle('overflow-hidden', open);
});
</script>

<template>
    <div class="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <nav
            class="mx-auto flex max-w-5xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300"
            :class="
                scrolled
                    ? 'border-black/10 bg-white/80 shadow-lg shadow-black/[0.04] backdrop-blur-xl dark:border-white/10 dark:bg-neutral-950/75'
                    : 'border-transparent bg-white/40 backdrop-blur-md dark:bg-neutral-950/30'
            "
        >
            <a
                href="#home"
                class="flex items-center gap-2.5 text-base font-bold tracking-tight text-neutral-900 dark:text-neutral-50"
                @click="mobileOpen = false"
            >
                <img
                    src="/ourk_asda_profile.jpg"
                    alt=""
                    class="h-8 w-8 rounded-full border border-black/10 object-cover object-top dark:border-white/10"
                />
                <span
                    >Ourk<span class="text-cyan-500 dark:text-cyan-400">.</span
                    >Asda</span
                >
            </a>

            <ul class="hidden items-center gap-1 md:flex">
                <li v-for="link in links" :key="link.href">
                    <a
                        :href="link.href"
                        class="relative block rounded-full px-3.5 py-2 text-sm font-medium transition-colors"
                        :class="
                            activeId === link.id
                                ? 'text-neutral-900 dark:text-neutral-50'
                                : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100'
                        "
                    >
                        {{ link.label }}
                        <span
                            class="absolute inset-x-3 -bottom-0.5 h-px origin-center scale-x-0 bg-gradient-to-r from-cyan-400 to-purple-500 transition-transform duration-300"
                            :class="{ 'scale-x-100': activeId === link.id }"
                        />
                    </a>
                </li>
            </ul>

            <div class="hidden items-center gap-2 md:flex">
                <Link
                    v-if="page.props.auth.user"
                    :href="dashboard()"
                    class="rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:border-cyan-400/50 hover:text-cyan-500 dark:border-white/10 dark:text-neutral-200 dark:hover:text-cyan-400"
                >
                    Dashboard
                </Link>
                <a
                    href="/cv.pdf"
                    download
                    class="inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                >
                    <Download class="h-4 w-4" />
                    Resume
                </a>
                <ThemeToggle />
                <a
                    v-magnetic
                    href="#contact"
                    class="group inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-4 py-2 text-sm font-semibold text-neutral-950 shadow-md shadow-cyan-500/20 transition-transform hover:scale-105"
                >
                    Let's talk
                    <ArrowUpRight
                        class="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                </a>
            </div>

            <div class="flex items-center gap-1.5 md:hidden">
                <ThemeToggle />
                <button
                    type="button"
                    class="relative flex h-10 w-10 items-center justify-center text-neutral-700 dark:text-neutral-300"
                    :aria-expanded="mobileOpen"
                    aria-label="Toggle navigation menu"
                    @click="mobileOpen = !mobileOpen"
                >
                    <Menu
                        class="absolute h-5 w-5 transition-all duration-200"
                        :class="
                            mobileOpen
                                ? 'scale-0 rotate-45 opacity-0'
                                : 'scale-100 rotate-0 opacity-100'
                        "
                    />
                    <X
                        class="absolute h-5 w-5 transition-all duration-200"
                        :class="
                            mobileOpen
                                ? 'scale-100 rotate-0 opacity-100'
                                : 'scale-0 -rotate-45 opacity-0'
                        "
                    />
                </button>
            </div>
        </nav>

        <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 -translate-y-3"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-3"
        >
            <div
                v-if="mobileOpen"
                class="mx-auto mt-2 max-w-5xl overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-4 shadow-xl backdrop-blur-xl md:hidden dark:border-white/10 dark:bg-neutral-950/95"
            >
                <ul class="flex flex-col gap-1">
                    <li
                        v-for="(link, i) in links"
                        :key="link.href"
                        class="reveal reveal-up reveal-in"
                        :style="{ transitionDelay: `${i * 40}ms` }"
                    >
                        <a
                            :href="link.href"
                            class="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-colors"
                            :class="
                                activeId === link.id
                                    ? 'bg-black/[0.04] text-cyan-600 dark:bg-white/[0.06] dark:text-cyan-400'
                                    : 'text-neutral-700 hover:bg-black/[0.03] dark:text-neutral-300 dark:hover:bg-white/[0.04]'
                            "
                            @click="mobileOpen = false"
                        >
                            {{ link.label }}
                        </a>
                    </li>
                </ul>
                <div
                    class="mt-3 flex gap-2 border-t border-black/10 pt-3 dark:border-white/10"
                >
                    <a
                        href="/cv.pdf"
                        download
                        class="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-black/10 px-4 py-2.5 text-sm font-medium text-neutral-700 dark:border-white/10 dark:text-neutral-200"
                    >
                        <Download class="h-4 w-4" />
                        Resume
                    </a>
                    <a
                        href="#contact"
                        class="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-4 py-2.5 text-sm font-semibold text-neutral-950"
                        @click="mobileOpen = false"
                    >
                        Let's talk
                    </a>
                </div>
            </div>
        </Transition>
    </div>
    <div class="h-20" aria-hidden="true" />
</template>
