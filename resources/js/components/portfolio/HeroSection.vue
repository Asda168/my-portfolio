<script setup lang="ts">
import {
    ChevronDown,
    Download,
    Mail,
    MapPin,
    Phone,
    Sparkles,
} from '@lucide/vue';
import { useTypewriter } from '@/composables/useTypewriter';

const { text: role } = useTypewriter({
    words: [
        'Full Stack Developer',
        'Laravel Engineer',
        'Vue.js Developer',
        'REST API Builder',
    ],
});
</script>

<template>
    <section
        id="home"
        class="relative flex min-h-screen scroll-mt-20 flex-col items-center justify-center overflow-hidden px-6 py-32 text-center"
    >
        <div
            class="absolute top-1/4 -left-32 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]"
            aria-hidden="true"
        />
        <div
            class="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-purple-500/20 blur-[120px]"
            aria-hidden="true"
        />

        <div class="relative mx-auto max-w-3xl">
            <div
                class="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-neutral-300"
            >
                <Sparkles class="h-3.5 w-3.5 text-cyan-400" />
                Full Stack Developer based in Phnom Penh, Cambodia
            </div>

            <h1
                class="text-5xl font-extrabold tracking-tight text-neutral-50 sm:text-6xl lg:text-7xl"
            >
                Ourk Asda
            </h1>

            <p
                class="mt-4 h-10 bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl"
            >
                {{ role }}<span class="animate-pulse text-cyan-400">|</span>
            </p>

            <p
                class="mx-auto mt-6 max-w-2xl text-base text-neutral-400 sm:text-lg"
            >
                Full Stack Developer specializing in building modern web
                applications, robust backend APIs, and intuitive user
                experiences.
            </p>

            <div
                class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
                <a
                    href="#projects"
                    class="w-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-3 text-sm font-semibold text-neutral-950 shadow-lg shadow-cyan-500/20 transition-transform hover:scale-105 sm:w-auto"
                >
                    View Work / Projects
                </a>
                <a
                    href="#contact"
                    class="w-full rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-neutral-100 transition-colors hover:border-cyan-400/50 hover:text-cyan-400 sm:w-auto"
                >
                    Get In Touch
                </a>
                <a
                    href="/cv.pdf"
                    download
                    class="inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-neutral-400 transition-colors hover:text-neutral-100 sm:w-auto"
                >
                    <Download class="h-4 w-4" />
                    Download CV
                </a>
            </div>

            <div class="mt-12 flex flex-wrap items-center justify-center gap-3">
                <a
                    href="mailto:oukasda@gmail.com"
                    class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-xs text-neutral-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-400 sm:text-sm"
                >
                    <Mail class="h-3.5 w-3.5" />
                    oukasda@gmail.com
                </a>
                <a
                    href="tel:+85590704447"
                    class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-xs text-neutral-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-400 sm:text-sm"
                >
                    <Phone class="h-3.5 w-3.5" />
                    +855 90 704 447
                </a>
                <span
                    class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-xs text-neutral-300 sm:text-sm"
                >
                    <MapPin class="h-3.5 w-3.5" />
                    Phnom Penh, Cambodia
                </span>
            </div>
        </div>

        <a
            href="#about"
            aria-label="Scroll to About section"
            class="absolute bottom-10 text-neutral-500 transition-colors hover:text-cyan-400 motion-safe:animate-bounce"
        >
            <ChevronDown class="h-6 w-6" />
        </a>
    </section>
</template>
