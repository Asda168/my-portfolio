<script setup lang="ts">
import { ExternalLink, SquareCode } from '@lucide/vue';
import BrandIcon from '@/components/portfolio/BrandIcon.vue';
import SectionHeading from '@/components/portfolio/SectionHeading.vue';

const projects = [
    {
        title: 'CheckinMe Enterprise Dashboard',
        description:
            'Internal dashboard for managing bookings, staff, and reporting for an enterprise check-in platform.',
        tags: ['Laravel', 'Vue.js', 'MySQL', 'REST API'],
        demoUrl: '#',
        repoUrl: '#',
        featured: true,
    },
    {
        title: 'Task Flow API',
        description:
            'A RESTful task and project management API with authentication, caching, and background jobs.',
        tags: ['Laravel', 'REST API', 'Redis', 'MySQL'],
        demoUrl: '#',
        repoUrl: '#',
        featured: false,
    },
    {
        title: 'DevBoard — Team Collaboration UI',
        description:
            'A responsive team collaboration interface with real-time updates and a component-driven design system.',
        tags: ['Vue.js', 'Tailwind CSS', 'JavaScript'],
        demoUrl: '#',
        repoUrl: '#',
        featured: false,
    },
];
</script>

<template>
    <section id="projects" class="scroll-mt-24 px-6 py-24 sm:py-32">
        <div class="mx-auto max-w-6xl">
            <SectionHeading
                eyebrow="Projects"
                title="Featured work"
                description="A few sample projects representative of my stack — swap these placeholders with real case studies, screenshots, and links."
            />

            <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <article
                    v-for="(project, i) in projects"
                    :key="project.title"
                    v-reveal="{ variant: 'up', delay: i * 100 }"
                    v-tilt
                    class="group relative flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-black/[0.03] transition-colors hover:border-cyan-400/40 hover:bg-black/[0.05] dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.05]"
                >
                    <span
                        v-if="project.featured"
                        class="absolute top-4 right-4 z-10 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-2.5 py-1 text-[10px] font-bold tracking-wide text-neutral-950 uppercase"
                    >
                        Featured
                    </span>

                    <div
                        class="relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-500/10 via-neutral-100 to-purple-500/10 dark:via-neutral-900"
                    >
                        <SquareCode
                            class="h-12 w-12 text-neutral-400 transition-transform duration-500 group-hover:scale-110 group-hover:text-cyan-500 dark:text-neutral-600 dark:group-hover:text-cyan-400"
                        />
                        <div
                            class="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full dark:via-white/10"
                            aria-hidden="true"
                        />
                    </div>

                    <div class="flex flex-1 flex-col p-6">
                        <h3
                            class="font-semibold text-neutral-900 dark:text-neutral-100"
                        >
                            {{ project.title }}
                        </h3>
                        <p
                            class="mt-2 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400"
                        >
                            {{ project.description }}
                        </p>

                        <div class="mt-4 flex flex-wrap gap-2">
                            <span
                                v-for="tag in project.tags"
                                :key="tag"
                                class="rounded-md bg-black/5 px-2 py-1 font-mono text-xs text-purple-600 dark:bg-white/5 dark:text-purple-300"
                            >
                                #{{ tag }}
                            </span>
                        </div>

                        <div
                            class="mt-6 flex items-center gap-5 border-t border-black/10 pt-4 dark:border-white/10"
                        >
                            <a
                                :href="project.demoUrl"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="group/link inline-flex items-center gap-1.5 text-sm font-medium text-neutral-700 transition-colors hover:text-cyan-500 dark:text-neutral-300 dark:hover:text-cyan-400"
                            >
                                <ExternalLink
                                    class="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                                />
                                Live Demo
                            </a>
                            <a
                                :href="project.repoUrl"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-700 transition-colors hover:text-cyan-500 dark:text-neutral-300 dark:hover:text-cyan-400"
                            >
                                <span class="h-4 w-4">
                                    <BrandIcon name="github" />
                                </span>
                                GitHub Repo
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>
