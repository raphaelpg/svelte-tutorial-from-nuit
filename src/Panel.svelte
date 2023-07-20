<script>
  import { newCard } from './store'
  export let name = 'Spike'
  export let src = 'spike.jpg'
  function create() {
    $newCard = {name, src}
  }
</script>

<panel>
  <h1>{name}</h1>
  <img {src} alt='test'/>
  <input bind:value={name}/>
  <input bind:value={src}/>
  <button on:click={create}>CREATE</button>
</panel>