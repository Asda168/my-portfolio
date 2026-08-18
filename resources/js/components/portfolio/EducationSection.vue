<script setup lang="ts">
import { Calendar, GraduationCap, MapPin } from '@lucide/vue';

const education = [
    {
        degree: "Bachelor's Degree in Software Engineering",
        institution: 'BELTEI International University',
        location: 'Phnom Penh',
        period: '2023 – Present',
        status: 'Year 3, Semester 1',
        progress: 62,
    },
    {
        degree: 'High School Diploma',
        institution: 'Hun Sen Angkor Borey High School',
        location: 'Takeo',
        period: '2017 – 2022',
        status: 'Completed',
        progress: 100,
    },
];
</script>

<template>
    <section id="education" class="scroll-mt-20 px-6 py-24 sm:py-32">
        <div class="mx-auto max-w-4xl">
            <p
                class="text-sm font-semibold tracking-widest text-cyan-400 uppercase"
            >
                Education
            </p>
            <h2 class="mt-2 text-3xl font-bold text-neutral-50 sm:text-4xl">
                Academic background
            </h2>

            <div class="mt-12 grid gap-6 sm:grid-cols-2">
                <div
                    v-for="item in education"
                    :key="item.institution"
                    class="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-purple-400/40 hover:bg-white/[0.05]"
                >
                    <div
                        class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20"
                    >
                        <GraduationCap class="h-5 w-5 text-purple-400" />
                    </div>

                    <h3 class="font-semibold text-neutral-100">
                        {{ item.degree }}
                    </h3>
                    <p class="mt-1 text-sm font-medium text-cyan-400">
                        {{ item.institution }}
                    </p>

                    <div
                        class="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-500"
                    >
                        <span class="inline-flex items-center gap-1.5">
                            <Calendar class="h-3.5 w-3.5" />
                            {{ item.period }}
                        </span>
                        <span class="inline-flex items-center gap-1.5">
                            <MapPin class="h-3.5 w-3.5" />
                            {{ item.location }}
                        </span>
                    </div>

                    <div class="mt-6">
                        <div
                            class="flex items-center justify-between text-xs text-neutral-400"
                        >
                            <span>{{ item.status }}</span>
                            <span>{{ item.progress }}%</span>
                        </div>
                        <div
                            class="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10"
                        >
                            <div
                                class="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                                :style="{ width: `${item.progress}%` }"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
