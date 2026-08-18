import { onBeforeUnmount, onMounted, ref } from 'vue';

interface UseTypewriterOptions {
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
}

export function useTypewriter({
    words,
    typingSpeed = 90,
    deletingSpeed = 45,
    pauseDuration = 1800,
}: UseTypewriterOptions) {
    const text = ref('');
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    function tick() {
        const currentWord = words[wordIndex % words.length];

        if (!deleting) {
            charIndex++;
            text.value = currentWord.slice(0, charIndex);

            if (charIndex === currentWord.length) {
                deleting = true;
                timeoutId = setTimeout(tick, pauseDuration);

                return;
            }
        } else {
            charIndex--;
            text.value = currentWord.slice(0, charIndex);

            if (charIndex === 0) {
                deleting = false;
                wordIndex++;
            }
        }

        timeoutId = setTimeout(tick, deleting ? deletingSpeed : typingSpeed);
    }

    onMounted(() => {
        timeoutId = setTimeout(tick, typingSpeed);
    });

    onBeforeUnmount(() => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
    });

    return { text };
}
