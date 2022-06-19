import { writable } from "svelte/store"

import type { Writable } from "svelte/store"

export type Post = {
  description: string,
  imageUrl: string,
  userName: string,
  userImageUrl: string,
  likes: number,
  replies: number
}

export const loading = writable(true)
export const error = writable(false)
export const posts: Writable<Post[]> = writable([])
export const newPostActive = writable(false)

export const getPosts = async (): Promise<void> => {
  loading.set(true)

  try {
    const response = await fetch("/api/applications/gobgram")
    const data = await response.json()

    if (response.status !== 200) {
      error.set(true)
      loading.set(false)
      return
    }

    posts.set(data)
    loading.set(false)
  } catch (err) {
    error.set(true)
    loading.set(false)
  }
}
