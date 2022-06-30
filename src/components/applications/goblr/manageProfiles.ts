import { writable, get } from "svelte/store"

import type { Writable } from "svelte/store"
import type { Profile } from ".";

export const loading = writable(true)
export const error = writable(false)
export const profiles: Writable<Profile[]> = writable([])

export const getProfiles = async (): Promise<void> => {
  loading.set(true)

  try {
    const response = await fetch("/api/applications/goblr")
    const data = await response.json()

    if (response.status !== 200) {
      error.set(true)
      loading.set(false)
      return
    }

    const cachedProfiles = get(profiles)
    profiles.set([...data, ...cachedProfiles])
    loading.set(false)
  } catch (err) {
    error.set(true)
    loading.set(false)
  }
}

export const removeCurrentProfile = (): void => {
  const cachedProfiles = get(profiles)
  profiles.set(cachedProfiles.slice(0, -1))
}