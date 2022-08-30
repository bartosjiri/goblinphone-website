import { writable } from 'svelte/store';

import type { Variant } from '.';

export const topbarVariant = writable<Variant>('light');
