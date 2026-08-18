<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import AboutSection from '@/components/portfolio/AboutSection.vue';
import BackToTop from '@/components/portfolio/BackToTop.vue';
import ContactSection from '@/components/portfolio/ContactSection.vue';
import CursorGlow from '@/components/portfolio/CursorGlow.vue';
import EducationSection from '@/components/portfolio/EducationSection.vue';
import ExperienceSection from '@/components/portfolio/ExperienceSection.vue';
import HeroSection from '@/components/portfolio/HeroSection.vue';
import PortfolioFooter from '@/components/portfolio/PortfolioFooter.vue';
import PortfolioNav from '@/components/portfolio/PortfolioNav.vue';
import ProjectsSection from '@/components/portfolio/ProjectsSection.vue';
import ScrollProgress from '@/components/portfolio/ScrollProgress.vue';
import { Toaster } from '@/components/ui/sonner';
import { useAppearance } from '@/composables/useAppearance';

const { appearance } = useAppearance();
</script>

<template>
    <Head title="Ourk Asda — Full Stack Developer">
        <meta
            name="description"
            content="Ourk Asda is a Full Stack Developer based in Phnom Penh, Cambodia, specializing in Laravel, Vue.js, and REST API development."
        />
        <meta property="og:title" content="Ourk Asda — Full Stack Developer" />
        <meta
            property="og:description"
            content="Full Stack Developer specializing in building modern web applications, robust backend APIs, and intuitive user experiences."
        />
        <meta property="og:image" content="/ourk_asda_profile.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
    </Head>

    <div
        class="relative bg-white font-sans text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100"
    >
        <ScrollProgress />
        <CursorGlow />
        <PortfolioNav />

        <main class="relative z-10">
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <EducationSection />
            <ProjectsSection />
            <ContactSection />
        </main>

        <div class="relative z-10">
            <PortfolioFooter />
        </div>

        <BackToTop />

        <Toaster :theme="appearance" rich-colors position="bottom-right" />
    </div>
</template>
