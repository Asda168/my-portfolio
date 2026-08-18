import type { Directive } from 'vue';

interface TiltState {
    onMove: (event: PointerEvent) => void;
    onLeave: () => void;
}

const states = new WeakMap<HTMLElement, TiltState>();
const MAX_TILT = 8;

export const vTilt: Directive<HTMLElement> = {
    mounted(el) {
        el.style.transformStyle = 'preserve-3d';
        el.style.willChange = 'transform';

        const onMove = (event: PointerEvent) => {
            if (event.pointerType !== 'mouse') {
                return;
            }

            const rect = el.getBoundingClientRect();
            const px = (event.clientX - rect.left) / rect.width;
            const py = (event.clientY - rect.top) / rect.height;

            const rotateY = (px - 0.5) * MAX_TILT * 2;
            const rotateX = (0.5 - py) * MAX_TILT * 2;

            el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
            el.style.setProperty('--tilt-px', `${px * 100}%`);
            el.style.setProperty('--tilt-py', `${py * 100}%`);
        };

        const onLeave = () => {
            el.style.transform =
                'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)';
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
