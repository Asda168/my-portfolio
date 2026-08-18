<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

const x = ref(0);
const y = ref(0);
const visible = ref(false);
const enabled = ref(false);

let targetX = 0;
let targetY = 0;
let frame: number | undefined;

function loop() {
    x.value += (targetX - x.value) * 0.12;
    y.value += (targetY - y.value) * 0.12;
    frame = requestAnimationFrame(loop);
}

function onMove(event: PointerEvent) {
    if (event.pointerType !== 'mouse') {
        return;
    }

    targetX = event.clientX;
    targetY = event.clientY;
    visible.value = true;
}

function onLeave() {
    visible.value = false;
}

onMounted(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
    ).matches;

    enabled.value = finePointer && !reducedMotion;

    if (!enabled.value) {
        return;
    }

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    frame = requestAnimationFrame(loop);
});

onBeforeUnmount(() => {
    window.removeEventListener('pointermove', onMove);
    document.removeEventListener('mouseleave', onLeave);

    if (frame) {
        cancelAnimationFrame(frame);
    }
});
</script>

<template>
    <div
        v-if="enabled"
        class="pointer-events-none fixed inset-0 z-[1] hidden overflow-hidden transition-opacity duration-500 lg:block"
        :class="visible ? 'opacity-100' : 'opacity-0'"
        aria-hidden="true"
    >
        <div
            class="absolute h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.12)_0%,transparent_70%)]"
            :style="{ left: `${x}px`, top: `${y}px` }"
        />
    </div>
</template>
