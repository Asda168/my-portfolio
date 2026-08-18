<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import AboutSection from '@/components/portfolio/AboutSection.vue';
import ContactSection from '@/components/portfolio/ContactSection.vue';
import EducationSection from '@/components/portfolio/EducationSection.vue';
import ExperienceSection from '@/components/portfolio/ExperienceSection.vue';
import HeroSection from '@/components/portfolio/HeroSection.vue';
import PortfolioFooter from '@/components/portfolio/PortfolioFooter.vue';
import PortfolioNav from '@/components/portfolio/PortfolioNav.vue';
import ProjectsSection from '@/components/portfolio/ProjectsSection.vue';
import { Toaster } from '@/components/ui/sonner';
</script>

<template>
    <Head title="Ourk Asda — Full Stack Developer">
        <meta
            name="description"
            content="Ourk Asda is a Full Stack Developer based in Phnom Penh, Cambodia, specializing in Laravel, Vue.js, and REST API development."
        />
    </Head>

    <div class="bg-neutral-950 font-sans text-neutral-100 antialiased">
        <PortfolioNav />

        <main>
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <EducationSection />
            <ProjectsSection />
            <ContactSection />
        </main>

        <PortfolioFooter />

        <Toaster theme="dark" rich-colors position="bottom-right" />
    </div>
</template>
