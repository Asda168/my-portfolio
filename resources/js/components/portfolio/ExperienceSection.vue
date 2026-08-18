<script setup lang="ts">
import { Briefcase, Calendar, MapPin } from '@lucide/vue';

const experience = [
    {
        role: 'Full Stack Developer',
        org: 'CheckinMe Cambodia',
        period: 'Nov 2024 – Present',
        location: null,
        description:
            'Developing and maintaining enterprise backend APIs, database management, frontend components, and user dashboard features.',
        current: true,
    },
    {
        role: 'Practical Training',
        org: 'VP Star Company',
        period: null,
        location: 'Phnom Penh',
        description:
            'Hands-on practical development training and production workflows.',
        current: false,
    },
    {
        role: 'STEM Practical Training',
        org: 'BELTEI International School',
        period: 'Apr 2023 – May 2023',
        location: 'Phnom Penh',
        description:
            'Practical training in technology education and programming concepts.',
        current: false,
    },
];
</script>

<template>
    <section id="experience" class="scroll-mt-20 px-6 py-24 sm:py-32">
        <div class="mx-auto max-w-4xl">
            <p
                class="text-sm font-semibold tracking-widest text-cyan-400 uppercase"
            >
                Experience
            </p>
            <h2 class="mt-2 text-3xl font-bold text-neutral-50 sm:text-4xl">
                Where I've worked
            </h2>

            <ol class="mt-14 space-y-10 border-l border-white/10 pl-8">
                <li v-for="job in experience" :key="job.org" class="relative">
                    <span
                        class="absolute top-1 -left-[calc(2rem+5px)] flex h-3 w-3 items-center justify-center rounded-full"
                        :class="
                            job.current
                                ? 'bg-cyan-400 shadow-[0_0_0_4px_rgba(34,211,238,0.2)]'
                                : 'bg-neutral-600'
                        "
                    />

                    <div
                        class="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-cyan-400/40 hover:bg-white/[0.05]"
                    >
                        <div
                            class="flex flex-wrap items-center gap-2 text-xs text-neutral-500"
                        >
                            <span
                                v-if="job.period"
                                class="inline-flex items-center gap-1.5"
                            >
                                <Calendar class="h-3.5 w-3.5" />
                                {{ job.period }}
                            </span>
                            <span
                                v-if="job.location"
                                class="inline-flex items-center gap-1.5"
                            >
                                <MapPin class="h-3.5 w-3.5" />
                                {{ job.location }}
                            </span>
                        </div>

                        <h3
                            class="mt-2 flex items-center gap-2 text-lg font-semibold text-neutral-100"
                        >
                            <Briefcase class="h-4 w-4 text-purple-400" />
                            {{ job.role }}
                        </h3>
                        <p class="text-sm font-medium text-cyan-400">
                            {{ job.org }}
                        </p>
                        <p
                            class="mt-3 text-sm leading-relaxed text-neutral-400"
                        >
                            {{ job.description }}
                        </p>
                    </div>
                </li>
            </ol>
        </div>
    </section>
</template>
