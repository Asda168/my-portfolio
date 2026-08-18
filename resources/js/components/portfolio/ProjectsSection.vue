<script setup lang="ts">
import { ExternalLink, SquareCode } from '@lucide/vue';
import BrandIcon from '@/components/portfolio/BrandIcon.vue';

const projects = [
    {
        title: 'CheckinMe Enterprise Dashboard',
        description:
            'Internal dashboard for managing bookings, staff, and reporting for an enterprise check-in platform.',
        tags: ['Laravel', 'Vue.js', 'MySQL', 'REST API'],
        demoUrl: '#',
        repoUrl: '#',
    },
    {
        title: 'Task Flow API',
        description:
            'A RESTful task and project management API with authentication, caching, and background jobs.',
        tags: ['Laravel', 'REST API', 'Redis', 'MySQL'],
        demoUrl: '#',
        repoUrl: '#',
    },
    {
        title: 'DevBoard — Team Collaboration UI',
        description:
            'A responsive team collaboration interface with real-time updates and a component-driven design system.',
        tags: ['Vue.js', 'Tailwind CSS', 'JavaScript'],
        demoUrl: '#',
        repoUrl: '#',
    },
];
</script>

<template>
    <section id="projects" class="scroll-mt-20 px-6 py-24 sm:py-32">
        <div class="mx-auto max-w-6xl">
            <p
                class="text-sm font-semibold tracking-widest text-cyan-400 uppercase"
            >
                Projects
            </p>
            <h2 class="mt-2 text-3xl font-bold text-neutral-50 sm:text-4xl">
                Featured work
            </h2>
            <p class="mt-4 max-w-2xl text-sm text-neutral-500">
                A few sample projects representative of my stack — swap these
                placeholders with real case studies, screenshots, and links.
            </p>

            <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <article
                    v-for="project in projects"
                    :key="project.title"
                    class="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:border-cyan-400/40 hover:bg-white/[0.05]"
                >
                    <div
                        class="flex aspect-video items-center justify-center bg-gradient-to-br from-cyan-500/10 via-neutral-900 to-purple-500/10"
                    >
                        <SquareCode
                            class="h-12 w-12 text-neutral-600 transition-colors group-hover:text-cyan-400"
                        />
                    </div>

                    <div class="flex flex-1 flex-col p-6">
                        <h3 class="font-semibold text-neutral-100">
                            {{ project.title }}
                        </h3>
                        <p
                            class="mt-2 flex-1 text-sm leading-relaxed text-neutral-400"
                        >
                            {{ project.description }}
                        </p>

                        <div class="mt-4 flex flex-wrap gap-2">
                            <span
                                v-for="tag in project.tags"
                                :key="tag"
                                class="rounded-md bg-white/5 px-2 py-1 font-mono text-xs text-purple-300"
                            >
                                #{{ tag }}
                            </span>
                        </div>

                        <div
                            class="mt-6 flex items-center gap-5 border-t border-white/10 pt-4"
                        >
                            <a
                                :href="project.demoUrl"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-300 transition-colors hover:text-cyan-400"
                            >
                                <ExternalLink class="h-4 w-4" />
                                Live Demo
                            </a>
                            <a
                                :href="project.repoUrl"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-300 transition-colors hover:text-cyan-400"
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
