import { writable } from "svelte/store";

import type { Writable } from "svelte/store";

type Track = {
  title: string;
  artist: string;
  filename: string;
}

export const volume: Writable<number> = writable(70);
export const progress: Writable<number> = writable(0);
export const playing: Writable<boolean> = writable(true);
export const track: Writable<Track | null> = writable(null);