<script>
  import { newCard } from './store'
  import Card from './Card.svelte'

  let characters = []

  newCard.subscribe(card => {
    characters = [...characters, card]
  })
</script>

{#each characters as character}
  <Card {character} />
{/each}