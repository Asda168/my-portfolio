<script setup lang="ts">
import { Mail, MapPin, Phone, Send } from '@lucide/vue';
import { reactive, ref } from 'vue';
import { toast } from 'vue-sonner';
import BrandIcon from '@/components/portfolio/BrandIcon.vue';

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
        href: 'https://linkedin.com',
    },
    { name: 'telegram' as const, label: 'Telegram', href: 'https://t.me' },
];

const form = reactive({
    name: '',
    email: '',
    message: '',
});

const submitting = ref(false);

// No backend endpoint is wired up yet, so this simulates a submission
// and gives the visitor immediate feedback via a toast.
function handleSubmit() {
    if (!form.name || !form.email || !form.message) {
        toast.error('Please fill in every field before sending.');

        return;
    }

    submitting.value = true;

    setTimeout(() => {
        submitting.value = false;
        toast.success(`Thanks, ${form.name}! Your message has been sent.`);
        form.name = '';
        form.email = '';
        form.message = '';
    }, 700);
}
</script>

<template>
    <section id="contact" class="scroll-mt-20 px-6 py-24 sm:py-32">
        <div class="mx-auto max-w-6xl">
            <p
                class="text-sm font-semibold tracking-widest text-cyan-400 uppercase"
            >
                Contact
            </p>
            <h2 class="mt-2 text-3xl font-bold text-neutral-50 sm:text-4xl">
                Let's build something together
            </h2>
            <p class="mt-4 max-w-2xl text-sm text-neutral-500">
                Have a project in mind or just want to say hi? My inbox is
                always open.
            </p>

            <div class="mt-12 grid gap-10 lg:grid-cols-5">
                <div class="space-y-4 lg:col-span-2">
                    <a
                        v-for="detail in contactDetails"
                        :key="detail.label"
                        :href="detail.href ?? undefined"
                        class="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors"
                        :class="
                            detail.href &&
                            'hover:border-cyan-400/40 hover:bg-white/[0.05]'
                        "
                    >
                        <span
                            class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20"
                        >
                            <component
                                :is="detail.icon"
                                class="h-5 w-5 text-cyan-400"
                            />
                        </span>
                        <span>
                            <span class="block text-xs text-neutral-500">{{
                                detail.label
                            }}</span>
                            <span
                                class="block text-sm font-medium text-neutral-100"
                                >{{ detail.value }}</span
                            >
                        </span>
                    </a>

                    <div class="flex gap-3 pt-2">
                        <a
                            v-for="social in socials"
                            :key="social.name"
                            :href="social.href"
                            target="_blank"
                            rel="noopener noreferrer"
                            :aria-label="social.label"
                            class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] p-2.5 text-neutral-400 transition-colors hover:border-cyan-400/40 hover:text-cyan-400"
                        >
                            <BrandIcon :name="social.name" />
                        </a>
                    </div>
                </div>

                <form
                    class="space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-8 lg:col-span-3"
                    @submit.prevent="handleSubmit"
                >
                    <div>
                        <label
                            for="name"
                            class="mb-2 block text-sm font-medium text-neutral-300"
                            >Name</label
                        >
                        <input
                            id="name"
                            v-model="form.name"
                            type="text"
                            placeholder="Your name"
                            class="w-full rounded-xl border border-white/10 bg-neutral-950/60 px-4 py-2.5 text-sm text-neutral-100 placeholder-neutral-600 transition-colors outline-none focus:border-cyan-400/60"
                        />
                    </div>

                    <div>
                        <label
                            for="email"
                            class="mb-2 block text-sm font-medium text-neutral-300"
                            >Email</label
                        >
                        <input
                            id="email"
                            v-model="form.email"
                            type="email"
                            placeholder="you@example.com"
                            class="w-full rounded-xl border border-white/10 bg-neutral-950/60 px-4 py-2.5 text-sm text-neutral-100 placeholder-neutral-600 transition-colors outline-none focus:border-cyan-400/60"
                        />
                    </div>

                    <div>
                        <label
                            for="message"
                            class="mb-2 block text-sm font-medium text-neutral-300"
                            >Message</label
                        >
                        <textarea
                            id="message"
                            v-model="form.message"
                            rows="5"
                            placeholder="Tell me about your project..."
                            class="w-full resize-none rounded-xl border border-white/10 bg-neutral-950/60 px-4 py-2.5 text-sm text-neutral-100 placeholder-neutral-600 transition-colors outline-none focus:border-cyan-400/60"
                        />
                    </div>

                    <button
                        type="submit"
                        :disabled="submitting"
                        class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-3 text-sm font-semibold text-neutral-950 transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        <Send class="h-4 w-4" />
                        {{ submitting ? 'Sending...' : 'Send Message' }}
                    </button>
                </form>
            </div>
        </div>
    </section>
</template>
