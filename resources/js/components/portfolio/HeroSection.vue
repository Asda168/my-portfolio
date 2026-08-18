<script setup lang="ts">
import {
    ArrowUpRight,
    Briefcase,
    ChevronDown,
    Download,
    Mail,
    MapPin,
    Phone,
    Sparkles,
} from '@lucide/vue';
import type { ComponentPublicInstance } from 'vue';
import BrandIcon from '@/components/portfolio/BrandIcon.vue';
import { useCountUp } from '@/composables/useCountUp';
import { useTypewriter } from '@/composables/useTypewriter';

const { text: role } = useTypewriter({
    words: [
        'Full Stack Developer',
        'Laravel Engineer',
        'Vue.js Developer',
        'REST API Builder',
    ],
});

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

const stats = [
    { value: useCountUp(1), suffix: '+', label: 'Years experience' },
    { value: useCountUp(3), suffix: '', label: 'Enterprise projects' },
    { value: useCountUp(10), suffix: '+', label: 'Technologies' },
];

function bindStatRef(
    stat: (typeof stats)[number],
    el: Element | ComponentPublicInstance | null,
) {
    stat.value.elRef.value = el instanceof HTMLElement ? el : null;
}
</script>

<template>
    <section
        id="home"
        class="relative flex min-h-screen scroll-mt-24 items-center overflow-hidden px-6 pt-8 pb-24"
    >
        <div class="bg-grid absolute inset-0" aria-hidden="true" />
        <div
            class="animate-blob absolute top-1/4 -left-32 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]"
            aria-hidden="true"
        />
        <div
            class="animate-blob-delayed absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-purple-500/20 blur-[120px]"
            aria-hidden="true"
        />

        <div
            class="relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12"
        >
            <div
                class="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left"
            >
                <div
                    v-reveal="{ variant: 'up' }"
                    class="mb-8 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-4 py-1.5 text-sm text-neutral-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-neutral-300"
                >
                    <Sparkles
                        class="h-3.5 w-3.5 text-cyan-500 dark:text-cyan-400"
                    />
                    Full Stack Developer based in Phnom Penh, Cambodia
                    <span class="relative flex h-1.5 w-1.5">
                        <span
                            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"
                        />
                        <span
                            class="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"
                        />
                    </span>
                </div>

                <h1
                    v-reveal="{ variant: 'up', delay: 80 }"
                    class="text-5xl font-extrabold tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl dark:text-neutral-50"
                >
                    Ourk Asda
                </h1>

                <p
                    v-reveal="{ variant: 'up', delay: 140 }"
                    class="text-gradient mt-4 h-10 text-2xl font-semibold sm:text-3xl"
                >
                    {{ role }}<span class="animate-pulse text-cyan-400">|</span>
                </p>

                <p
                    v-reveal="{ variant: 'up', delay: 200 }"
                    class="mt-6 max-w-xl text-base text-neutral-600 sm:text-lg dark:text-neutral-400"
                >
                    Full Stack Developer specializing in building modern web
                    applications, robust backend APIs, and intuitive user
                    experiences.
                </p>

                <div
                    v-reveal="{ variant: 'up', delay: 260 }"
                    class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
                >
                    <a
                        v-magnetic
                        href="#projects"
                        class="group inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-3 text-sm font-semibold text-neutral-950 shadow-lg shadow-cyan-500/20 transition-transform hover:scale-105 sm:w-auto"
                    >
                        View Work / Projects
                        <ArrowUpRight
                            class="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                    </a>
                    <a
                        v-magnetic
                        href="#contact"
                        class="w-full rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:border-cyan-400/50 hover:text-cyan-500 sm:w-auto dark:border-white/15 dark:text-neutral-100 dark:hover:text-cyan-400"
                    >
                        Get In Touch
                    </a>
                    <a
                        href="/cv.pdf"
                        download
                        class="inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-neutral-600 transition-colors hover:text-neutral-900 sm:w-auto dark:text-neutral-400 dark:hover:text-neutral-100"
                    >
                        <Download class="h-4 w-4" />
                        Download CV
                    </a>
                </div>

                <div
                    v-reveal="{ variant: 'up', delay: 320 }"
                    class="mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
                >
                    <a
                        href="mailto:oukasda@gmail.com"
                        class="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.02] px-4 py-2 text-xs text-neutral-700 transition-colors hover:border-cyan-400/40 hover:text-cyan-500 sm:text-sm dark:border-white/10 dark:bg-white/[0.02] dark:text-neutral-300 dark:hover:text-cyan-400"
                    >
                        <Mail class="h-3.5 w-3.5" />
                        oukasda@gmail.com
                    </a>
                    <a
                        href="tel:+85590704447"
                        class="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.02] px-4 py-2 text-xs text-neutral-700 transition-colors hover:border-cyan-400/40 hover:text-cyan-500 sm:text-sm dark:border-white/10 dark:bg-white/[0.02] dark:text-neutral-300 dark:hover:text-cyan-400"
                    >
                        <Phone class="h-3.5 w-3.5" />
                        +855 90 704 447
                    </a>
                    <span
                        class="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.02] px-4 py-2 text-xs text-neutral-700 sm:text-sm dark:border-white/10 dark:bg-white/[0.02] dark:text-neutral-300"
                    >
                        <MapPin class="h-3.5 w-3.5" />
                        Phnom Penh, Cambodia
                    </span>
                </div>

                <div
                    v-reveal="{ variant: 'up', delay: 380 }"
                    class="mt-8 flex gap-3"
                >
                    <a
                        v-for="social in socials"
                        :key="social.name"
                        :href="social.href"
                        target="_blank"
                        rel="noopener noreferrer"
                        :aria-label="social.label"
                        class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black/[0.03] p-2.5 text-neutral-600 transition-all hover:-translate-y-0.5 hover:border-cyan-400/40 hover:text-cyan-500 dark:border-white/10 dark:bg-white/[0.03] dark:text-neutral-400 dark:hover:text-cyan-400"
                    >
                        <BrandIcon :name="social.name" />
                    </a>
                </div>

                <dl
                    v-reveal="{ variant: 'up', delay: 440 }"
                    class="mt-12 grid w-full grid-cols-3 gap-4 border-t border-black/10 pt-8 sm:max-w-md lg:max-w-none dark:border-white/10"
                >
                    <div
                        v-for="stat in stats"
                        :key="stat.label"
                        :ref="(el) => bindStatRef(stat, el)"
                    >
                        <dt
                            class="text-2xl font-bold text-neutral-900 sm:text-3xl dark:text-neutral-50"
                        >
                            {{ stat.value.value.value }}{{ stat.suffix }}
                        </dt>
                        <dd class="mt-1 text-xs text-neutral-500 sm:text-sm">
                            {{ stat.label }}
                        </dd>
                    </div>
                </dl>
            </div>

            <div class="order-1 flex justify-center lg:order-2 lg:justify-end">
                <div
                    v-reveal="{ variant: 'scale', delay: 120 }"
                    class="relative"
                >
                    <div
                        class="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/30 via-transparent to-purple-500/30 blur-2xl"
                        aria-hidden="true"
                    />

                    <div
                        v-tilt
                        class="relative aspect-[4/5] w-64 overflow-hidden rounded-[2rem] border border-black/10 shadow-2xl shadow-cyan-500/10 sm:w-80 dark:border-white/10"
                    >
                        <img
                            src="/ourk_asda_profile.jpg"
                            alt="Portrait of Ourk Asda"
                            class="h-full w-full object-cover object-top"
                            width="640"
                            height="800"
                        />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent dark:from-neutral-950/40"
                            aria-hidden="true"
                        />
                    </div>

                    <div
                        class="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl border border-black/10 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-sm sm:-left-10 dark:border-white/10 dark:bg-neutral-900/90"
                    >
                        <span
                            class="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20"
                        >
                            <Briefcase
                                class="h-4 w-4 text-cyan-500 dark:text-cyan-400"
                            />
                        </span>
                        <span class="text-left">
                            <span
                                class="block text-sm font-semibold text-neutral-900 dark:text-neutral-100"
                                >1+ Years</span
                            >
                            <span class="block text-xs text-neutral-500"
                                >Experience</span
                            >
                        </span>
                    </div>

                    <div
                        class="absolute -top-4 -right-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/90 px-3.5 py-2 text-xs font-medium text-neutral-800 shadow-xl backdrop-blur-sm dark:border-white/10 dark:bg-neutral-900/90 dark:text-neutral-200"
                    >
                        <span class="relative flex h-2 w-2">
                            <span
                                class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"
                            />
                            <span
                                class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"
                            />
                        </span>
                        Open to work
                    </div>
                </div>
            </div>
        </div>

        <a
            href="#about"
            aria-label="Scroll to About section"
            class="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-neutral-400 transition-colors hover:text-cyan-500 dark:text-neutral-500 dark:hover:text-cyan-400"
        >
            <span class="h-8 w-px overflow-hidden bg-black/10 dark:bg-white/10">
                <span class="block h-3 w-px animate-bounce bg-current" />
            </span>
            <ChevronDown class="h-4 w-4" />
        </a>
    </section>
</template>
