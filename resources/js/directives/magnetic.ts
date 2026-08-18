import type { Directive } from 'vue';

interface MagneticState {
    onMove: (event: PointerEvent) => void;
    onLeave: () => void;
}

const states = new WeakMap<HTMLElement, MagneticState>();
const STRENGTH = 0.35;
const MAX_OFFSET = 14;

export const vMagnetic: Directive<HTMLElement> = {
    mounted(el) {
        el.style.willChange = 'transform';

        const onMove = (event: PointerEvent) => {
            if (event.pointerType !== 'mouse') {
                return;
            }

            const rect = el.getBoundingClientRect();
            const x = event.clientX - (rect.left + rect.width / 2);
            const y = event.clientY - (rect.top + rect.height / 2);

            const dx = Math.max(
                -MAX_OFFSET,
                Math.min(MAX_OFFSET, x * STRENGTH),
            );
            const dy = Math.max(
                -MAX_OFFSET,
                Math.min(MAX_OFFSET, y * STRENGTH),
            );

            el.style.transform = `translate(${dx}px, ${dy}px)`;
        };

        const onLeave = () => {
            el.style.transform = 'translate(0, 0)';
        };

        el.addEventListener('pointermove', onMove);
        el.addEventListener('pointerleave', onLeave);
        states.set(el, { onMove, onLeave });
    },
    unmounted(el) {
        const state = states.get(el);

        if (state) {
            el.removeEventListener('pointermove', state.onMove);
            el.removeEventListener('pointerleave', state.onLeave);
            states.delete(el);
        }
    },
};
