import { onBeforeUnmount, onMounted, ref } from 'vue';
import type { Ref } from 'vue';

export function useScrollSpy(sectionIds: string[]): { activeId: Ref<string> } {
    const activeId = ref(sectionIds[0] ?? '');
    let observer: IntersectionObserver | undefined;

    onMounted(() => {
        const elements = sectionIds
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null);

        observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visible.length > 0) {
                    activeId.value = visible[0].target.id;
                }
            },
            {
                rootMargin: '-40% 0px -50% 0px',
                threshold: [0, 0.25, 0.5, 0.75, 1],
            },
        );

        elements.forEach((el) => observer?.observe(el));
    });

    onBeforeUnmount(() => {
        observer?.disconnect();
    });

    return { activeId };
}
