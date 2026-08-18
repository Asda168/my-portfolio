import { onBeforeUnmount, ref, watch } from 'vue';
import type { Ref } from 'vue';

interface UseCountUpOptions {
    duration?: number;
}

function easeOutExpo(t: number): number {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export function useCountUp(
    target: number,
    { duration = 1400 }: UseCountUpOptions = {},
): { value: Ref<number>; elRef: Ref<HTMLElement | null> } {
    const value = ref(0);
    const elRef = ref<HTMLElement | null>(null);
    let frame: number | undefined;
    let observer: IntersectionObserver | undefined;

    function animate() {
        const start = performance.now();

        function step(now: number) {
            const progress = Math.min((now - start) / duration, 1);

            value.value = Math.round(target * easeOutExpo(progress));

            if (progress < 1) {
                frame = requestAnimationFrame(step);
            }
        }

        frame = requestAnimationFrame(step);
    }

    watch(elRef, (el) => {
        if (!el) {
            return;
        }

        observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        animate();
                        observer?.disconnect();
                    }
                }
            },
            { threshold: 0.4 },
        );

        observer.observe(el);
    });

    onBeforeUnmount(() => {
        if (frame) {
            cancelAnimationFrame(frame);
        }

        observer?.disconnect();
    });

    return { value, elRef };
}
