import type { App } from 'vue';
import { vMagnetic } from '@/directives/magnetic';
import { vReveal } from '@/directives/reveal';
import { vTilt } from '@/directives/tilt';

export function registerDirectives(app: App): void {
    app.directive('reveal', vReveal);
    app.directive('tilt', vTilt);
    app.directive('magnetic', vMagnetic);
}
