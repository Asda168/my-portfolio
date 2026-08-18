<script setup lang="ts">
import { MessageSquare, Puzzle, Server, Monitor, Wrench } from '@lucide/vue';

const skillGroups = [
    {
        title: 'Backend',
        icon: Server,
        skills: ['PHP', 'Laravel', 'Python', 'Flask', 'REST APIs'],
    },
    {
        title: 'Frontend',
        icon: Monitor,
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
    <section id="about" class="scroll-mt-20 px-6 py-24 sm:py-32">
        <div class="mx-auto max-w-6xl">
            <p
                class="text-sm font-semibold tracking-widest text-cyan-400 uppercase"
            >
                About Me
            </p>
            <h2 class="mt-2 text-3xl font-bold text-neutral-50 sm:text-4xl">
                Get to know me
            </h2>

            <div class="mt-12 grid gap-12 lg:grid-cols-5">
                <div class="lg:col-span-2">
                    <p class="text-base leading-relaxed text-neutral-400">
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
                            class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-neutral-300"
                        >
                            <component
                                :is="competency.icon"
                                class="h-4 w-4 text-purple-400"
                            />
                            {{ competency.label }}
                        </span>
                    </div>
                </div>

                <div class="grid gap-6 sm:grid-cols-3 lg:col-span-3">
                    <div
                        v-for="group in skillGroups"
                        :key="group.title"
                        class="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-cyan-400/40 hover:bg-white/[0.05]"
                    >
                        <div
                            class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20"
                        >
                            <component
                                :is="group.icon"
                                class="h-5 w-5 text-cyan-400"
                            />
                        </div>
                        <h3 class="mb-3 font-semibold text-neutral-100">
                            {{ group.title }}
                        </h3>
                        <div class="flex flex-wrap gap-2">
                            <span
                                v-for="skill in group.skills"
                                :key="skill"
                                class="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-neutral-300"
                            >
                                {{ skill }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
