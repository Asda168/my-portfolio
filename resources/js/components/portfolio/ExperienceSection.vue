<script setup lang="ts">
import { Briefcase, Calendar, MapPin } from '@lucide/vue';
import SectionHeading from '@/components/portfolio/SectionHeading.vue';

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
    <section id="experience" class="scroll-mt-24 px-6 py-24 sm:py-32">
        <div class="mx-auto max-w-4xl">
            <SectionHeading eyebrow="Experience" title="Where I've worked" />

            <ol
                class="mt-14 space-y-10 border-l border-black/10 pl-8 dark:border-white/10"
            >
                <li
                    v-for="(job, i) in experience"
                    :key="job.org"
                    v-reveal="{ variant: 'left', delay: i * 120 }"
                    class="relative"
                >
                    <span
                        class="absolute top-1 -left-[calc(2rem+5px)] flex h-3 w-3 items-center justify-center rounded-full"
                        :class="
                            job.current
                                ? 'bg-cyan-400 shadow-[0_0_0_4px_rgba(34,211,238,0.2)]'
                                : 'bg-neutral-400 dark:bg-neutral-600'
                        "
                    >
                        <span
                            v-if="job.current"
                            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60"
                        />
                    </span>

                    <div
                        class="rounded-2xl border border-black/10 bg-black/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-black/[0.05] hover:shadow-lg hover:shadow-cyan-500/5 dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.05]"
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
                            <span
                                v-if="job.current"
                                class="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-2 py-0.5 font-semibold text-cyan-600 dark:text-cyan-400"
                            >
                                Current
                            </span>
                        </div>

                        <h3
                            class="mt-2 flex items-center gap-2 text-lg font-semibold text-neutral-900 dark:text-neutral-100"
                        >
                            <Briefcase
                                class="h-4 w-4 text-purple-500 dark:text-purple-400"
                            />
                            {{ job.role }}
                        </h3>
                        <p
                            class="text-sm font-medium text-cyan-500 dark:text-cyan-400"
                        >
                            {{ job.org }}
                        </p>
                        <p
                            class="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400"
                        >
                            {{ job.description }}
                        </p>
                    </div>
                </li>
            </ol>
        </div>
    </section>
</template>
