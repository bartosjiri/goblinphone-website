import { writable } from "svelte/store";

type Variant = "light" | "dark";

export const topbarVariant = writable<Variant>("dark");