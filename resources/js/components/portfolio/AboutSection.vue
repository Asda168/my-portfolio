<script setup lang="ts">
import { MessageSquare, Puzzle, Server, Monitor, Wrench } from '@lucide/vue';
import SectionHeading from '@/components/portfolio/SectionHeading.vue';

const skillGroups = [
    {
        title: 'Backend',
        icon: Server,
        proficiency: 88,
        skills: ['PHP', 'Laravel', 'Python', 'Flask', 'REST APIs'],
    },
    {
        title: 'Frontend',
        icon: Monitor,
        proficiency: 82,
        skills: [
            'Vue.js',
            'JavaScript',
            'Tailwind CSS',
            'Bootstrap',
            'HTML5/CSS3',
        ],
    },
    {
        title: 'Tools & Databases',
        icon: Wrench,
        proficiency: 78,
        skills: ['Git', 'Docker', 'MySQL', 'Redis', 'Laragon'],
    },
];

const competencies = [
    { label: 'Team Communication', icon: MessageSquare },
    { label: 'Problem Solving', icon: Puzzle },
    { label: 'Full-Stack Development', icon: Server },
];
</script>

<template>
    <section id="about" class="scroll-mt-24 px-6 py-24 sm:py-32">
        <div class="mx-auto max-w-6xl">
            <SectionHeading eyebrow="About me" title="Get to know me" />

            <div class="mt-12 grid gap-6 lg:grid-cols-5">
                <div
                    v-reveal="{ variant: 'left' }"
                    class="flex flex-col justify-between rounded-3xl border border-black/10 bg-gradient-to-br from-black/[0.03] to-transparent p-8 lg:col-span-2 dark:border-white/10 dark:from-white/[0.03]"
                >
                    <p
                        class="text-base leading-relaxed text-neutral-600 dark:text-neutral-400"
                    >
                        I am a passionate Software Engineering student and Full
                        Stack Developer based in Phnom Penh. With practical
                        experience building enterprise platforms and frontend
                        interfaces, I focus on writing scalable code, clean
                        architecture, and responsive user designs.
                    </p>

                    <div class="mt-8 flex flex-wrap gap-3">
                        <span
                            v-for="competency in competencies"
                            :key="competency.label"
                            class="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm text-neutral-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-neutral-300"
                        >
                            <component
                                :is="competency.icon"
                                class="h-4 w-4 text-purple-500 dark:text-purple-400"
                            />
                            {{ competency.label }}
                        </span>
                    </div>
                </div>

                <div class="grid gap-6 sm:grid-cols-3 lg:col-span-3">
                    <div
                        v-for="(group, i) in skillGroups"
                        :key="group.title"
                        v-reveal="{ variant: 'up', delay: i * 100 }"
                        v-tilt
                        class="group flex flex-col rounded-3xl border border-black/10 bg-black/[0.03] p-6 transition-colors hover:border-cyan-400/40 hover:bg-black/[0.05] dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.05]"
                    >
                        <div
                            class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 transition-transform duration-300 group-hover:scale-110"
                        >
                            <component
                                :is="group.icon"
                                class="h-5 w-5 text-cyan-500 dark:text-cyan-400"
                            />
                        </div>
                        <h3
                            class="font-semibold text-neutral-900 dark:text-neutral-100"
                        >
                            {{ group.title }}
                        </h3>

                        <div class="mt-3 flex flex-wrap gap-2">
                            <span
                                v-for="skill in group.skills"
                                :key="skill"
                                class="rounded-md border border-black/10 bg-black/[0.03] px-2.5 py-1 text-xs text-neutral-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-neutral-300"
                            >
                                {{ skill }}
                            </span>
                        </div>

                        <div class="mt-6">
                            <div
                                class="flex items-center justify-between text-xs text-neutral-500"
                            >
                                <span>Proficiency</span>
                                <span>{{ group.proficiency }}%</span>
                            </div>
                            <div
                                class="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-black/10 dark:bg-white/10"
                            >
                                <div
                                    class="skill-fill h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                                    :style="{
                                        '--fill': `${group.proficiency}%`,
                                    }"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
