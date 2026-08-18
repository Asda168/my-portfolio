<script setup lang="ts">
import { Form } from '@inertiajs/vue3';
import { Mail, MapPin, Phone, Send } from '@lucide/vue';
import ContactController from '@/actions/App/Http/Controllers/ContactController';
import BrandIcon from '@/components/portfolio/BrandIcon.vue';
import SectionHeading from '@/components/portfolio/SectionHeading.vue';

const contactDetails = [
    {
        icon: Mail,
        label: 'Email',
        value: 'oukasda@gmail.com',
        href: 'mailto:oukasda@gmail.com',
    },
    {
        icon: Phone,
        label: 'Phone',
        value: '090-704-447',
        href: 'tel:+85590704447',
    },
    {
        icon: MapPin,
        label: 'Location',
        value: 'Phnom Penh, Cambodia',
        href: null,
    },
];

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

const fieldClass =
    'peer w-full rounded-xl border border-black/10 bg-black/[0.03] px-4 pt-6 pb-2 text-sm text-neutral-900 placeholder-transparent transition-colors outline-none focus:border-cyan-400/60 dark:border-white/10 dark:bg-neutral-950/60 dark:text-neutral-100';

const labelClass =
    'pointer-events-none absolute top-4 left-4 text-sm text-neutral-500 transition-all duration-200 peer-focus:top-2 peer-focus:text-xs peer-focus:text-cyan-500 peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-xs dark:text-neutral-400 dark:peer-focus:text-cyan-400';
</script>

<template>
    <section id="contact" class="scroll-mt-24 px-6 py-24 sm:py-32">
        <div class="mx-auto max-w-6xl">
            <SectionHeading
                eyebrow="Contact"
                title="Let's build something together"
                description="Have a project in mind or just want to say hi? My inbox is always open."
            />

            <div class="mt-12 grid gap-10 lg:grid-cols-5">
                <div
                    v-reveal="{ variant: 'left' }"
                    class="space-y-4 lg:col-span-2"
                >
                    <a
                        v-for="detail in contactDetails"
                        :key="detail.label"
                        :href="detail.href ?? undefined"
                        class="group flex items-center gap-4 rounded-2xl border border-black/10 bg-black/[0.03] p-5 transition-all dark:border-white/10 dark:bg-white/[0.03]"
                        :class="
                            detail.href &&
                            'hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-black/[0.05] dark:hover:bg-white/[0.05]'
                        "
                    >
                        <span
                            class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 transition-transform duration-300 group-hover:scale-110"
                        >
                            <component
                                :is="detail.icon"
                                class="h-5 w-5 text-cyan-500 dark:text-cyan-400"
                            />
                        </span>
                        <span>
                            <span class="block text-xs text-neutral-500">{{
                                detail.label
                            }}</span>
                            <span
                                class="block text-sm font-medium text-neutral-900 dark:text-neutral-100"
                                >{{ detail.value }}</span
                            >
                        </span>
                    </a>

                    <div class="flex gap-3 pt-2">
                        <a
                            v-for="social in socials"
                            :key="social.name"
                            v-magnetic
                            :href="social.href"
                            target="_blank"
                            rel="noopener noreferrer"
                            :aria-label="social.label"
                            class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-black/[0.03] p-2.5 text-neutral-600 transition-colors hover:border-cyan-400/40 hover:text-cyan-500 dark:border-white/10 dark:bg-white/[0.03] dark:text-neutral-400 dark:hover:text-cyan-400"
                        >
                            <BrandIcon :name="social.name" />
                        </a>
                    </div>
                </div>

                <Form
                    v-reveal="{ variant: 'right', delay: 120 }"
                    :action="ContactController.store()"
                    reset-on-success
                    class="space-y-5 rounded-2xl border border-black/10 bg-black/[0.03] p-8 lg:col-span-3 dark:border-white/10 dark:bg-white/[0.03]"
                    v-slot="{ errors, processing, recentlySuccessful }"
                >
                    <div class="relative">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder=" "
                            :class="fieldClass"
                        />
                        <label for="name" :class="labelClass">Name</label>
                        <p
                            v-if="errors.name"
                            class="mt-1.5 text-xs text-red-600 dark:text-red-400"
                        >
                            {{ errors.name }}
                        </p>
                    </div>

                    <div class="relative">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder=" "
                            :class="fieldClass"
                        />
                        <label for="email" :class="labelClass">Email</label>
                        <p
                            v-if="errors.email"
                            class="mt-1.5 text-xs text-red-600 dark:text-red-400"
                        >
                            {{ errors.email }}
                        </p>
                    </div>

                    <div class="relative">
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder=" "
                            class="peer w-full resize-none rounded-xl border border-black/10 bg-black/[0.03] px-4 pt-6 pb-2 text-sm text-neutral-900 placeholder-transparent transition-colors outline-none focus:border-cyan-400/60 dark:border-white/10 dark:bg-neutral-950/60 dark:text-neutral-100"
                        />
                        <label for="message" :class="labelClass">Message</label>
                        <p
                            v-if="errors.message"
                            class="mt-1.5 text-xs text-red-600 dark:text-red-400"
                        >
                            {{ errors.message }}
                        </p>
                    </div>

                    <button
                        v-magnetic
                        type="submit"
                        :disabled="processing"
                        class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-3 text-sm font-semibold text-neutral-950 transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        <Send
                            class="h-4 w-4"
                            :class="{ 'animate-pulse': processing }"
                        />
                        {{
                            processing
                                ? 'Sending...'
                                : recentlySuccessful
                                  ? 'Sent!'
                                  : 'Send Message'
                        }}
                    </button>
                </Form>
            </div>
        </div>
    </section>
</template>
