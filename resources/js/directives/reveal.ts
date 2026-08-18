import type { Directive } from 'vue';

interface RevealOptions {
    delay?: number;
    /** CSS class applied while hidden; swapped for `reveal-in` once visible. */
    variant?: 'up' | 'left' | 'right' | 'scale';
}

const observers = new WeakMap<Element, IntersectionObserver>();

function resolveOptions(
    value: RevealOptions | number | undefined,
): RevealOptions {
    if (typeof value === 'number') {
        return { delay: value };
    }

    return value ?? {};
}

export const vReveal: Directive<
    HTMLElement,
    RevealOptions | number | undefined
> = {
    mounted(el, binding) {
        const { delay = 0, variant = 'up' } = resolveOptions(binding.value);

        el.classList.add('reveal', `reveal-${variant}`);

        if (delay) {
            el.style.transitionDelay = `${Math.min(delay, 900)}ms`;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        el.classList.add('reveal-in');
                        observer.disconnect();
                        observers.delete(el);
                    }
                }
            },
            { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
        );

        observer.observe(el);
        observers.set(el, observer);
    },
    unmounted(el) {
        observers.get(el)?.disconnect();
        observers.delete(el);
    },
};
