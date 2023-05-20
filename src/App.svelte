<script lang="ts">
  import Greet from "./lib/Greet.svelte";
  export const ts: string = "Typescript";
</script>

<main class="container items-center">
  <h1 class="text-3xl uppercase">Welcome to Tauri!</h1>

  <div class="row">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo vite" alt="Vite Logo" />
    </a>
    <a href="https://tauri.app" target="_blank">
      <img src="/tauri.svg" class="logo tauri" alt="Tauri Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank">
      <img src="/svelte.svg" class="logo svelte" alt="Svelte Logo" />
    </a>
    <a href="https://tailwindcss.com/" target="_blank">
      <img src="/tailwind.svg" class="logo tw" alt="Tailwind Logo" />
    </a>
  </div>

  <p>Click on the Tauri, Vite, Svelte, Tailwind logos to learn more.</p>

  <div class="mt-2">
    <p>... And this is {ts} test 😀</p>
  </div>

  <Greet />
</main>

<style>
  .logo.vite:hover {
    filter: drop-shadow(0 0 2em #747bff);
  }

  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00);
  }
  .logo.tw:hover {
    filter: drop-shadow(0 0 2em #07b6d5);
  }
</style>
