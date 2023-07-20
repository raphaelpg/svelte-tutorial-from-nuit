import { writable } from "svelte/store"

export const newCard = writable({
  name: 'Bahamut',
  src: 'city.webp'
})