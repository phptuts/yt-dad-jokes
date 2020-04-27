<script>
  import { fly } from "svelte/transition";
  export let duration = 1000;
  export let distance = 200;
</script>

<div in:fly={{ y: distance, duration }} out:fly={{ x: distance, distance }}>
  <slot />
</div>
